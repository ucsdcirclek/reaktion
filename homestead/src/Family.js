import React from 'react'
import './Family.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Family ({ image, title, familyUrl }) {
  return (
    <Link to= {familyUrl} style={{ textDecoration: 'none' }}> 
      <div style={{ backgroundImage: `url(${image})` }} className='family'>
        <h3>{title}</h3>
      </div>
    </Link>
  )
}

export default Family
