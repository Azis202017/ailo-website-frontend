import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import '../assets/css/event_area.css'
import Loading from './Loading';
import EmptyState from '../components/empty_state/empty_state'
import customAxios from '../service/axios_service';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
function EventArea() {
  const [searchParams, setSearchParams] = useSearchParams();
  const eventCategory = searchParams.get('category');
  const [eventDetail, setEventDetail] = useState([]);
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

      const response = await customAxios.get(`http://127.0.0.1:8000/api/event/?category=${eventCategory}`, config);

      console.log(response.data.data[0].event);
      setEventDetail(response.data.data[0].event);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };


  return (

    <div >
      {loading ? <Loading /> : eventDetail.length === 0 ? <EmptyState title="Sedang tidak ada events" message="Silahkan kembali ke halaman beranda melalui link berikut ini" link="/events" halamanText="Events" /> :
        <>
          {eventDetail.map(event => (

            <div key={event.id} className="d-flex justify-content-center">
              <div className="card-events">
                <div className="d-flex">
                  <div className="left-card">
                    <img className='card-event-img' src={event.foto_url} alt="" />
                  </div>
                  <div className="right-card">


                    <h1>{event.title}</h1>
                    <Markdown remarkPlugins={[remarkGfm]} className='card-event-description'  >
                      {event.description}
                    </Markdown>
                    <a href={`/events/events-area/${event.id}`} className='link-see'>See more</a>


                  </div>

                </div>
              </div>
            </div>
          ))}
        </>
      }

    </div>

  );
}

export default EventArea;
