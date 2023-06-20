import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../Homebg.png";
import img2 from "../img2.png";
import { Button } from "react-bootstrap";

function HomeBoot() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <div style={{ height: "50rem" }}> */}
        <img className="d-block w-100 " src={img} />
        {/* </div> */}
        <Carousel.Caption>
          <button
            onClick={() =>
              window.scrollTo({
                left: 0,
                top: window.innerHeight,
                behavior: "smooth",
              })
            }
          >
            Get Started
          </button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100 " src={img2} alt="Third slide" />{" "}
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeBoot;
