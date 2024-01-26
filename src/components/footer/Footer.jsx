import React from "react";
import Location from "../../assets/images/location.webp";
import Email from "../../assets/images/message.webp";
import Instagram from "../../assets/images/instagram.webp";
import Logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="main-footer">
      <div className="row">
        <div className="col-lg-3">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="col-lg-3 get-in-touch">
          <h1 className="get-in-touch-title">Get In Touch</h1>
          <div className="footer-maps">
            <div className="d-flex">
              <img src={Location} className="get-in-touch-icon" alt="" />
              <div className="get-in-touch-address">
                Telkom University, Building D Jl. Telekomunikasi Terusan Buah
                Batu,Bandung, Indonesia 40257
              </div>
            </div>
          </div>

          <div className="footer-email">
            <div className="d-flex">
              <img src={Email} className="get-in-touch-icon-email" alt="" />
              <div className="get-in-touch-email">
                ailo@telkomuniversity.ac.id
              </div>
            </div>
          </div>
          <div className="footer-call">
            <div className="d-flex">
              <img src={Email} className="get-in-touch-icon-call" alt="" />
              <div className="get-in-touch-call">+62 821-4514-3639</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 get-in-touch-social-media">
          <h1 className="get-in-touch-title">Get In Touch</h1>
          <div className="footer-social-media">
            <div className="d-flex">
              <img
                src={Instagram}
                className="get-in-touch-icon-instagram"
                alt=""
              />
              <div className="get-in-touch-instagram">@ailo.telu</div>
            </div>
          </div>

          <div className="footer-email">
            <div className="d-flex">
              <img src={Email} className="get-in-touch-icon-email" alt="" />
              <div className="get-in-touch-email">AILO RC</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 explore">
          <h1 className="explore-title">Explore</h1>
          <p>
            <Link to={"/"}>Home</Link>
          </p>
          <p>
            <Link to={"/about-us"}> About us </Link>
          </p>
          <p>
            <Link to={"/people"}> People </Link>
          </p>
          <p>
            <Link to={"/research-publication"}> Research & Publication </Link>
          </p>
          <p>
            <Link to={"/events"}> Events </Link>
          </p>
          <p>
            <Link to={"/contact-us"}> Contact Us </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
