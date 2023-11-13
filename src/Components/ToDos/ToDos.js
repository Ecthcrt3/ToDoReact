import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import SingleToDo from './SingleToDo';
import FilterCat from './FilterCat';
import { useAuth } from '../../Contexts/AuthContext'
import ToDoCreate from './ToDoCreate'
import Form from 'react-bootstrap/Form';


export default function ToDos() {
  const [toDos, setToDos] = useState([]);
  const { currentUser } = useAuth()
  const [showCreate, setShowCreate] = useState(false)
const [showFinished, setShowFinished] = useState(false);

  const [filter, setFilter] = useState(0);

  const getToDos = () => {
    axios.get(`http://todoapi.genecathcart.com/api/ToDoes`).then(response => {
      setToDos(response.data)
    })
  }

  useEffect(() => {
    getToDos()
  }, []);

  return (
    <section className="toDos">
    <article className="bg-dark text-light mt-4 p-3 rounded text-center">
        <h1 className="text-center">To Do List</h1>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && 
        <>
          <button className="btn btn-outline-light m-2" onClick={() => setShowCreate(!showCreate)}>
            {!showCreate ? 'Create New Task' : 'Cancel'}
          </button>
          <div className="createContainer">
            {showCreate &&
              //Render ResourceCreate component when showCreate is true
              <ToDoCreate getToDos={getToDos} setShowCreate={setShowCreate} />
            }
          </div>
        </>}
    </article>


    <div className="filterContainer rounded bg-dark">
      <FilterCat setFilter={setFilter} />
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label='Show Finished Tasks?'
          onClick={() => {setShowFinished(!showFinished)}}
          />
      </Form>
    </div>
    <Container>
      <table className="table bg-info table-dark m-3">
        <thead className="table-secondary text-uppercase text-center">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Finished?</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {filter === 0 ? 
          toDos.filter(t => t.done === showFinished).map(t => <SingleToDo key={t.toDoId} todo={t} getToDos={getToDos}/>) :
          toDos.filter(t => t.categoryId === filter, t => t.done === showFinished).map(t => <SingleToDo key={t.toDoId} todo={t} getToDos={getToDos}  />)
          }
          {filter !== 0 && toDos.filter(t => t.categoryId === filter).length === 0 &&
          <h2 className="alert alert-warning text-dark">
              There are no results for this category
          </h2>
        }
        </tbody>
      </table>
    </Container>
</section>
  )
}
