import React from 'react';
import Lottie from 'lottie-react';
import '../../assets/css/error.css';
import LoadingLottie from '../../assets/json/loading.json';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function EmptyState({ title, message, link, halamanText }) {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100 error-container' >
      <Lottie animationData={LoadingLottie} loop={true} className='error-lottie' />
      <h1 className='text-center'>{title}</h1>
      <p className='text-center'>{message}</p>

      <Button as={Link} to={link}>Kembali ke {halamanText}</Button>
    </div>
  )
}

export default EmptyState;
