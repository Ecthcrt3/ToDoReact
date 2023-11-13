import React from 'react'
import { useAuth } from '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const {logout} = useAuth()
    const navigate = useNavigate()

    function handleAuth(){
        logout()
        navigate('/')
    }
  return (
    <div className="text-center">

        <button className="btn btn-info" onClick={() => handleAuth()}>Logout</button>
    </div>

  )
}