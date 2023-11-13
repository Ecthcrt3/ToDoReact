import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { todoSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function ToDoForm(props) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://todoapi.genecathcart.com/api/Categories`).then(response => {
            setCategories(response.data)
        })
    }, [])

    const handleSubmit = (values) => {
        if(!props.todo){
            const todoToCreate = values

            axios.post(`http://todoapi.genecathcart.com/api/todoes`, todoToCreate).then(() => {
                props.setShowCreate(false)
                props.getToDos()
            })
        }
        else {
            const todoToEdit = {
                toDoId: props.todo.toDoId,
                name: values.name,
                categoryId: values.categoryId,
                done: false
              }
              axios.put(`http://todoapi.genecathcart.com/api/todoes/${props.todo.toDoId}`, todoToEdit).then(() => {
                props.setShowEdit(false)
                props.getToDos()
              })
            }
    }

  return (
    <Formik 
       validationSchema={todoSchema}
       initialValues={{
           name: props.todo ? props.todo.name : '',
           categoryId: props.todo ? props.todo.categoryId : ''
       }}
       onSubmit={(values) => handleSubmit(values)}>
        {({errors, touched}) => (
            <Form id='todoForm'>
                <div className="form-group m-3">
                    <Field name='name' placeholder='Name' className='form-control'/>
                    {errors.name && touched.name &&
                        <div className="text-danger">
                            {errors.name}
                        </div>
                    }
                </div>

        <div className="form-group m-3">
            <Field as='select' name='categoryId' className='form-control'>
              <option value='' disabled>
                [--Please Choose--]
              </option>
              {categories.map(cat => 
                <option key={cat.categoryId} value={cat.categoryId}>
                  {cat.categoryName}
                </option>  
              )}
            </Field>
        </div>
                
        <div className="form-group m-3">
            <button className="btn btn-success" type='submit'>
                Submit Task to Api
            </button>
        </div>

        
        </Form>
        )}


    </Formik>
  )
}
