import React from 'react'
import Banner from '../components/about_us/Banner'
import BannerHeadlineSecond from '../components/about_us/BannerHeadlineSecond';
import '../assets/css/research.css'

function Research() {
  return (
    <div>
      <Banner title="RESEARCH & PUBLICATION" />
      <section className='research-publication-area'>
        <div className="row">
          <div className="col-lg-6">
            <h1>Research and Publlication</h1>
            <p>AILO Telkom University presents innovative research and publications at the intersection of artificial intelligence and learning optimization. Explore the cutting-edge contributions to science and technology in our commitment to advancing knowledge.</p>
          </div>
        </div>

      </section>
      <section className="newest-research">
        <h1 className='newest-research-title full-width'>Newest Research and publication</h1>
      </section>
      <BannerHeadlineSecond title="AI Center for Learning & Optimization Telkom University" />
        
    </div>
  )
}

export default Research