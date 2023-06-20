import React, { useEffect, useState } from "react";
import { Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import { calcLength, wrap } from "framer-motion";
import { Button, Card, Modal } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router";
import InternNavigation from "./InternNavigation";
import img from "../Images/isb.png";
import img1 from "../Images/no.png";
import { Link } from "react-router-dom";
import "./ParticularClient.css";
import emailjs from "@emailjs/browser";
// import { InternNavigation } from "./InternNavigation";
// import { useToast } from "@chakra-ui/react";

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(
//   "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"
// );
const accountSid = "ACb67da01459b76e59099ba0a185a11898";
const authToken = "33fb8286fe3e0d5fcb4929a7b3b9690a";

const ParticularClient = () => {
  const [emails, setEmail] = useState("");
  const [internItem, setInternItem] = useState("");
  const [file, setFile] = React.useState(null);
  const [project, setProject] = useState(null);
  const [particularData, setParticularData] = useState([]);
  const Toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleProjectChange = (event) => {
    setProject(event.target.files[0]);
  };
  // const formdata = new FormData();

  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  const [item, setItem] = useState(null);
  const [clientEmail, setClientEmail] = useState("Choose a Client");
  const [confirm, setConfirm] = useState(false);
  const [show, setShow] = useState(false);
  const [showed, setShowed] = useState(false);
  const [shownotify, setshownotify] = useState(false);
  const [phoneitem, setPhoneitem] = useState("");
  const [ClientName, setClientName] = useState("Choose a Client");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClosedd = () => setshownotify(false);
  const handleShowedd = () => setshownotify(true);

  const fun = () => {
    setConfirm(true);
  };
  const toast = useToast();
  const history = useNavigate();
  // const fetchItem = async () => {
  //   const response = await fetch(`/api/user/allclient/${email}`);
  //   const data = await response.json();
  //   setItem(data);
  //   console.log("data", data);
  // };
  const [count, setCount] = useState(0);

  const FetchInternClientarray = async () => {
    setEmail(userInfo.email);
    try {
      const res = await axios.get(`/api/user/singleIntern/${userInfo.email}`);
      setInternItem(res.data);
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  // FetchInternClientarray();
  console.log("j", clientEmail);

  const DeleteClientarrayItem = async (e) => {
    // e.preventDefault();
    console.log(emails);
    try {
      const updateRes = await axios.put(
        `/api/user/clientarraystatusupdate/${clientEmail}`
      );
      const res = await axios.delete(
        `/api/user/DeleteClientarraySingleEmail/${emails}/${clientEmail}`,
        { email: clientEmail }
      );
      setItem("Items are changed");
      console.log("delete", clientEmail);
      console.log("Update status to false :", updateRes);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    try {
      const res = await axios.get(`/api/user/singleIntern/${userInfo.email}`);
      setInternItem(res.data);
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("file", file);

    console.log({ file });

    try {
      const config = {};

      const { data } = await axios.put(
        `/api/user/sentpdffiletochecker/${emails}`,

        formdata,

        config
      );

      const { dataa } = await axios.put(
        `/api/user/updateParticularClient/detailsFromClientArray/${userInfo.name}/${emails}/${clientEmail}/`
      );
      console.log(dataa);
      toast({
        title: "Revision is successfully marked",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      // localStorage.setItem("userInfo", JSON.stringify(data));

      console.log(data);
      toast({
        title: "Registration Submission",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      // localStorage.setItem("userInfo", JSON.stringify(data));

      const { firstSub } = await axios.put(
        `/api/user/checkerMainBool/${emails}/${clientEmail}/`
      );
      console.log(firstSub);
      toast({
        title: "Date of First Submission is Marked Sucessfully ",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      // localStorage.setItem("userInfo", JSON.stringify(data));
      // history("/ListenerChat");
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

  const Notifyy = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("project", project);

    console.log({ project });

    try {
      const config = {};

      const { data } = await axios.put(
        `/api/user/sentprojecttoclient/${clientEmail}`,

        formdata,

        config
      );

      //  const { dataa } = await axios.put(
      //    `/api/user/updateParticularClient/detailsFromClientArray/${emails}/${clientEmail}/`
      //  );
      //  console.log(dataa);
      toast({
        title: "Project has been sent",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      // localStorage.setItem("userInfo", JSON.stringify(data));

      //  console.log(data);
      //  toast({
      //    title: "Registration Submission",
      //    status: "success",
      //    duration: 5000,
      //    isClosable: true,
      //    position: "bottom",
      //  });

      //  localStorage.setItem("userInfo", JSON.stringify(data));

      //  const { firstSub } = await axios.put(
      //    `/api/user/checkerMainBool/${emails}/${clientEmail}/`
      //  );
      //  console.log(firstSub);
      //  toast({
      //    title: "Date of First Submission is Marked Sucessfully ",
      //    status: "success",
      //    duration: 5000,
      //    isClosable: true,
      //    position: "bottom",
      //  });

      // localStorage.setItem("userInfo", JSON.stringify(data));
      // history("/ListenerChat");
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
  // {{url}}/sentprojecttoclient/vl@gmail.com
  const Notify = async (req, res) => {
    //  setEmail(userInfo.email);
    try {
      const res = await axios.get(`/api/user/singleIntern/${clientEmail}`);
      // setPhoneitem(res.data.phone);
      console.log("res", res.data.phone);
    } catch (error) {
      console.log(error);
    }
    console.log(phoneitem);
    // try {
    //   const res = await axios.post(
    //     `https://api.twilio.com/2010-04-01/Accounts/ACb67da01459b76e59099ba0a185a11898/Messages.json?To=whatsapp:${phoneitem}&Body=test message from postman&From=whatsapp:+15075162952`,

    //     {
    //       auth: {
    //         username: "ACb67da01459b76e59099ba0a185a11898",
    //         password: "33fb8286fe3e0d5fcb4929a7b3b9690a",
    //       },
    //     }
    //   );
    //   console.log(phoneitem);
    //   res.send(res);
    // } catch (error) {
    //   console.log(error);
    // }

    const client = await axios.create({
      baseURL: `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json?To=whatsapp:-+918839762419&Body=test message from postman&From=whatsapp:-+15075162952`,
      auth: {
        username: accountSid,
        password: authToken,
      },
    });

    client
      .post("", {
        To: "whatsapp:+918839762419",
        From: "whatsapp:+14155238886",
        Body: "Hello from Twilio!",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  // const client = axios.create({
  //   baseURL: `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
  //   auth: {
  //     username: accountSid,
  //     password: authToken,
  //   },
  // });

  // client
  //   .post("", {
  //     To: "whatsapp:+14155238886",
  //     From: "whatsapp:+14155238886",
  //     Body: "Hello from Twilio!",
  //   })
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.log(error.response.data);
  //   });

  // const sgMail=require('@sendgrid/mail');
  // sgMail.setApiKey(
  //   "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"
  // );

  // const Notify = () => {
  //   const message = {
  //     to: { clientEmail },
  //     from: "onestop20821@gmail.com",
  //     subject: "Your Work has been done",
  //     html: `
  //   <p>Your work is done by the intern thank your for contacting us,proceed for the payment to get the document</p>`,
  //   };
  //   sgMail
  //     .send(message)
  //     .then(() => {
  //       console.log("Email is sent");
  //     })
  //     .catch((error) => {
  //       console.log("Error", error);
  //     });
  // };
  const [clientData, setClientData] = useState([]);

  const particularClientInfo = async () => {
    try {
      const res = await axios.get(`/api/user/allclient/${clientEmail}`);
      setClientData(res.data);
      console.log(res.data);
      console.log("object", clientEmail);
    } catch (error) {
      console.log(error.message);
    }
  };

  const DownloadResume = async () => {
    try {
      await axios.get(`/api/user/download/resume/${clientEmail}`);
      // setClientData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleClosed = () => {
    setClientEmail("");
    setShowed(false);
  };
  const handleShowed = async () => {
    setShowed(true);
  };

  useEffect(() => {
    particularClientInfo();
    DownloadResume();
  }, [clientEmail]);

  useEffect(() => {
    // fetchItem();
    FetchInternClientarray();
    // DeleteClientarrayItem();
  }, [item]);
  // {item.myClientsArray.length}
  useEffect(() => {
    // DeleteClientarrayItem();
  });
  // const [showElement, setShowElement] = useState(false);
  // function handleButtonClick() {
  //   setShowElement(true);
  // }

  // const [clientarray, setClientArray] = useState([]);
  // useEffect(() => {
  //   const storedClients = JSON.parse(
  //     localStorage.getItem(userInfo.myClientsArray)
  //   );
  //   if (storedClients) {
  //     setClientArray(storedClients);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("clients", JSON.stringify(clientarray));
  // }, [clientarray]);

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uizbllj",
        "template_n5479ah",
        e.target,
        "sf2MnwCTretSZoHYo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast({
      title: "Notification sent to client",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "bottom",
    });
  };

  return (
    <>
      <InternNavigation />
      {/* <p>Particluar Client list</p> */}
      {/* <Button onClick={FetchInternClientarray}>ok</Button> */}
      {/* <br /> */}

      {/* ye main background wala div h */}
      <div className="PC_mainDiv">
        {/* ye nams or id jo likhi h wo h */}

        <div className="PC_subdiv1">
          <p
            style={{
              margin: "5px",
              fontSize: "22px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          >
            Welcome,
          </p>
          {internItem.name}
          <br />
          <br />
          {internItem.email}
          <br />
          <br />
          <Button
            style={{ marginTop: "10px" }}
            variant="primary"
            onClick={handleShow}
          >
            Send to Checker
          </Button>
          <br />
          <br />
          {internItem.approval == "chosen" ? (
            <>
              <Button
                style={{ marginTop: "5px" }}
                variant="danger"
                onClick={handleShowedd}
              >
                Notify the User
              </Button>
              <Button
                style={{ marginTop: "5px" }}
                variant="success"
                // onClick={handleShowedd}
              >
                <Link to="/clientdetails">AllClients</Link>
              </Button>
            </>
          ) : (
            <>
              {" "}
              <Button
                style={{ marginTop: "5px" }}
                variant="danger"
                onClick={Notifyy}
                disabled
              >
                Notify the User
              </Button>
              <Button
                style={{ marginTop: "5px" }}
                variant="success"
                disabled
                // onClick={handleShowedd}
              >
                <Link to="/clientdetails">AllClients</Link>
              </Button>
            </>
          )}
        </div>
        {/* </div> */}
        <div className="PC_subdiv2">
          {/* <div
          style={{
            display: "flex",
            width: "86%",
            flexWrap: "wrap",
            gap: "3rem",
            marginLeft: "12%",
          }}
        > */}
          {internItem.myClientsArray == 0 ? (
            <>
              {" "}
              <div id="visible">
                <button
                  style={{
                    height: "3rem",
                    width: "10rem",
                    marginTop: "9rem",
                    position: "absolute",
                    backgroundColor: "#2d3867",
                    padding: "0.5rem 1rem",
                    color: "white",
                    marginLeft: "20rem",
                    borderRadius: "30px",
                    fontSize: "15px",
                    zIndex: 100,
                  }}
                >
                  <Link to="/clientdetails">Explore Clients</Link>
                </button>
                <div style={{ marginLeft: "-6rem" }}>
                  <img src={img1} alt="" style={{ zIndex: -1 }} />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
          {/* <div id="visible">
            <button
              style={{
                height: "3rem",
                width: "10rem",
                marginTop: "9rem",
                position: "absolute",
                backgroundColor: "#2d3867",
                padding: "0.5rem 1rem",
                color: "white",
                marginLeft: "20rem",
                borderRadius: "30px",
                fontSize: "15px",
                zIndex: 100,
              }}
            >
              <Link to="/clientdetails">Explore Clients</Link>
            </button>
            <div style={{ marginLeft: "-6rem" }}>
              <img src={img1} alt="" style={{ zIndex: -1 }} />
            </div>
          </div> */}

          {internItem.myClientsArray?.map((data) => {
            return (
              <>
                {data.completion == "Pending" ? (
                  <>
                    {/* {setCount(1)}{" "} */}
                    <Card
                      style={{
                        width: "18rem",
                        display: "block",
                        height: "15rem",
                        marginTop: "2rem",
                      }}
                    >
                      <Card.Body>
                        {/* {setC lientName({data.email})} */}
                        <Card.Title>{data.email}</Card.Title>

                        <Card.Text>
                          Explore the below buttons to do the relevant Action
                        </Card.Text>
                        <br />
                        {/* <br /> */}

                        <Button
                          variant="outline-success"
                          onClick={() => setClientEmail(data.email)}
                        >
                          Select
                        </Button>

                        {/* <br /> */}
                        {/* <Button variant="primary" onClick={handleShow}>
                          Send to Checker
                        </Button> */}

                        {/* <Button type="upload">Send your task to Checker</Button> */}

                        <Button
                          variant="primary"
                          style={{ marginLeft: "0.5rem" }}
                          onClick={() =>
                            handleShowed(setClientEmail(data.email))
                          }
                        >
                          View More
                        </Button>

                        {/* <br /> */}

                        <Button
                          variant="danger"
                          onClick={(e) => DeleteClientarrayItem(e.target.value)}
                          style={{ marginTop: "0rem", marginLeft: "0.5rem" }}
                        >
                          Abort
                        </Button>

                        <Modal show={showed} onHide={handleClosed} fullscreen>
                          <Modal.Header closeButton>
                            <Modal.Title>{clientData.name}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="Modall">
                            {/* <Button onClick={particularClientInfo}>k</Button> */}
                            <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              name: {clientData.name}
                            </div>
                            <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              email: {clientData.email}
                            </div>
                            <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              college: {clientData.college}
                            </div>{" "}
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              phone: {clientData.phone}
                            </div>{" "}
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              {" "}
                              age: {clientData.age}
                            </div>{" "}
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              tenth: {clientData.tenth}
                            </div>{" "}
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              twelth: {clientData.twelth}
                            </div>{" "}
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              specialization: {clientData.specialization}
                            </div>{" "}
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              careergoal: {clientData.careergoal}
                            </div>{" "}
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              anythingelse: {clientData.anythingelse}
                            </div>{" "}
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              {" "}
                              resume:{clientData.resume}
                              <br /> <br />
                            </div>
                            <div>
                              <a
                                style={{
                                  marginBottom: "0.5rem",
                                  background: "#a6b7ff",
                                }}
                                id="download-link"
                                href={`/api/user/download/resume/${clientData.email}`}
                                download
                              >
                                Download Resume
                              </a>
                            </div>
                            <br /> <br />
                            <div style={{ marginBottom: "0.5rem" }}>
                              {" "}
                              File:{clientData.file}
                              <br /> <br />
                            </div>
                            <div style={{ marginBottom: "0.5rem" }}>
                              <a
                                style={{
                                  marginBottom: "0.5rem",
                                  background: "#a6b7ff",
                                }}
                                id="download-link"
                                href={`/api/user/download/file/${clientData.email}`}
                                download
                              >
                                Download File
                              </a>
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosed}>
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  <>{/* {<img src={img1} alt="" />} */}</>
                )}
                {/* <Card style={{ width: "18rem", display: "block" }}>
                  <Card.Body>
                 
                    <Card.Title>{data.email}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button onClick={() => setClientEmail(data.email)}>
                      Select
                    </Button>
                    <Button variant="danger" onClick={DeleteClientarrayItem}>
                      Delete
                    </Button>
                  
                  </Card.Body>
                </Card> */}
              </>
            );
          })}

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sent to Checker</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Send your file to the checker to get it reviewed.
              <br />
              <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                <div>
                  Your Name :{" "}
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {" "}
                    {internItem.name}
                  </span>
                </div>
                <br />

                <p>
                  Your Client Email:
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {" "}
                    {clientEmail}
                  </span>{" "}
                </p>
                <br />
                {/* <Button variant="outline-danger"> */}
                {/* {" "} */}
                <Input
                  type="file"
                  name="file"
                  placeholder="Upload resume"
                  onChange={handleFileChange}
                  accept="application/pdf"
                ></Input>
                <form onSubmit={sendEmail}>
                  <input
                    type="fromemail"
                    name="fromemail"
                    value={internItem.email}
                    style={{ display: "none" }}
                  />
                  {/* <input
                    type="name"
                    name="name"
                    value={data.name}
                    style={{ display: "none" }}
                  /> */}
                  <input
                    type="intern_name"
                    name="intern_name"
                    value={internItem.name}
                    style={{ display: "none" }}
                  />

                  {console.log(internItem.email)}
                  <input type="submit" value="Notify the client " />
                </form>
                {/* <button onClick={handleUpload}>upload</button> */}
                {/* </Button> */}
              </div>
              {console.log(clientEmail)}
              {/* <button></button> */}
              <Button style={{ width: "21rem" }} onClick={submitHandler}>
                Send to Checker
              </Button>
            </Offcanvas.Body>
          </Offcanvas>

          <Offcanvas show={shownotify} onHide={handleClosedd} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Sent to Client</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Send your file to the Client.
              <br />
              <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                <div>
                  Your Name :{" "}
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {" "}
                    {internItem.name}
                  </span>
                </div>
                <br />

                <p>
                  Your Client Email:
                  <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
                    {" "}
                    {internItem.clientEmail}
                  </span>{" "}
                </p>
                <br />

                {/* <Button variant="outline-danger"> */}
                {/* {" "} */}
                <Input
                  type="file"
                  name="project"
                  placeholder="Upload work"
                  onChange={handleProjectChange}
                  accept="application/pdf"
                ></Input>
                {/* <button onClick={handleUpload}>upload</button> */}
                {/* </Button> */}
              </div>
              {console.log(internItem.clientEmail)}
              <Button
                variant="success"
                style={{ width: "21rem" }}
                onClick={(e) => fun(setClientEmail(internItem.clientEmail))}
              >
                Confirm
              </Button>
              <br />
              <br />
              <Button
                style={{ width: "21rem" }}
                onClick={Notifyy}
                disabled={!confirm}
              >
                Send to Client
              </Button>
              <br />
              <br />
              {/* {confirm ? (
                <>
                  <Button style={{ width: "21rem" }} onClick={Notifyy}>
                    Send to Client
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button style={{ width: "21rem" }} onClick={Notifyy} disabled>
                    Send to Client
                  </Button>
                </>
              )} */}
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ParticularClient;
