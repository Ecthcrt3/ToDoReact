import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Navigation.css'
import { useAuth } from '../Contexts/AuthContext'
import Logout from './Auth/Logout'

export default function Navigation() {
  const { currentUser } = useAuth()
  return (
  <div className='bg-dark text-center p-1 text-light'>
    <Navbar.Brand href='/'>To Do List</Navbar.Brand>
    <Navbar bg='dark' variant='dark' expand='sm'>
      <Navbar.Toggle/>
      <Navbar.Collapse className='justify-content-center'>
        <Nav>
          <Link to='/ToDos' className='nav-link'>To Do List</Link>
          <Link to='/Categories' className='nav-link'>Categories</Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
          {currentUser
            ? <Logout/>
            : <Link to='/Login' className='nav-link'>Login</Link>
          }
  </div>
  )
}
