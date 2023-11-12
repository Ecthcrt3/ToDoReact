import React from 'react'
import './PageNotFound.css'
import image from '../images/kisspng-http-404-error-hypertext-transfer-protocol-uniform-5b2f586dc2f993.7634221715298294857986.png'

export default function PageNotFound() {
  return (
    <div className="notFound">
        <img src={image} alt="Page Not Found" />
    </div>
  )
}
