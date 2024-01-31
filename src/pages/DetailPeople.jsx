import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CardDetailProfile from '../components/DetailProfile/CardDetailProfile';
import CardDetailProfileList from '../components/DetailProfile/CardDetailProfileList';

import '../assets/css/detail_profile.css'
import BannerDetailProfile from '../components/DetailProfile/BannerDetailProfile';
import Loading from './Loading';
import customAxios from '../service/axios_service';

function DetailPeople() {
  const { id } = useParams();
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

      const response = await customAxios.get(`api/user/${id}`, config);

      setPeople(response.data);
      setLoading(false); // Set loading to false after data is fetched
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false in case of an error
    }
  };
  return (
    <>
      {
        loading ? <Loading /> : <div>
          <BannerDetailProfile name={people.name} codeAsprak={people.kode_asistant} jurusan={people.jurusan} instagram={people.instagram} linkedin={people.linkedin} github={people.github} image={people.foto_url} kategori={people.jabatan} />
          <CardDetailProfile title="Biography" description={people.biography == null ? '-' : people.biography} />
          <CardDetailProfileList title="Expertise" description={people.expertise} />
          <CardDetailProfileList title="Research & Publication" description={people.research} />

        </div>

      }
    </>


  )
}

export default DetailPeople