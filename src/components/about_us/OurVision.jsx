import React, { useEffect, useState } from 'react'
import customAxios from '../../service/axios_service';
import Loading from '../../pages/Loading';
function OurVision() {
  const [people, setPeople] = useState({});

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

      const response = await customAxios.get('api/user', config);

      setPeople(response.data);
      setLoading(false);
      console.log(response.data); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };
  return (
    <>
      {loading ? <Loading /> :
        <section id="vission">

          <div className='row'>
            <div className="col-lg-6">
              <div className="d-flex">
                <a href={`/people/${people.vice_directur.id}`}>
                  <div className="vision-vice-directur">

                    <img src={people.vice_directur.foto_url} className="vision-vice-directur-img" alt="" />
                    <h1>Suryo Adhi Wibowo, S.T., M.T., Ph.D</h1>
                    <p>Vice Director of AI Center Telkom University</p>
                  </div>
                </a>
                <a href={`/people/${people.directur.id}`}>
                  <div className="vision-directur">
                    <h1>Prof. Dr. Suyanto, S.T., M.Sc</h1>
                    <p>Director of AI Center Telkom University</p>

                    <img src={people.directur.foto_url} className="vision-director-img" alt="" />

                  </div>
                </a>

              </div>
            </div>
            <div className="col-lg-6">
              <h1 className='our-vission-title'>Our vision</h1>
              <p className='our-vission-subtitle'>To become a center for studies, research, development, and innovation of Artificial Intelligence that excels nationally and internationally.</p>
            </div>
          </div>
        </section>
      }
    </>

  )
}

export default OurVision