import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../assets/css/detail_research.css';
import customAxios from '../service/axios_service';
import CardDetailProfileList from '../components/DetailProfile/CardDetailProfileList'
import Loading from './Loading';
import EmptyState from '../components/empty_state/empty_state';
function DetailResearch() {
  const { id } = useParams();
  const [researchArea, setResearchArea] = useState({});
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

      const response = await customAxios.get(`api/research-area/${id}`, config);

      setResearchArea(response.data.data);
      setLoading(false);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
  return (
    <>
      {loading ?
        <Loading /> : researchArea.publications.length === 0 ? <EmptyState title="Research belum ada di kategori ini" halamanText="Research" message="Silahkan kembali menggunakan tombol berikut ini" link="/research-publication" /> :
          <div className='detail-research'>
            {researchArea.publications.map(publications => (
              <div key={publications.id} className="detail-research-card">
                <h1 className='title'>{publications.title}</h1>
                <p className='description'>{publications.description}</p>
                {publications.publish_year === null ? null : <p className='publish-year'>{publications.publish_year}</p>
                }
              </div>
            ))}



          </div>}

    </>

  )
}

export default DetailResearch