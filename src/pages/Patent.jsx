import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Banner from '../components/about_us/Banner';
import PatentImage from '../assets/images/patent.webp'
import '../assets/css/patent.css';
import customAxios from '../service/axios_service';
const Patent = () => {
  const [patents, setPatents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          }
      };

      const response = await customAxios.get('api/patents', config);

      setPatents(response.data.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  return (
    <div>
      <Banner title="Patents" />
      <section className='patents'>

        <div className="row">
          <div className="col-lg-6">
            <h1>Patents</h1>
            <p>Patents have become a crucial milestone in driving technological advancements, and AILO Telkom University has chosen to focus on the patent landscape to lead at the forefront of change. In the pursuit of fostering innovative excellence, AILO Telkom University is dedicated to exploring and understanding the potential of patents as a key to creating revolutionary solutions. Through engagement in research and development, AILO Telkom University encourages collaboration and the creation of intellectual wealth that will shape the future of technology. Enjoy exploring the diverse knowledge about patents with AILO Telkom University!</p>

          </div>
          <div className="col-lg-6">
            <img src={PatentImage} className='patent-image' alt="" />
          </div>
        </div>
      </section>
      <section id='patent-list'>
        <h1>Registered Patents in 2021</h1>

        {loading ? (
          <Loading />
        ) : (
          <ol>
            {patents.map(patent => (
              <li key={patent.id}>{patent.patent}</li>
            ))}
          </ol>
        )}
      </section>

    </div>
  );
};

export default Patent;
