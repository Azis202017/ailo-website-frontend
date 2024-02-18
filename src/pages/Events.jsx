import React, { useState, useEffect } from 'react'
import Banner from '../components/about_us/Banner'
import Loading from './Loading';
import customAxios from '../service/axios_service';
import '../assets/css/events.css'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
function Events() {
  const [loading, setLoading] = useState(true);
  const [categoryEvent, setCategoryEvent] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = (id) => {
    
    navigate(`/events?q=${encodeURIComponent(id)}`);
  };

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
      setLoading(false);
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
                <Link to={`events-area/?category=${category.title}`}>
                  <div className="d-flex mt-5">
                    <img
                      src={category.foto_url}
                      className=" event-image"
                      alt=""
                    />
                    <p className='events-card-title'>{category.title}</p>

                  </div>
                </Link>
              


              </div>

            ))}
          </div>





        </section>

      </div>}

    </>

  )
}

export default Events