import React, { useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import "../styles/home.css";
import Navigation from "../components/Navigation";

const Home = () => {
  const history = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      history("/");
    }
  }, [history]);
  return (
    <>
      <Navigation />
      <Row>
        <Col md={5} className="home__bg" />
        <Col
          ms={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        ></Col>
        <Col
          md={6}
          className="d-flex flex-direction-column align-items-center justify-content-center "
          style={{ marginTop: "2rem" }}
        >
          <div>
            <h1 style={{ marginLeft: "2rem" }}>
              Explore the World with your SOP and skills
            </h1>
            <p style={{ marginLeft: "2rem" }}>
              Get customised STatement of Purpose to fulfil your dreams.
              <br />
              Chat with your Writer
            </p>
            <LinkContainer to="/login" style={{ marginLeft: "2rem" }}>
              <Button variant="success">Get Started</Button>
            </LinkContainer>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
