import React from 'react'

function MapsContact() {
  const redirectToWhatsApp = () => {
    const name = document.querySelector('.name-input').value;
    const email = document.querySelector('.email-input').value;
    const phone = document.querySelector('.phone-input').value;
    const message = document.querySelector('.message-textarea').value;
    console.log(name);
    const whatsappMessage = `Halo admin, nama ku ${name} dan email ku adalah ${email} dan nomor handphone ku ${phone}. Aku ingin mendiskusikan mengenai ${message}`;

    const whatsappLink = `https://wa.me/6282116984458?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappLink;
  };

  return (
    <section id="maps-contacts">
      <div className="row">
        <div className="col-lg-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3079099519423!2d107.628754!3d-6.9729531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9f150173951%3A0xeeda69399005c33!2sGedung%20D!5e0!3m2!1sen!2sid!4v1706295945355!5m2!1sen!2sid" className='maps' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-lg-6">
          <h1 className="maps-contact-title">Get to Know Us Better</h1>
          <input type="text" className="form-control email-text-placeholder email-input" placeholder='Email' />
          <input type="text" className="form-control email-text-placeholder phone-input" placeholder='Phone' />



          <input type="text" className="form-control email-text-placeholder name-input" placeholder='Name' />
          <textarea className="form-control text-area-maps message-textarea" placeholder='Write a message' />
          <button className='button' onClick={redirectToWhatsApp}>
            Send
          </button>
        </div>
      </div>
    </section>

  )
}

export default MapsContact