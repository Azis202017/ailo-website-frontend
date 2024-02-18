import React, { useEffect, useState } from 'react'
import customAxios from '../../service/axios_service';
import Loading from '../../pages/Loading';
function OurMission() {
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
      }
    </>

  )
}

export default OurMission