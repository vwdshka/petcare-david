import WebsiteNavbar from "./WebsiteNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ImagesComponent from "./ImagesComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img4 from "./icons/img-4.jpg";
import "./Services.css";
import Image from "react-bootstrap/Image";
import mouseIcon from "./icons/mouse-thin.svg";
import ServiceCards from "./ServiceCards";
import HeaderServices from "./HeaderServices";
import HomeCards from "./HomeCards";

function Services() {
  return (
    <>
    <HeaderServices></HeaderServices>
      <Container>
        <span className="fadeInUp-animation-main-content">
          <Row>
            <Col xl={12}>
              <p className="pb-3 pt-1 mt-3">
                At Pet-Care, we understand the unique bond you share with your
                pets, and we are committed to providing compassionate,
                personalized care for your furry companions.
              </p>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            {/* <ServiceCards></ServiceCards> */}
            <HomeCards></HomeCards>
          </Row>
          {/* <Row id="services-second-row">
            <Col xs={4}>
              <Image src={img4} rounded />
            </Col>
            <Col></Col>
            <Col md={6}>
              <ul className="services-ul">
                <li className="services-li">Routine Wellness Check-Ups</li>
                <li className="services-li">Specialized Treatments</li>
                <li className="services-li">Preventive Care</li>
                <li className="services-li">Dental Services</li>
                <li className="services-li">Vaccinations</li>
              </ul>
            </Col>
          </Row> */}
        </span>
      </Container>
    </>
  );
}

export default Services;
