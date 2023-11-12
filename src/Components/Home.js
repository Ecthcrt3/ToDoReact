import React from 'react'

export default function Home() {
  return (
    <article className="m-2 p-3 text-center">
        <div className="rounded bg-dark text-light p-3">
            <h1>Welcome,</h1>
            <h2>To my ToDo React App!</h2>
        </div>

        <div className="container bg-dark text-light m-5 p-2 rounded">
            <h3>About The App</h3>
            <p>
                This App was created to display my abilities using a react environment.  It is equipped with a custom api, github login functionality and the ability to Create, Read, Update, and Delete items from the API
            </p>
        </div>

        <div className="container bg-dark text-light m-5 p-2 rounded">
            <h3>About the Author</h3>
            <p>
                My name is Gene Cathcart, I am a Web developer trained by Centriq Training and an I.T. support technician. I am trained in using HTML, CSS, JavaScript, C#, Java, SQL, MVC, and React.  I am a passionate developer that loves problem solving and creating solutions to tough coding problems.  If you would like to check out more of my work make sure to check out my portfolio site: <a href='http://www.GeneCathcart.com' target='_blank' rel='norefferer'>GeneCathcart.com</a> 
            </p>
        </div>
    </article>
  )
}
