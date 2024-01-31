import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBack from '../../assets/images/arrow.png';
import Studi from '../../assets/images/studi.svg';
import Research from '../../assets/images/research.png';

import DefaultImage from '../../assets/images/default_image.png';
function BannerDetailProfile({ image, name, codeAsprak, jurusan, kategori, linkedin, github, instagram, discord, twitter, }) {

  return (
    <div className='banner-detail-profile'>
      <a href="/people">
        <div className="d-flex">
          <img src={ArrowBack} className='banner-detail-profile-back-icon' />
          <h3 className='banner-detail-profile-back'>People</h3>
        </div>
      </a>
      <div className="d-flex flex-column align-items-center">
        <img src={image != null ? image : DefaultImage} className='banner-detail-profile-image' alt="" />
        <div className="d-flex banner-detail-profile-biodata-name-profile">
          <h1 className='banner-detail-profile-name'>{name}</h1>
          {codeAsprak != null ? <p className='banner-detail-profile-code'> {codeAsprak}</p> : null}

        </div>
        {jurusan != null ? <div className="d-flex">

          <img src={Studi} className='banner-detail-profile-studi-icon' />
          <h3 className='banner-detail-profile-studi'>{jurusan}</h3>
        </div> : null}
        {kategori != null ? <div className="d-flex">
          <img src={Research} className='banner-detail-profile-research-icon' />
          <h3 className='banner-detail-profile-research'>{kategori}</h3>
        </div> : null}
        


      </div>


    </div>
  )
}

export default BannerDetailProfile