import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import petcareLogo from "./icons/pet-first-aid.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Services from "./Services";
import ImagesComponent from "./ImagesComponent";
import Contact from "./Contact";
import About from "./About";
import RegLogin from "./RegLogin";
import { MDBBtn } from 'mdb-react-ui-kit';

function WebsiteNavbar() {
  return (
    <BrowserRouter>
      <div className="navbar-grid">
        <Container fluid>
          <Row>
            <Col className="grid-1">
              <Link to="/">
                <img src={petcareLogo} alt=""></img>
                <p className="logo-text">Pet-Care</p>
              </Link>
            </Col>
            <Col className="grid-2">
              <Link to="/services" className="grid-5-text">
              <button className="btn-raised">Home</button>
              </Link>
            </Col>
            <Col className="grid-4"></Col>
            <Col className="grid-5">
              <Link to="/contact" className="grid-7-text">
              <button className="btn-raised">Contact</button>
              </Link>
            </Col>
            <Col className="grid-6"></Col>
            <Col className="grid-7">
              <Link to="/about" className="grid-9-text">
              <button className="btn-raised">About</button>
              </Link>
            </Col>
            <Col className="grid-8"></Col>
            <Col className="grid-9">
            <Link to="/reglogin"><button className="btn-raised">Account</button></Link>
            </Col>
            <Col className="grid-14"></Col>
          </Row>
        </Container>

        <Routes>
          {/* <Route path="/home" element={<LandingPage />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/reglogin" element={<RegLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default WebsiteNavbar;
