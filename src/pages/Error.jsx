import React from 'react';
import Lottie from 'lottie-react';
import '../assets/css/error.css';
import LoadingLottie from '../assets/json/loading.json';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center vh-100 error-container' >
      <Lottie animationData={LoadingLottie} loop={true} className='error-lottie' />
      <h1 className='text-center'>Page Not Found</h1>
      <p className='text-center'>Klik tombol berikut ini untuk kembali ke beranda</p>

      <Button as={Link} to={'/'}>Kembali ke beranda</Button>
    </div>
  )
}

export default Error;
