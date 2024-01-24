import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";

function NavbarApp() {
  const location = useLocation();
  const aboutUs = "/about-us";
  const index = "/";
  const people = "/people";
  const events = "/events";
  const research = "/research-publication";
  const isActiveIndex = location.pathname === index;
  const isActiveAboutUs = location.pathname === aboutUs;
  const isActivePeople = location.pathname === people;
  const isActiveResearch = location.pathname === research;

  const isActiveEvents = location.pathname === events;

  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="/">
          <img src={Logo} className="img-fluid" alt="Logo ai center" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={index} active={isActiveIndex}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={aboutUs} active={isActiveAboutUs}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to={people} active={isActivePeople}>
              People
            </Nav.Link>
            <Nav.Link as={Link} to={research} active={isActiveResearch}>
              Research
            </Nav.Link>
            <Nav.Link as={Link} to={events} active={isActiveEvents}>
              Events
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/contact"
              active={location.pathname === "/contact"}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet></Outlet>
    </>
  );
}

export default NavbarApp;
