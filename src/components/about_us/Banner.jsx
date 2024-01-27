import React from 'react'
import '../../assets/css/banner_headline.css';
function Banner({ title, image }) {
  return (
    < >
      <div className="banner-headline">
        {image == null ? <span> <h1 className='d-flex justify-content-center align-items-center h-100 '>{title}</h1></span> : <div className='d-flex justify-content-center align-items-center h-100 w-100'>
          <h1 >{title}</h1>
          <img src={image} alt="" className="banner-img" />
        </div>}
      </div>
    </>
  )
}

export default Banner