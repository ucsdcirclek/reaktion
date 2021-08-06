import React from 'react'
import './Family.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Family ({ image, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className='family'>
      <h3>{title}</h3>
    </div>
  )
}

export default Family
