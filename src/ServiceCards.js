import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import petCardOne from './icons/pet-card-care.jpg';
import petCardTwo from './icons/pet-card-checkup.jpeg';
import petCardThree from './icons/pet-card-grooming.jpg';

function ServiceCards() {
  return (
    <MDBCardGroup>
      <MDBCard>
        <MDBCardImage
          src={petCardOne}
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle>Check-Ups</MDBCardTitle>
          <MDBCardText>
            Keep your pets in peak health with Pet-Care's thorough check-ups.
            Our skilled veterinarians provide comprehensive examinations,
            vaccinations, and preventive care, ensuring your furry friends stay
            happy and healthy.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter></MDBCardFooter>
      </MDBCard>

      <MDBCard>
        <MDBCardImage
          src={petCardTwo}
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle>Specialized Treatments</MDBCardTitle>
          <MDBCardText>
            Address your pet's health concerns effectively with Pet-Care's
            specialized treatments. Our experienced team uses advanced
            diagnostics to create targeted treatment plans, whether managing
            chronic conditions or addressing acute illnesses.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter></MDBCardFooter>
      </MDBCard>

      <MDBCard>
        <MDBCardImage
          src={petCardThree}
          alt="..."
          position="top"
        />
        <MDBCardBody>
          <MDBCardTitle>Grooming Services</MDBCardTitle>
          <MDBCardText>
            Treat your pets to a spa day at Pet-Care with our professional
            grooming services. From baths and haircuts to nail trims and ear
            cleaning, our skilled groomers ensure your pets look and feel their
            best, leaving them refreshed and adorable.
          </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter></MDBCardFooter>
      </MDBCard>
    </MDBCardGroup>
  );
  //   <>
  //   <Card style={{ width: '22rem'}} id='card-styling-1'>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>Card Title</Card.Title>
  //       <Card.Text>
  //         Some quick example text to build on the card title and make up the
  //         bulk of the card's content.
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  //   <Card style={{ width: '22rem' }} id='card-styling'>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>Card Title</Card.Title>
  //       <Card.Text>
  //         Some quick example text to build on the card title and make up the
  //         bulk of the card's content.
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  //   <Card style={{ width: '22rem' }} id='card-styling'>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>Card Title</Card.Title>
  //       <Card.Text>
  //         Some quick example text to build on the card title and make up the
  //         bulk of the card's content.
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  //   <Card style={{ width: '22rem' }} id='card-styling'>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>Card Title</Card.Title>
  //       <Card.Text>
  //         Some quick example text to build on the card title and make up the
  //         bulk of the card's content.
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  //   <Card style={{ width: '22rem' }} id='card-styling'>
  //     <Card.Img variant="top" src="holder.js/100px180" />
  //     <Card.Body>
  //       <Card.Title>Card Title</Card.Title>
  //       <Card.Text>
  //         Some quick example text to build on the card title and make up the
  //         bulk of the card's content.
  //       </Card.Text>
  //       <Button variant="primary">Go somewhere</Button>
  //     </Card.Body>
  //   </Card>
  //   </>
  // );
}

export default ServiceCards;
