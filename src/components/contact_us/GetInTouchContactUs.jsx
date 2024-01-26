import React from 'react'
import GedungD from '../../assets/images/gedung-d.jpg';

function GetInTouchContactUs() {
  return (
    <section id="getInTouch">
      <div className="row">
        <div className="col-lg-6">

          <img src={GedungD} className='get-in-touch-image' alt="Foto Gedung D" />
        </div>
        <div className="col-lg-6">
          <h1 className="get-in-touch-title">Get in Touch</h1>
          <p className="get-in-touch-subtitle">AILO Telkom University stands as a premier research center dedicated to the field of Artificial Intelligence (AI) at Telkom University. To connect with us, please visit our website page or stay updated on our developments through LinkedIn and Instagram. We host events aimed at enhancing individuals' proficiency in AI, including the esteemed AI Master event. Keep an eye out for upcoming AI-related content and exciting opportunities.</p>
        </div>
      </div>
    </section>
  );
}

export default GetInTouchContactUs