import React from 'react'

function  CardDetailProfile({ title, description }) {
  return (
    
    <div className='card-detail-profile'>
      <h1 className='card-detail-profile-title'>{title}</h1>
      <p className='card-detail-profile-description'>{description != null ? description : null}</p>
    </div>
  )
}

export default CardDetailProfile