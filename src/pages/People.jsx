import React, { useState, useEffect } from 'react'
import Banner from '../components/about_us/Banner'
import Maskot from '../assets/images/macot_peopel.png';
import '../assets/css/people.css'
import customAxios from '../service/axios_service';
import Loading from './Loading';
function People() {
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
      {loading ? <Loading /> : <div>
        <Banner image={Maskot} title="Welcome to AILO Research Center" />
        <div className="directur">
          <h1 className='directur-title'>Director of AI Center Telkom University</h1>
          <a href={`/people/${people.directur.id}`}>

            <div className="d-flex ">
              <img src={people.directur.foto_url} className='img-fluid directur-image' alt="Directur of AI Center Telkom University" />
              <p className='directur-name'>{people.directur.name}</p>

            </div>
          </a>
        </div>
        <div className="vice-directur">
          <h1 className='vice-directur-title'>Vice Director of AI Center Telkom University</h1>
          <a href={`/people/${people.vice_directur.id}`}>

            <div className="d-flex justify-content-end">
              <p className='vice-directur-name'>{people.vice_directur.name}</p>
              <img src={people.vice_directur.foto_url} className='img-fluid vice-directur-image' alt="Directur of AI Center Telkom University" />

            </div>
          </a>
        </div>
        <div className="member">
          <h1 className='vice-directur-title'>Members of AI Center</h1>

          <div className="row">
            {people.members.map(member => (

              <div key={member.id} className="col-lg-4 mt-5">

                <a href={`/people/${member.id}`}>

                  <div className="row">

                    <div className='col-lg-6'>
                      <img src={member.foto_url} className='img-fluid member-image' alt="Directur of AI Center Telkom University" />

                    </div>
                    <div className="col-lg-6">
                      <h1 className='member-name-dosen'> {member.name}</h1>
                      {member.expertise.map(expertise => (
                        <h1 key={expertise.id} className='member-biography'> {expertise.title}</h1>
                      ))}

                    </div>
                  </div>
                </a>
              </div>
            ))}

          </div>

        </div>

        <div className="member">
          <h1 className='vice-directur-title'>Graduate Research Assistant </h1>

          <div className="row">
            {people.graduates.map(member => (

              <div key={member.id} className="col-lg-4 mt-5">

                <a href={`/people/${member.id}`}>

                  <div className="row">

                    <div className='col-lg-6'>
                      <img src={member.foto_url} className='img-fluid member-image' alt="Directur of AI Center Telkom University" />

                    </div>
                    <div className="col-lg-6">
                      <h1 className='member-name'> {member.name}</h1>
                      <h1 className='member-biography'> {member.jabatan}</h1>

                    </div>
                  </div>
                </a>
              </div>
            ))}


          </div>

        </div>
        <div className="member">
          <h1 className='vice-directur-title'>Undergraduate Research Assistant </h1>

          <div className="row">
            {people.undergraduates.map(member => (

              <div key={member.id} className="col-lg-4 mt-5">

                <a href={`/people/${member.id}`}>

                  <div className="row">

                    <div className='col-lg-6'>
                      <img src={member.foto_url} className='img-fluid member-image' alt="Directur of AI Center Telkom University" />

                    </div>
                    <div className="col-lg-6">
                      <h1 className='member-name'> {member.name}</h1>
                      <h1 className='member-biography'> {member.jabatan}</h1>


                    </div>
                  </div>
                </a>
              </div>
            ))}


          </div>

        </div>

      </div>
      }

    </>
  )
}

export default People