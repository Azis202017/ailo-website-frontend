import React from 'react'
import '../assets/css/about_us.css'
import Heading from '../components/about_us/heading';
import Banner from '../components/about_us/Banner';
function About() {
  return (
    <div className='w-100'>
      <div className="d-none d-xl-flex justify-content-xl-end">
        <div className="background-ungu">
        </div>
      </div>
      <Heading />
      <Banner title="AI Center for Learning & Optimization Telkom University" />
     
    </div>
  );
}

export default About