import React from 'react'
import { useState, useEffect } from 'react';
import customAxios from '../../service/axios_service';
import Loading from '../../pages/Loading';
import { Link } from 'react-router-dom';
function ResearchArea() {

  const [researchArea, setResearchArea] = useState([]);
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

      const response = await customAxios.get('api/research-area', config);

      setResearchArea(response.data.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };
  return (
    <>
      {loading ? <Loading /> :
        <div className='research-area-about-us'>
          <h1> <span>AI Center for Learning & Optimization</span>  <br />Telkom University Research Area</h1>
          <section className='research-area-about-content'>

            <div className="d-lg-flex  ">
          
              {researchArea.map(research => (
                
                <div key={research.id} className=" research-area-about " >
                  <a href={`/research-area/${research.id}`}>

                  <div className="research-area-about-content-card  ">
                    <img id="research-img" src={research.icon_url} alt="" />
                    <p>{research.title}</p>
                  </div>
                  </a>
                </div>
              ))}
            </div>
          </section>


        </div>

      }

    </>

  )
}

export default ResearchArea