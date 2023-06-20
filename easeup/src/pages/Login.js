import { useToast } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import img1 from "../Images/internlogin2.jpg";

import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  const [password, setPassword] = React.useState("");
  const toast = useToast();
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log("uo babay");
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history("/internDashboard");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={5} className="intern_login__bg">
            <img className="internLoginimage" src={img1} />
          </Col>
          <Col
            md={7}
            className="d-flex align-items-center justify-content-center flex-direction-column "
          >
            {/* </Col> */}
            <Form
              className="internLoginForm"
              style={{ width: "80%", maxWidth: 500 }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type={show ? "text" : "password"}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />{" "}
                <button className="showButton" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </button>
              </Form.Group>

              {console.log(email)}

              {console.log(password)}

              <Button variant="primary" type="submit" onClick={submitHandler}>
                {/* {email? " Logging You in...":" Login "} */}
                Login
              </Button>
              {/* <div className="py-4">
                <p className="text-center">
                  Don't have an account ?{" "}
                  <Link to="/signup">
                    <u style={{ color: "blue" }}> Signup</u>
                  </Link>
                </p>
              </div> */}
            </Form>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
