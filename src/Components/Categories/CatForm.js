import React from 'react'
import {Formik, Form, Field } from 'formik'
import { catSchema } from '../../utilities/validationSchema'
import axios from 'axios'

export default function CatForm(props) {
    const handleSubmit = (values) => {
        if(!props.category){

          const catToCreate = values
          axios.post(`http://todoapi.genecathcart.com/api/categories`, catToCreate).then(() => {
            props.setShowCreate(false)
            props.getCategories()
          })
        } else {
          const catToEdit = {
            categoryId: props.category.categoryId,
            categoryName: values.categoryName,
            categoryDescription: values.categoryDescription
          }
          axios.put(`http://todoapi.genecathcart.com/api/categories/${props.category.categoryId}`, catToEdit).then(() => {
            props.setShowEdit(false)
            props.getCategories()
          })
        }
    }


    return (
        <div className='createCategory m-2 text-white text-center'>
          <Formik
            validationSchema={catSchema}
            initialValues={
              //Below is a ternary operator that makes our form behave differently based on whether we have a prop called category. (ie Editing a category)
              {
                categoryName: props.category ? props.category.categoryName : '',
                categoryDescription: props.category ? props.category.categoryDescription : ''
              }}
              onSubmit={values => handleSubmit(values)}>
            {({errors, touched}) => (
              //Our form will go here
              <Form id='catForm' className='row text-center m-auto'>
                <div className="form-group m-1 p-1">
                  <Field name='categoryName' className='form-control' placeholder='Name' />
                  {/* Below is the conditionally rendered error message */}
                  {errors.categoryName && touched.categoryName &&
                    <div className="text-danger">{errors.categoryName}</div>
                  }
                </div>
                <div className="form-group m-1 p-1">
                  <Field name='categoryDescription' className='form-control' placeholder='Description' />
                  {/* Below is the conditionally rendered error message */}
                  {errors.categoryDescription && touched.categoryDescription &&
                    <div className="text-danger">{errors.categoryDescription}</div>
                  }
                </div>
                <div className="form-group m-1">
                  <button type='submit' className="btn btn-success">
                    Submit Category to API
                  </button>
                </div>
              </Form>
            )}
            
          </Formik>
        </div>
      )
    }
