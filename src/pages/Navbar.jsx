import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.webp";
import "../assets/css/navbar.css";
import CopyRightFooter from "../components/footer/CopyRightFooter";
import Footer from "../components/footer/Footer";
import { useNavigation } from "react-router-dom";
import Loading from "./Loading";
import AOS from "aos";
import "aos/dist/aos.css";

function NavbarApp() {
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    AOS.init();
  }, [])
  const aboutUs = "/about-us";
  const index = "/";
  const people = "/people";
  const events = "/events";
  const contactUs = "/contact-us";

  const isActiveIndex = location.pathname === index;
  const isActiveAboutUs = location.pathname === aboutUs;
  const isActivePeople = location.pathname === people;
  const [isActiveResearch, setIsActiveResearch] = useState(false);
  const isActiveEvents = location.pathname === events;

  return (
    <>
      <Navbar
        expand="lg"
        className={scrolled ? "navbar-scrolled" : "navbar-unscrolled"}
        fixed="top"
      >
        <Navbar.Brand className="nav-brand" href="/">
          <img src={Logo} className="img-fluid" alt="Logo ai center" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to={index} active={isActiveIndex} onClick={() => setIsActiveResearch(false)}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={aboutUs} active={isActiveAboutUs} onClick={() => setIsActiveResearch(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={people} active={isActivePeople} onClick={() => setIsActiveResearch(false)}>
              People
            </Nav.Link>
            <NavDropdown
              title="Research and Publication"
              id="basic-nav-dropdown"
              active={isActiveResearch}

            >
              <NavDropdown.Item as={Link} to="/research-publication" onClick={() => setIsActiveResearch(true)}>
                Research
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/research-publication/patent" onClick={() => setIsActiveResearch(true)}>
                Patent
              </NavDropdown.Item>
              {/* Add more items as needed */}
            </NavDropdown>
            <Nav.Link as={Link} to={events} active={isActiveEvents} onClick={() => setIsActiveResearch(false)} >
              Events
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Button as={Link} to={contactUs} className="btn-primary" onClick={() => setIsActiveResearch(false)}>
              Contact Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {isLoading ? <Loading /> : <Outlet />}

      <div className="footer">
        <Footer />
        <CopyRightFooter />
      </div>
    </>
  );
}

export default NavbarApp;
