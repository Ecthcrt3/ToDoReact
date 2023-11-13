import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import SingleCategory from './SingleCategory';
import { useAuth } from '../../Contexts/AuthContext'
import CatCreate from './CatCreate'

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const { currentUser } = useAuth()
  const [showCreate, setShowCreate] = useState(false)
  
  const getCategories = () => {
    axios.get(`http://todoapi.genecathcart.com/api/categories`).then(response => {
      console.log(response)
      setCategories(response.data)
    })
  }

  useEffect(() => {
    getCategories()
  }, []);

  return (
    <section className="categories">
      <article className="bg-dark text-light p-3 mt-4 rounded text-center">
        <h1 className="text-center">Categories Dashboard</h1>
        {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
            <>
            {showCreate ? 
              <>
                <button onClick={() => setShowCreate(false)} className="btn btn-outline-light">
                  Cancel
                </button>
                <CatCreate getCategories={getCategories} setShowCreate={setShowCreate} />
              </> :
              <button onClick={() => setShowCreate(true)} className="btn btn-outline-light">
                Create Category
              </button>
            }
            </>
        }
        </article>
    <Container className="p-2">
      <table className="table bg-info table-dark my-3 text-center">
        <thead className="table-secondary text-uppercase">
          <tr>
            <th>Name</th>
            <th>Description</th>
            {currentUser.email === process.env.REACT_APP_ADMIN_EMAIL &&
            <th>Actions</th>
            }
          </tr>
        </thead>
        <tbody>
          {categories.map(c =>
            <SingleCategory key={c.categoryId} category={c} getCategories={getCategories}/>
          )}
        </tbody>
      </table>
    </Container>
  </section>
  )
}
