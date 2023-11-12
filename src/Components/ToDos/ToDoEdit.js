import React from 'react'
import Modal from 'react-bootstrap/Modal'
import ToDoForm from './ToDoForm'
import axios from 'axios'

export default function ToDoEdit(props) {

    const deleteTodo = (id) => {
        if(window.confirm(`Are you sure you want to delete ${props.todo.name}`)){
            axios.delete(`http://todoapi.genecathcart.com/api/todoes/${id}`).then(() => {
                props.getToDos()
                props.setShowEdit(false)
            })
        }
    }

  return (
    <Modal
       show={props.showEdit}
       onHide={() => props.setShowEdit(false)}
       size='lg'>
        <Modal.Header className='bg-info' closeButton>
            <h3>Editing {props.todo.name} </h3>
        </Modal.Header>
        <Modal.Body>
            <ToDoForm 
                setShowEdit={props.setShowEdit}
                getToDos={props.getToDos}
                todo={props.todo}
            />
            
            <button onClick={() => deleteTodo(props.todo.toDoId)} className="btn btn-danger">Delete</button>
        </Modal.Body>
    </Modal>
  )
}
