import React,{useState} from 'react'
import{useAuth} from '../../Contexts/AuthContext'
import ToDoEdit from './ToDoEdit';
import axios from 'axios'
import Form from 'react-bootstrap/Form';

export default function SingleToDo(props) {
const { toDoId, name, categoryId, done } = props.todo

const [showEdit, setShowEdit] = useState(false);

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
                {name}
              </button>
              : {name}
              }
            </td>
            <td>{categoryId}</td>
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
