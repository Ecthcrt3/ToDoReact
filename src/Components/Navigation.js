import React from 'react'
import { Nav, Navbar, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navigation.css'
import { useAuth } from '../Contexts/AuthContext'
import Profile from './Auth/Profile'


export default function Navigation() {
  const { currentUser } = useAuth()
  return (
  <div className='bg-dark text-center p-1 text-light'>
    <Row className='navRow'>
      <Col md={{span:1}}>
        <Link to='/' className='btn btn-dark'>React ToDo</Link>
      </Col>

      <Col md={{span: 2, offset: 4}}>
        <Navbar bg='dark' variant='dark' expand='sm' className='justify-content-center'>
            <Navbar.Toggle/>
            <Navbar.Collapse className='justify-content-center'>
              <Nav>
                <Link to='/ToDos' className='nav-link'>To Do List</Link>
                <Link to='/Categories' className='nav-link'>Categories</Link>
            </Nav>   
            </Navbar.Collapse>
          </Navbar>
      </Col>

      <Col md={{span:1, offset:4}}>
        {currentUser
          ? <Profile/>
          : <Link to='/login' className='btn btn-dark'>Login</Link>
        }
      </Col>
    </Row>

  </div>
  )
}
