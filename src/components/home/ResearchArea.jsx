import React from 'react'
import { Link } from 'react-router-dom'

function ResearchArea({image, name, link}) {
  return (
    <div className="nlp d-flex flex-column align-items-center">
      <Link to={link}>

        <img src={image} alt="" />
      </Link>
      <p>{name}</p>
    </div>
  )
}

export default ResearchArea