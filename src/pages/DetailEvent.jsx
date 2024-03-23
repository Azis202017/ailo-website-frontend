import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import Markdown from 'react-markdown';
import Linkify from 'react-linkify';
import customAxios from '../service/axios_service';
import remarkGfm from 'remark-gfm';
import '../assets/css/detail_events.css'
function DetailEvent() {
  const { id } = useParams();
  const [detailEvent, setDetailEvent] = useState({});
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

      const response = await customAxios.get(`api/event/${id}`, config);

      setDetailEvent(response.data.data);
      setLoading(false); // Set loading to false after data is fetched
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };
  return (
    <>
      {loading ? <Loading /> :
        <section className='detail-event'>
          <div className='row'>
            <div className="col-lg-6">
              <img className='detail-event-image' src={detailEvent.foto_url} alt="" />
            </div>
            <div className="col-lg-6">
             
              <Markdown remarkPlugins={[remarkGfm]} className='detail-event-description'  >
                {detailEvent.long_description}
              </Markdown>
            </div>
          </div>
        </section >

      }
    </>
  )
}

export default DetailEvent