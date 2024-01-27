import React from 'react'
import Banner from '../components/about_us/Banner'
import Maskot from '../assets/images/macot_peopel.png';
function People() {
  return (
    <div>
      <Banner image={Maskot} title="Welcome to AILO Research Center" />
    </div>
  )
}

export default People