import Carousel from 'react-bootstrap/Carousel';
import CarImg1 from './icons/img1.jpg';
import CarImg2 from './icons/img2.jpg';
import CarImg3 from './icons/img3.jpg';

function CarouselComponent() {
    return(
        <div className='CarouselComponent'>
        <Carousel>
        <Carousel.Item>
            <img w-100 h-200px src={CarImg1} alt="First slide" id='carousel-img1'/>
          <Carousel.Caption>
          <div className='first-slide-section'>
            <h3 className='first-slide-text'>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={CarImg2} alt="Second slide" id='carousel-img2'/>
          <Carousel.Caption>
          <div className='second-slide-section'>
            <h3 className='second-slide-text'>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={CarImg3} alt="Third slide" id='carousel-img3'/>
          <Carousel.Caption>
          <div className='third-slide-section'>
            <h3 className='third-slide-text'>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default CarouselComponent;