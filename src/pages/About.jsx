import React from 'react'
import '../assets/css/about_us.css'
import Heading from '../components/about_us/heading';
import Banner from '../components/about_us/Banner';
import ResearchArea from '../components/about_us/ResearchArea';
import OurMission from '../components/about_us/OurMission';
import OurVision from '../components/about_us/OurVision';
function About() {
  return (
    <div className='w-100'>
      <div className="d-none d-xl-flex justify-content-xl-end">
        <div className="background-ungu">
        </div>
      </div>
      <Heading />
      <Banner title="AI Center for Learning & Optimization Telkom University" />
      <OurVision />
      <section id="mission">

        <div className='row'>

          <div className="col-lg-6">
            <h1 className='mission-title'>Our Mission</h1>
            <p className='mission-subtitle'>Embark on a mission to pioneer advanced concepts, methods, and techniques in Artificial Intelligence. Our goal is to create innovative products that benefit society, enhance education and talent development in AI, and foster collaborative research between Telkom University and industry, government, and research institutions globally.</p>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6">
                <div className="mission-card mission-card-active">

                  <h1 className='mission-card-title'>Produce cutting-edge concepts, methods, and techniques in the field of Artificial Intelligence</h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-card ">

                  <h1 className='mission-card-title'>Produce Artificial Intelligence products and innovations for the welfare of society</h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-card ">

                  <h1 className='mission-card-title'>Improve education and talent development in the field of Artificial Intelligence</h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mission-card ">

                  <h1 className='mission-card-title'>Increase Artificial Intelligence research cooperation between Telkom University and industry, government, and research and development institutions at home and abroad</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ResearchArea  isWithTitle={true}/>
    </div>
  );
}

export default About