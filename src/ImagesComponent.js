import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "./icons/img1.jpg";
import img2 from "./icons/img3.jpg";
import img4 from "./icons/img-4.jpg";

function ImagesComponent(props) {
  const classes = 'img' + props.className;
  return <img className={classes} src={props.children}></img>;
}

export default ImagesComponent;
