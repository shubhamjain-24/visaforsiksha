import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
// import "../styles/signup.css";
import "./styles/signup.css";
import axios from "axios";
// import { useHistory } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import { useToast } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import img from "./Images/chs.png";
// import Navigation from "../components/Navigation";

// import Navbar from "../components/Navbar/Navbar";

// import {useSignupUserMutation} from '../services/appApi'

const CheckerSignup = () => {
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [nameOfUser, setName] = React.useState("");
  // const [pic, setPic] = React.useState("pic-here");
  const [loading, setLoading] = React.useState(false);
  const [showpopup, setShowpopup] = React.useState(true);
  const [phone, setPhone] = React.useState("");
  const [IsIntern, setIsIntern] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [status, setstatus] = React.useState(true);
  const [isChecker, setIsChecker] = React.useState(true);

  // console.log({ email });
  // console.log({ password });
  // console.log({ phone });
  // console.log({ nameOfUser });
  // console.log({ IsIntern });
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  //   const handleCheck = (e) => {
  //     e.preventDefault();
  //     let checked = e.target.checked;
  //     if (checked) {
  //       setIsIntern(true);
  //       setstatus(true);
  //     } else {
  //       setIsIntern(false);
  //       setstatus(false);
  //     }
  //   };

  const toast = useToast();

  const history = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!nameOfUser || !email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      return;
    }

    console.log({
      nameOfUser,
      email,
      password,
      phone,
      IsIntern,
      isAdmin,
      isChecker,
    });
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/checkerRegister",
        {
          name: nameOfUser,
          email,
          password,
          phone,
          isIntern: IsIntern,
          isAdmin: isAdmin,
          isChecker: isChecker,
          status: status,
        },
        config
      );
      console.log(data);
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      history("/CheckerDashboard");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      {" "}
      {/* <Navbar /> */}
      <Navigation />
      <Container>
        <Row>
          <Col md={5} style={{ height: "92vh" }}>
            <img src={img} style={{ width: "100%", height: "100%" }} />
          </Col>
          <Col
            md={7}
            className="d-flex align-items-center justify-content-center flex-direction-column"
          >
            {/* </Col> */}
            <Form style={{ width: "80%", maxWidth: 500 }}>
              <br />
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Enter your Name</Form.Label>
                <Form.Control
                  required
                  type="name"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={nameOfUser}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter your Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  required
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />{" "}
                <button
                  style={{
                    height: "27px",
                    background: "#efefef",
                    border: "transparent",
                  }}
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </button>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Enter your Phone</Form.Label>
                <Form.Control
                  required
                  type="phone"
                  placeholder="Enter phone "
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Enter your Intern</Form.Label>
                <Form.Control
                  required
                  // type="phone"
                  placeholder="Enter true "
                  onChange={(e) => setIsIntern(e.target.value)}
                  value={IsIntern}
                />
              </Form.Group> */}

              {/* <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label></Form.Label>
                <Form.Check
                  inline
                  label=" I am willing to dedicate my time and effort to serve as an
                  intern"
                  name="group1"
                  type="checkbox"
                  id={`inline-checkbox-1`}
                //   onChange={handleCheck}
                />
              </Form.Group> */}

              <Button variant="primary" type="submit" onClick={submitHandler}>
                {/* Signup<Spinner animation="border" /> */}
                Sign Up
              </Button>
              <div className="py-4">
                <p className="text-center">
                  Already have an account ?{" "}
                  <Link to="/SignInChecker">
                    <u style={{ color: "blue" }}> Login</u>
                  </Link>
                </p>
              </div>
            </Form>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CheckerSignup;
