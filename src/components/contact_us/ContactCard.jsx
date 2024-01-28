import React from 'react'


function ContactCard({ name, icon, link, alt}) {
  
  return (
    <a href={link}  className="content-link mt-5">
      <div className="contact-card" data-aos="zoom-in-left">
        <div className="d-flex">
          <img src={icon} alt={alt}  className='icon'/>
          <p className='title'>{name}</p>
        </div>
      </div>
    </a>

  )
}

export default ContactCard