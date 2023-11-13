import React,{useState, useEffect} from 'react'
import{useAuth} from '../../Contexts/AuthContext'
import ToDoEdit from './ToDoEdit';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { FaEdit } from 'react-icons/fa'
import './ToDo.css'

export default function SingleToDo(props) {
const { toDoId, name, categoryId, done } = props.todo

const [showEdit, setShowEdit] = useState(false);

const [categories, setCategories] = useState([]);

useEffect(() => {
    axios.get(`http://todoapi.genecathcart.com/api/Categories`).then(response => {
        setCategories(response.data)
    })
}, []);

const setDone = (todo) => {
  const todoToEdit = {
    toDoId: toDoId,
    name: name,
    categoryId: categoryId,
    done: !done
  }
  axios.put(`http://todoapi.genecathcart.com/api/todoes/${toDoId}`, todoToEdit).then(() => {
    props.getToDos()
  })
}

const {currentUser} = useAuth()

  return (
        <tr>
            <td>{toDoId}</td>
            <td>
              {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL
              
              ?<button onClick={() => setShowEdit(true)} className="btn btn-dark" id='editLink'>
                {name} <div id="todoEdit"><FaEdit/></div>
              </button>
              : {name}
              }
            </td>
            {categories.filter(c => c.categoryId === categoryId).map(cat => <td>{cat.categoryName}</td> )}
            <td>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  defaultChecked={done}
                  onClick={() => setDone(props.todo)}
                  />
              </Form>
            </td>

            {showEdit &&
              <ToDoEdit 
                 todo={props.todo}
                 showEdit={showEdit}
                 setShowEdit={setShowEdit}
                 getToDos={props.getToDos}/>
            }
        </tr>
  )
}
