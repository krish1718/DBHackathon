import Carousel from 'react-bootstrap/Carousel';
import '../Styles/PatientHome.css'
import '../Styles/Carousel.css'
import carousal1 from '../Assets/Images/carousel1.jpeg'
import carousal3 from '../Assets/Images/Carousel3.jpeg'
import carousal4 from "../Assets/Images/Carousel4.jpeg";
import carousal5 from "../Assets/Images/Carousel5.jpeg";

function CarouselComponent() {
    return (
      <div style={{ padding: "10px" }}>
        <Carousel slide={false}>
          <Carousel.Item interval={2000}>
            <img
              className=" w-20 carousel-image"
              src={carousal1}
              style={{ height: 20 }}
            />
            <Carousel.Caption>
              <h3></h3>
              <p>My Happy Family</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100 carousel-image" src={carousal3} />
            <Carousel.Caption>
              <h3></h3>
              <p>My GrandDaughter</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100 carousel-image" src={carousal4} />
            <Carousel.Caption>
              <h3></h3>
              <p>Johny Tommy Sammy</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block w-100 carousel-image" src={carousal5} />
            <Carousel.Caption>
              <h3></h3>
              <p>Home</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselComponent;