import React from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import './Auth.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Logout from './Logout'

export default function Profile() {
    const { currentUser } = useAuth()
  return (
    <span className="profile">
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <img src={currentUser.photoURL} alt={currentUser.displayName}/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <h5>Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName}!</h5>
              <Dropdown.Item><Logout/></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
    </span>
  )
}
