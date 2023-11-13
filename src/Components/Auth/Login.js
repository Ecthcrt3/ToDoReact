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
