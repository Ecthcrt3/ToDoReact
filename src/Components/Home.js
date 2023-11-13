import React from 'react'
import {Row, Col} from 'react-bootstrap'
import image from '../images/Gene.jpg'
import './Home.css'

export default function Home() {
  return (
    <article className="mt-5 text-center">
        <div className="rounded bg-dark text-light p-3">
            <h1>Welcome,</h1>
            <h2>To my ToDo React App!</h2>
        </div>

        <div className="container bg-dark text-light mx-auto my-5 p-2 rounded">
            <h3 className='m-3'>About The App</h3>
            <p className='textContainer rounded p-2 m-4'>
                This App was created to display my abilities using a react environment.  It is equipped with a custom api, github login functionality and the ability to Create, Read, Update, and Delete items from the API
            </p>
        </div>

        <div className="container bg-dark text-light mx-auto my-5 p-2 rounded">
            <h3 className='m-3'>About the Author</h3>
            <Row>
                <Col md={{span: 5, offset: 1}} className='mb-2'>
                    <div className="imageContainer rounded">
                        <img src={image} alt="Gene Cathcart" />
                    </div>
                </Col>

                <Col md={{span: 5}}>
                    <p className='textContainer rounded p-2'>
                    My name is Gene Cathcart, I am a Web developer trained by Centriq Training and an I.T. support technician. I am trained in using HTML, CSS, JavaScript, C#, Java, SQL, MVC, and React.  I am a passionate developer that loves problem solving and creating solutions to tough coding problems.  If you would like to check out more of my work make sure to check out my portfolio site: <a href='http://www.GeneCathcart.com' target='_blank' rel='noreferrer'>GeneCathcart.com</a> 
                    </p>
                </Col>
            </Row>
        </div>
    </article>
  )
}
