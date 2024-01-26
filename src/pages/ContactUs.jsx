import React from 'react'
import '../assets/css/contact_us.css';
import GetInTouchContactUs from '../components/contact_us/GetInTouchContactUs';
import ContactCard from '../components/contact_us/ContactCard';
import Instagram from '../assets/images/instagram.svg'
import LinkedIn from '../assets/images/linkedin.svg'
import Pesan from '../assets/images/pesan.svg'
import Telepon from '../assets/images/telepon.svg'

function ContactUs() {
  return (
    <>
      <GetInTouchContactUs />
      <div className="row">
        <div className="col-lg-3 mt-3">
          <ContactCard icon={Telepon} name='+62 821-4514-3639' link="https://api.whatsapp.com/send/?phone=%2B6282116984458&text&type=phone_number&app_absent=0" alt="Telepon AILO" />
        </div>
        <div className="col-lg-3 mt-3">
          <ContactCard name='ailo@telkomuniversity.ac.id' link="mailto:ailo@telkomuniversity.ac.id" icon={Pesan} />

        </div>
        <div className="col-lg-3 mt-3">
          <ContactCard name='@ailo.telu' link="https://www.instagram.com/ailo.telu/?igsh=a3NlYW11aDhwNm02" icon={Instagram} />
        </div>
        <div className="col-lg-3 mt-3">
          <ContactCard name='AILO RC' link="https://www.linkedin.com/company/ailo-rc/" icon={LinkedIn} />

        </div>
        
      </div>

    </>
  );
}

export default ContactUs