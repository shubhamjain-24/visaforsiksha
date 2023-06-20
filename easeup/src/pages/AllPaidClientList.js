import {
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Card,
  HStack,
  useRadioGroup,
  RadioGroup,
  Stack,
  Radio,
  useDisclosure,
  Input,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Accordion, Collapse, Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { Card } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import { AiFillEdit } from "react-icons/ai";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "./admin.css";
import {
  FaUserTie,
  FaUserEdit,
  FaUserCircle,
  FaCashRegister,
  FaRegListAlt,
  FaUserClock,
} from "react-icons/fa";
import Chart from "./Chart/Chart";
import "./admin.css";
import { UserData } from "./Data2";
import { RevenueData } from "./Revenuedata";
import AdminNav from "./AdminNav";
import emailjs from "@emailjs/browser";

const AllPaidClientList = () => {
  const [item, setItem] = useState("");
  const [totalIntern, setTotalIntern] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");
  const [monthRevenue, setmonthRevenue] = useState("");
  const [totalAmountPaid, setTotalAmountPaid] = useState("");
  const [value, setValue] = React.useState("February");
  const [FilterData, setFilterData] = useState([]);
  const [updateprice, setUpdatePrie] = useState("");
  const [email, setEmail] = useState("");
  const [emailamt, setEmailamt] = useState("");
  const [money, setMoney] = useState("0");
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [amountpaid, setAmountpaid] = useState(false);
  const [deletion, setDelete] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setEmailamt(e);
  };
  const Deleteswitchbutton = () => {
    setDelete(false);
  };

  const updatePrice = async () => {
    // e.preventDefault();
    try {
      const res = await axios.put(`/api/user/price/${email}`, { price: price });
      // console.log("user", user);
      console.log("price", price);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
    try {
      const res = await axios.get("/api/user/Allpaidclients/foradmin");
      setFilterData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log(money);
  useEffect(() => {
    updatePrice();
  }, []);

  // console.log(value);

  console.log(email);

  const getapi = async (url) => {
    try {
      const res = await axios.get("/api/user/Allpaidclients/foradmin");
      setFilterData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  async function deleteData(e) {
    try {
      await axios.delete(`/api/user/deletetheuser/${e}`);
      getapi(); // Call the getapi function after deleting the data
      setDelete(true);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // getapi("/api/user/allClientforAdmin");
    getapi();
  }, []);

  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sx510p7",
        "template_7bfg753",
        e.target,
        "Do6WFkGM7R5WiDHmY"
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
      <AdminNav />

      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <Table striped id="table-to-xls">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            {/* <th>Update Price</th> */}
            <th>Is Amount Paid</th>

            {/* <th>Age</th> */}
            {/* <th>City</th>
          <th>Marks in 10th</th>
          <th>Marks in 12th</th>
          <th>Marks in Bachelor</th> */}
            {/* <th>Area of Specialization</th> */}
            {/* <th>Internship Experience</th>
          <th>Social Service Experience</th>
          <th>Extra Curriculam</th>
          <th>Other Relevant Information</th>
          <th>Funding Procedure</th>
          <th>Career Goal</th>
          <th>Family Background</th>
          <th>Anthing Else (Relevant)</th>
          <th>Consultancy applied</th>
          <th>Coupon Code</th>
          <th>Country</th>
          <th>Format File</th>
          <th>Resume</th>
          <th>Phone Number</th>
          <th>Heard About us</th> */}
            <th>Selected Additional Services</th>
            <th>Notify</th>
            <th>Delete</th>
            {/* <th>More Details</th>
            <th>Seleted</th> */}
          </tr>
        </thead>
        <tbody>
          <>
            {FilterData.map((data) => {
              const {
                id,
                name,
                email,
                password,
                college,
                course,
                age,
                work,
                city,
                tenth,
                twelth,
                bachelor,
                specialization,
                internship,
                social,
                extra,
                other,
                fund,
                careergoal,
                familybg,
                anythingelse,
                consultancy,
                coupon,
                country,
                phone,
                hear,
                selectedValues,
                status,
                file,
                resume,
                price,
                IsAmountpaid,
              } = data;
              return (
                <>
                  <tr key={data}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.price}</td>
                    {/* <td> */}
                    {/* <Button
                        colorScheme="blue"
                        mr={3}
                        onClick={() => setEmail(data.email)}
                      >
                        Update Price
                      </Button> */}
                    {/* <Button
                        variant="warning"
                        onClick={(e) => handleShow(data.email)}
                        style={{ height: "2rem", fontSize: "13px" }}
                      >
                        Update Price
                      </Button> */}
                    {/* <Accordion
                        defaultActiveKey="0"
                        onClick={() => setEmail(data.email)}
                        style={{ width: "15rem" }}
                      >
                        <Accordion.Item>
                          <Accordion.Header>
                            <Button
                              variant="warning"
                              style={{ fontSize: "14px" }}
                            >
                              Update Price
                            </Button>
                          </Accordion.Header>
                          <Accordion.Body>
                            <Input
                              placeholder="Enter the price"
                              onChange={(e) => setPrice(e.target.value)}
                            ></Input>
                            <Button variant="primary" onClick={updatePrice}>
                              Save Changes
                            </Button>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion> */}
                    {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Update the Price </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                       
                          <Input
                            placeholder="Enter the price"
                            onChange={(e) => setPrice(e.target.value)}
                          ></Input>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" onClick={updatePrice}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal> */}
                    {/* <Button onClick={updatePrice}>Done</Button> */}
                    {/* </td> */}
                    <td>
                      {data.IsAmountpaid ? (
                        <>
                          <Button
                            variant="success"
                            style={{ height: "2rem", fontSize: "13px" }}
                          >
                            Paid
                          </Button>
                          {/* <Button
                            variant="warning"
                            onClick={(e) => handleShow(data.email)}
                            style={{ height: "2rem", fontSize: "13px" }}
                          >
                            Edit
                          </Button> */}
                          {/* <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Amount payment updation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                         

                              <p>
                                Choose YES if the client has paid amount OR
                                choose NO if the client has NOT paid the amount
                                :{" "}
                              </p>
                              <br></br>
                              <Form>
                                <Form.Check
                                  inline
                                  label="YES"
                                  name="group1"
                                  type="radio"
                                  value="true"
                                  onChange={(e) => setAmountpaid(true)}
                                  id={`inline-radio-1`}
                                />
                                <Form.Check
                                  inline
                                  label="NO"
                                  name="group1"
                                  type="radio"
                                  value="false"
                                  onChange={(e) => setAmountpaid(false)}
                                  id={`inline-radio-2`}
                                />
                              </Form>

                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                              <Button
                                variant="primary"
                                onClick={updateAmountstatus}
                              >
                                Save Changes
                              </Button>
                            </Modal.Footer>
                          </Modal> */}
                          {/* <Button onClick={updatePrice}>Done</Button> */}
                        </>
                      ) : (
                        <></>
                      )}
                      {data.IsAmountpaid}
                    </td>
                    <td>{data.selectedValues}</td>{" "}
                    <td>
                      <form onSubmit={sendEmail}>
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          // style={{ display: "none" }}
                        />
                        <input
                          type="name"
                          name="name"
                          value={data.name}
                          // style={{ display: "none" }}
                        />
                        <input
                          type="price"
                          name="price"
                          value={data.price}
                          // style={{ display: "none" }}
                        />
                        {console.log(data.email)}
                        <input type="submit" value="Notify the client " />
                      </form>
                      {/* <Button onClick={sendEmail}>Notify</Button> */}
                    </td>
                    <td>
                      {deletion ? (
                        <>
                          <Button
                            onClick={(e) => Deleteswitchbutton(data.email)}
                          >
                            Delete
                          </Button>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Button onClick={(e) => deleteData(data.email)}>
                            Confirm Deletion
                          </Button>
                        </>
                      )}
                    </td>
                  </tr>
                </>
              );
            })}
          </>
          {/* </tr> */}
        </tbody>
      </Table>
    </>
  );
};

export default AllPaidClientList;
