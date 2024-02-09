import React, { useEffect, useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal, Button } from 'react-bootstrap';


import { Link } from "react-router-dom";
import Maskot from '../assets/images/maskot.webp';
import Directur from '../assets/images/directur.webp';
import ViceDirectur from '../assets/images/vice.webp';
import NLP from '../assets/images/nlp.webp';
import CV from '../assets/images/eye.webp';

import Play from '../assets/images/Play.png';






import "../assets/css/landing.css";
import ResearchArea from '../components/home/ResearchArea';
import customAxios from '../service/axios_service';
import Loading from './Loading';
function Landing() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  const redirectToWhatsApp = () => {

    const message = document.querySelector('.message-textarea').value;
    const whatsappMessage = `Halo admin, Aku ingin mendiskusikan mengenai ${message}`;

    const whatsappLink = `https://wa.me/6282116984458?text=${encodeURIComponent(whatsappMessage)}`;

    window.location.href = whatsappLink;
  };
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      {loading ? <Loading /> : <div className="landing">
        <section id="content">
          <section className="jumbotron">
            <div className="row flex-column-reverse flex-md-row">
              <div className="col-lg-6 order-sm-2 order-md-2 order-lg-1">
                <h1 data-aos="zoom-in-left">
                  <span>Artificial Intelligence for Learning</span> Telkom
                  University
                </h1>
                <a href="/about-us" data-aos="zoom-in-left">Learn More</a>
              </div>
              <div className="col-lg-6 order-sm-1  order-md-1 order-lg-1">
                <img data-aos="zoom-in-left" src={Maskot} alt="Maskot AI Center" />
              </div>
            </div>
          </section>
          <div className="d-flex justify-content-center">

            <section id="research" data-aos="zoom-in-right">
              <div className="d-lg-flex justify-content-between">
                {researchArea.map(research => (
                  <ResearchArea key={research.id} link={`/research-area/${research.id}`} image={research.icon_url} name={research.short_title} />
                ))}
              </div>
            </section>
          </div>
          <section className="about-us" data-aos="zoom-in-left">
            <div className="row">

              <div className="col-lg-6">
                <a onClick={handleShow}>

                  <div className="about-us-video">
                    <div className='d-flex justify-content-center h-100 w-100 align-items-center'>

                      <img src={Play} alt="Play video ailo" />


                    </div>
                    <div className='about-us-nlp'>
                      <img src={NLP} alt="" />
                    </div>
                    <div className='about-us-cv'>
                      <img src={CV} alt="" />
                    </div>

                  </div>
                </a>
                <Modal show={show} onHide={handleClose} animation={true}>
                  <Modal.Header >
                    <Modal.Title>Introduction AILO Website</Modal.Title>
                  </Modal.Header>
                  <Modal.Body><iframe width="100%" height="315" src="https://www.youtube.com/embed/DVBssJnKYrw?si=ZI2iAbIijg-idrhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></Modal.Body>
                  <Modal.Footer>

                    <Button variant="primary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="col-lg-6">
                <p className="about-us-subtitle">Welcome To AI Center</p>
                <h1 className="about-us-title">
                  AI Center for Learning & Optimization
                </h1>
                <p className="about-us-description">
                  AI Center (Artificial Intelligence Center) is a research center
                  that focused on research, development, and application of
                  Artificial Intelligence technology to solve problems in various
                  fields, such as business, technology, health, etc.
                </p>
                <p className="about-us-description">
                  AI Center’s goal is to develop and promote innovative AI
                  technologies, facilitate collaboration between AI experts and
                  practitioners, and build a good network to increase the AI
                  technology adaptation in various fields
                </p>
              </div>
            </div>
          </section>
          <section className="meet-our-team" data-aos="zoom-in-right">
            <h1 className="meet-our-team-title">Meet our team</h1>
            <div className="d-lg-flex flex-lg-column">

              <div className="d-lg-flex justify-content-lg-center">
                <div className="meet-our-team-director d-flex flex-column align-items-center">
                  <img
                    src={Directur}
                    alt=""
                    className="meet-our-team-director-img"
                  />
                  <h1>Prof. Dr. Suyanto, S.T., M.Sc</h1>
                  <p>Director of AI Center Telkom University</p>
                </div>
                <div className="meet-our-team-director vice-director d-flex flex-column align-items-center">
                  <img
                    src={ViceDirectur}
                    alt=""
                    className="meet-our-team-director-img"
                  />
                  <h1>Suryo Adhi Wibowo, S.T., M.T., Ph.D</h1>
                  <p>Vice Director of AI Center Telkom University</p>
                </div>


              </div>

            </div>


            <div className="d-flex justify-content-center">

            </div>
          </section>

          <section className="faq" data-aos="zoom-in-left">
            <img src={Maskot} alt="" />
            <div className="faq-content">
              <p className="faq-content-subtitle">FAQ</p>
              <h1 className="faq-content-title">Get to Know Us Better</h1>
              <div className="faq-input">
                <div className="input-group">
                  <div className="input-text">
                    <input
                      type="text"
                      className="form-control message-textarea"
                      placeholder="Write a message"
                    />
                  </div>

                  <div className="input-group-append">
                    <button className="button button-faq" onClick={redirectToWhatsApp} type="button">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      }

    </>

  );
}

export default Landing;
