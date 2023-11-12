import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import SingleToDo from './SingleToDo';
import FilterCat from './FilterCat';
import { useAuth } from '../../Contexts/AuthContext'
import ToDoCreate from './ToDoCreate'


export default function ToDos() {
  const [toDos, setToDos] = useState([]);
  const { currentUser } = useAuth()
  const [showCreate, setShowCreate] = useState(false)

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
    <article className="bg-info p-5">
        <h1 className="text-center">To Do List</h1>
    </article>

    {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL && 
        <div className="bg-dark p-2 mb-3 text-center">
          <button className="btn btn-info" onClick={() => setShowCreate(!showCreate)}>
            {!showCreate ? 'Create New Resource' : 'Cancel'}
          </button>
          <div className="createContainer">
            {showCreate &&
              //Render ResourceCreate component when showCreate is true
              <ToDoCreate getToDos={getToDos} setShowCreate={setShowCreate} />
            }
          </div>
        </div>}


    <FilterCat setFilter={setFilter} />
    <Container>
      <table className="table bg-info table-dark">
        <thead className="table-secondary text-uppercase">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Category</th>
            <th>Finished?</th>
          </tr>
        </thead>
        <tbody>
          {filter === 0 ? 
          toDos.map(t => <SingleToDo key={t.toDoId} todo={t} getToDos={getToDos}/>) :
          toDos.filter(t => t.categoryId === filter).map(t => <SingleToDo key={t.toDoId} todo={t} getToDos={getToDos}  />)
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
