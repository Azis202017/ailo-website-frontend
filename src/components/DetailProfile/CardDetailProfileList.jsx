import React from 'react'

function CardDetailProfileList({ title, description }) {
  return (

    <div className='card-detail-profile'>
      <h1 className='card-detail-profile-title'>{title}</h1>
      <ol>
        {description.map(desc => (
          <li className='card-detail-profile-description' key={desc.id}>{desc.title}</li>
        ))}
      </ol>
    </div>
  )
}

export default CardDetailProfileList