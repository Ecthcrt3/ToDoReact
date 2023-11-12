import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleAuth(){
    await login()
    return navigate('/')
  }
  return (
    <div className="login">
      <article className="bg-info mb-5 p-5 text-dark">
        <h1 className="text-center">
          Welcome To My ToDo App
        </h1>
      </article>
      <Container>
        <Card className="m-2 border-dark text-center">
          <Card.Header className="bg-dark text-white">
            <h2>Please login to see the full app</h2>
          </Card.Header>
          <Card.Body>
            <button className="btn btn-dark" onClick={() => handleAuth()}>
              Login w/ GitHub
            </button>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}
