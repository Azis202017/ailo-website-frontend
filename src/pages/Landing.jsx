import React from "react";
import { Link } from "react-router-dom";
import Maskot from '../assets/images/maskot.png';
import Directur from '../assets/images/directur.png';
import ViceDirectur from '../assets/images/vice.jpeg';
import NLP from '../assets/images/nlp.png';
import CV from '../assets/images/eye.png';
import Siec from '../assets/images/diagram.png';
import AI from '../assets/images/artificial-intelligence.png';




import "../assets/css/landing.css";
function Landing() {
  return (
    <>
      <section id="content">
        <section className="jumbotron">
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-lg-6 order-sm-2 order-lg-1">
              <h1>
                <span>AI Center for Learning & Optimization</span> Telkom
                University
              </h1>
              <a href="#">Learn More</a>
            </div>
            <div className="col-lg-6 order-sm-1 order-lg-1">
              <img src={Maskot} alt="Maskot AI Center" />
            </div>
          </div>
        </section>

        <section id="research">
          <div className="d-lg-flex">
            <div className="nlp d-flex flex-column align-items-center">
              <img src={NLP} alt="" />
              <p>NLP</p>
            </div>
            <div className="nlp d-flex flex-column align-items-center">
              <img src={CV} alt="" />
              <p>Computer Vision</p>
            </div>
            <div className="nlp d-flex flex-column align-items-center">
              <img src={CV} alt="" />
              <p>P&O</p>
            </div>
            <div className="nlp d-flex flex-column align-items-center">
              <img src={Siec} alt="" />
              <p>SIEC</p>
            </div>
            <div className="nlp d-flex flex-column align-items-center">
              <img src={AI} alt="" />
              <p>4G AI</p>
            </div>
          </div>
        </section>
        <section className="about-us">
          <div className="col-lg-6"></div>
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
        </section>
        <section className="meet-our-team">
          <h1 className="meet-our-team-title">Meet our team</h1>
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
            <div className="meet-our-team-director d-flex flex-column align-items-center">
              <img
                src={ViceDirectur}
                alt=""
                className="meet-our-team-director-img"
              />
              <h1>Suryo Adhi Wibowo, S.T., M.T., Ph.D</h1>
              <p>Vice Director of AI Center Telkom University</p>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={ViceDirectur}
                alt=""
                className="meet-our-team-director-img"
              />
            </div>
          </div>
        </section>

        <section className="faq">
          <img src={Maskot} alt="" />
          <div className="faq-content">
            <p className="faq-content-subtitle">FAQ</p>
            <h1 className="faq-content-title">Get to Know Us Better</h1>
            <div className="faq-input">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write a message"
                />
                <div className="input-group-append">
                  <button className="button button-faq" type="button">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Landing;
