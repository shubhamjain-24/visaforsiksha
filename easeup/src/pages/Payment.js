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
import NavBar from "../components/Navbar";
import ulc from "../Images/unlok.png";
import lc from "../Images/lock.png";
import vd1 from "../Images/vd1.mp4";
import vd2 from "../Images/vd2.mp4";
import Navigation from "../components/Navigation";

import Navbarlogout from "../components/Navbar/Navbarlogout";

import Payment2 from "../InfoPages/Payment1/payment";
import qrcode from "../Images/qr2.jpeg";

import locked from "../Images/locked.png";
import unlocked from "../Images/unlocked.png";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "../InfoPages/Payment1/payment.css";
import "../InfoPages/Payment2/paymentDone.css";
import "./Payment.css";
// import { downloadProject } from "../../../backend/controllers/userController";
// import { InternNavigation } from "./InternNavigation";
// import { useToast } from "@chakra-ui/react";

// const sgMail = require("@sendgrid/mail");
// sgMail.setApiKey(
//   "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"
// );
const accountSid = "ACb67da01459b76e59099ba0a185a11898";
const authToken = "33fb8286fe3e0d5fcb4929a7b3b9690a";

const Payment = () => {
  const [emails, setEmail] = useState("");
  const [internItem, setInternItem] = useState("");
  const [file, setFile] = React.useState(null);
  const [particularData, setParticularData] = useState([]);
  const Toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  // const formdata = new FormData();

  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);

  const [item, setItem] = useState(null);
  const [clientEmail, setClientEmail] = useState("Choose a Client");

  const [show, setShow] = useState(false);
  const [showed, setShowed] = useState(false);
  const [phoneitem, setPhoneitem] = useState("");
  const [ClientName, setClientName] = useState("Choose a Client");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
        `/api/user/updateParticularClient/detailsFromClientArray/${emails}/${clientEmail}/`
      );
      console.log(dataa);
      toast({
        title: "Revision is successfully marked",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

      console.log(data);
      toast({
        title: "Registration Submission",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));

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

      localStorage.setItem("userInfo", JSON.stringify(data));
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

  function sendMessage() {
    const phoneNumber = "918839762419"; // replace with the phone number you want to message
    const message = "Hello, world!"; // replace with the message you want to send

    const url = `https://localhost:8080/api/send-message?phone=${phoneNumber}&text=${message}`;

    axios
      .get(url)
      .then((response) => {
        console.log("Message sent!");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  }
  const Notify = async (req, res) => {
    //  setEmail(userInfo.email);
    try {
      const res = await axios.get(`/api/user/singleIntern/${clientEmail}`);
      setPhoneitem(res.data.phone);
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

  const DownloadProject = async () => {
    try {
      await axios.get(`/api/user/download/project/${userInfo.email}`);
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
    // DownloadResume();
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

  return (
    <>
      <Navbarlogout />

      {internItem.IsAmountpaid == true && internItem.approval == "null" ? (
        <>
          <Button
            variant="light"
            style={{
              marginTop: "-70rem",
              position: "relative",
              marginLeft: "42rem",
            }}
          >
            <Link to="/ListenerChat">Chat</Link>
          </Button>
          <div className="grid-container-pd">
            <div className="left-box-pd">
              <img src={qrcode} alt="qrcode" width={"90%"} />
              <h1 className="PD_text1">Amount Paid</h1>
              <h1 className="amount-pd"> Rs. {internItem.price}</h1>
            </div>
            <div className="right-box-pd">
              <h2 className="right-heading-pd">Here is your work!!!</h2>
              <img src={unlocked} alt="locked" width={"70%"} />
              <a
                style={{
                  marginBottom: "0.5rem",
                  // background: "#a6b7ff",
                }}
                id="download-link"
                href={`/api/user/download/project/${userInfo.email}`}
                download
              >
                <button className="download-btn">Download Work</button>
              </a>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {internItem.price != 0 &&
      internItem.IsAmountpaid == false &&
      internItem.approval == "null" ? (
        <>
          <div className="payment1_grid-container">
            <div className="payment1_left-box">
              <img src={qrcode} alt="qrcode" width={"90%"} />
              <h1 className="payment1_amount"> Rs.{internItem.price}</h1>
              <h1>Scan the QR code to pay the amount</h1>
              <br />
              <Button
                variant="success"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <a href="https://api.whatsapp.com/send?phone=918878923910text=Hello,%Enter%your%20name%20and%20your%20wmail%20along%20with%20your%20screenshot!">
                  hiihi
                </a> */}
                <AiOutlineWhatsApp
                  style={{ marginRight: "5px", fontSize: "1.7rem" }}
                />
                <a
                  href="https://api.whatsapp.com/send?phone=917016522535&text=Hello,%20send%20your%20name,email%20and%20screenshot%20of%20payment!"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Send screenshot here
                </a>
              </Button>{" "}
            </div>
            <div className="payment1_right-box">
              <h2 className="payment1_right-heading">
                To avail your work ,pay now!
              </h2>
              <img src={locked} alt="locked" width={"60%"} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      {internItem.clientSideDisplay == "null" ? (
        <>
          <video src={vd1} autoplay loop />
          {/* <div className="Payment_maindiv"> */}
          {/* <p>Let's get update of your work &nbsp; </p>
            <Button
              variant="btn btn-outline-secondary"
              // style={{
              //   display:"felx",
              //   marginTop: "-80rem",
              //   position: "relative",
              //   marginLeft: "46rem",
              // }}
            >
              <Link to="/ListenerChat">Chat</Link>
            </Button> */}
          {/* <Button
              variant="secondary"
           
              onClick={FetchInternClientarray}
            >
              Refresh to know status
            </Button> */}
          {/* </div> */}
        </>
      ) : (
        <></>
      )}

      {internItem.clientSideDisplay == "chosen" &&
      internItem.approval == "true" ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              fontSize: "1.5rem",
              justifyContent: "center",
              width: "100%",
            }}
          >
            We are working on your project stay updated!
            {/* <br /> */}
            <Button
              variant="info"
              // style={{
              //   marginTop: "-70rem",
              //   position: "relative",
              //   marginLeft: "42rem",
              // }}
            >
              <Link to="/ListenerChat">Chat</Link>
            </Button>
            <Button
              variant="secondary"
              // style={{
              //   marginTop: "-70rem",
              //   position: "relative",
              //   marginLeft: "42rem",
              // }}
              onClick={FetchInternClientarray}
            >
              Refresh to know status
            </Button>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
              fontSize: "1.5rem",
              justifyContent: "center",
              width: "100%",
            }}
          >
            We are working on your project stay updated!
            {/* <br /> */}
            <Button
              variant="info"
              style={{
                marginRight: "1rem",
                marginLeft: "1rem",
              }}
            >
              <Link to="/ListenerChat">Chat</Link>
            </Button>
            <Button
              variant="secondary"
              // style={{
              //   marginTop: "-70rem",
              //   position: "relative",
              //   marginLeft: "42rem",
              // }}
              onClick={FetchInternClientarray}
            >
              Refresh to know status
            </Button>
          </div>{" "}
        </>
      )}

      {/* {internItem.clientSideDisplay == "send" ? <></> : <></>} */}
      {/* {internItem.price} */}

      {/* {internItem.price == 0 && internItem.approval == "null" ? (
        <>
          <div>Rs.{internItem.price}</div>
        </>
      ) : (
        <></>
      )} */}

      {/* {internItem.price != 0 &&
      internItem.IsAmountpaid == false &&
      internItem.approval == "null" ? (
        <>
          <div className="payment1_grid-container">
            <div className="payment1_left-box">
              <img src={qrcode} alt="qrcode" width={"90%"} />
              <h1 className="payment1_amount"> Rs.{internItem.price}</h1>
              <h1>Scan the QR code to pay the amount</h1>
            </div>
            <div className="payment1_right-box">
              <h2 className="payment1_right-heading">
                To avail your work ,pay now!
              </h2>
              <img src={locked} alt="locked" width={"60%"} />
            </div>
          </div>
        </>
      ) : (
        <></>
      )} */}

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          fontSize: "1.5rem",
          justifyContent: "center",
          width: "100%",
        }}
      >
        We are working on your project stay updated!
       
        <Button
          variant="primary"
         
        >
          <Link to="/ListenerChat">Chat</Link>
        </Button>
      </div> */}
    </>
  );
};

export default Payment;
