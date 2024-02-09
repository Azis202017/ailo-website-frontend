import React from 'react'
import { useParams } from 'react-router-dom'

function DetailResearch() {
  const {id} = useParams();
  
  return (
    <div className='mt-5'>
      <h1>Detail Research</h1>
      <p>{id}</p>
    </div>
  )
}

export default DetailResearch