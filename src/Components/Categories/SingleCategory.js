import React, {useState} from 'react'
import {useAuth} from '../../Contexts/AuthContext'
import axios from 'axios'
import CategoryEdit from './CategoryEdit'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function SingleCategory(props) {
  const {categoryName, categoryDescription, categoryId} = props.category

  const { currentUser } = useAuth()

  const [showEdit, setShowEdit] = useState(false);

  const deleteCat = (Id) => {
    if(window.confirm(`Are you sure you want to delete the category: ${categoryName}`)){
      axios.delete(`http://todoapi.genecathcart.com/api/categories/${props.category.categoryId}`).then(() => {props.getCategories()})
    }
  }

  return (
    <tr>
      <td>{categoryName}</td>
      <td>{categoryDescription}</td>
      {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
      <td>
        <button className="m-1 btn btn-dark" onClick={() => setShowEdit(true)}><FaEdit/></button>
        {showEdit && 
          <CategoryEdit
          setShowEdit={setShowEdit}
          showEdit={showEdit}
          getCategories={props.getCategories}
          category={props.category} />
        }
        <button className="m-1 btn btn-dark" onClick={() => deleteCat(categoryId)}>
          <FaTrash/>
        </button>
      </td>
      }
    </tr>
  )
}