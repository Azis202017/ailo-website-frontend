import React from 'react'
import Lottie from 'lottie-react';
import LoadingLottie from '../assets/json/loading.json';
function Loading() {
  return (
    <div className='d-flex justify-content-center vh-100 align-items-center'>
      <Lottie animationData={LoadingLottie} loop={true} />
    </div>
  )
}

export default Loading