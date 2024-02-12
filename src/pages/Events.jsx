import React, { useState, useEffect } from 'react'
import Banner from '../components/about_us/Banner'
import Loading from './Loading';
import customAxios from '../service/axios_service';
import '../assets/css/events.css'
function Events() {
  const [loading, setLoading] = useState(true);
  const [categoryEvent, setCategoryEvent] = useState([]);
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

      const response = await customAxios.get('api/event', config);

      setCategoryEvent(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };
  return (
    <>
      {loading ? <Loading /> : <div>
        <Banner title="Events" />

        <section id="events-card">
          <div className="row">

            {categoryEvent.map(category => (

              <div key={category.id} className="col-lg-6">
                <a href={`/events/${category.id}`}>
                  <div className="d-flex mt-5">
                    <img
                      src={category.foto_url}
                      className=" event-image"
                      alt=""
                    />
                    <p className='events-card-title'>{category.title}</p>

                  </div>
                </a>


              </div>

            ))}
          </div>





        </section>

      </div>}

    </>

  )
}

export default Events