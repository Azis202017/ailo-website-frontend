import React from 'react'
import Mascot from '../../assets/images/macot_peopel.png';
function VisitUs() {
  return (
    <div className='visit-us-section'>
      <div className="row">
        <div className="col-lg-6">
          <div className="visit-us-section-description" data-aos="zoom-in-right">

          <h1>Visit our office or labolatory!</h1>
          <p>For direct inquiries and engagement, feel free to visit our laboratory located at AILO Telkom University. Our dedicated team at AILO is readily available to assist you in exploring the realms of Artificial Intelligence. We welcome you!</p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="working-hours" data-aos="zoom-in-left">
              <div className="block-top"></div>
              <h1 className='working-hours-title'>Our Working Hours</h1>
              <h1 className='working-hours-title mt-5'>Sunday - Friday</h1>
              <p className='working-hours-subtitle'>09.00 AM  -  16.00 PM</p>

              <h1 className='working-hours-title mt-5'>Sunday - Friday</h1>
              <p className='working-hours-subtitle'>09.00 AM  -  16.00 PM</p>
              <img src={Mascot} alt="" className="mascot" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisitUs