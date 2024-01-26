import React from 'react'
import '../assets/css/contact_us.css';
import GetInTouchContactUs from '../components/contact_us/GetInTouchContactUs';
import ContactCard from '../components/contact_us/ContactCard';
import Instagram from '../assets/images/instagram.webp'
import LinkedIn from '../assets/images/linkedin.webp'
import Pesan from '../assets/images/pesan.webp'
import Telepon from '../assets/images/telepon.webp'
import VisitUs from '../components/contact_us/VisitUs';
import MapsContact from '../components/contact_us/MapsContact';

function ContactUs() {
  return (
    <div className='contact-us'>
      <GetInTouchContactUs />
      <section id="contact-us-card">
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
      </section>
      <VisitUs/>
      <MapsContact/>



    </div>
  );
}

export default ContactUs