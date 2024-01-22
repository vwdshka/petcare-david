import Figure from "react-bootstrap/Figure";
import "./App.css";
import bannerImg from "./icons/img1.jpg";

function BannerComponent() {
  return (
    <Figure id="banner-component" className="img-fluid position-absolute rounded mx-auto d-block">
      <Figure.Image
        width={'50%'}
        height={'auto'}
        alt="50%x50%"
        src={bannerImg}
      />
      {/* <Figure.Caption id="banner-caption">
        We love your pets as much as you do!
      </Figure.Caption> */}
    </Figure>
  );
}

export default BannerComponent;
