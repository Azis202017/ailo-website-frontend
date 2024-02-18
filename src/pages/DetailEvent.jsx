import React from 'react'
import { useParams } from 'react-router-dom';

function DetailEvent() {
  const {id} = useParams();
  return (
    <div>DetailEvent</div>
  )
}

export default DetailEvent