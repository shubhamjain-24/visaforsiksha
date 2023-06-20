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
import emailjs from "@emailjs/browser";
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

const AdminDashboard = () => {
  const [item, setItem] = useState("");
  const [totalIntern, setTotalIntern] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");
  const [monthRevenue, setmonthRevenue] = useState("");
  const [totalAmountPaid, setTotalAmountPaid] = useState("");
  const [value, setValue] = React.useState(3);
  const [FilterData, setFilterData] = useState([]);
  const [updateprice, setUpdatePrie] = useState("");
  const [email, setEmail] = useState("");
  const [emailamt, setEmailamt] = useState("");
  const [money, setMoney] = useState(0);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState("");
  const [amountpaid, setAmountpaid] = useState(false);
  const [deletion, setDelete] = useState(false);
  const [monthnew, setMonthNew] = useState(3);
  const [selectedMonth, setSelectedMonth] = useState("");

  const [show, setShow] = useState(false);
  const toast = useToast();
  const userInfoString = localStorage.getItem("userInfo");
  const userInfo = JSON.parse(userInfoString);
  // const[jan,setJan]=useState

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setEmailamt(e);
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
      const res = await axios.put(
        `/api/user/admin/updateSubarrayIndexofdataAdmin/${userInfo.email}`,
        { price: parseInt(price) }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
    try {
      const res = await axios.get(
        "/api/user/Allunpaidclients/foradmin/mainlist"
      );
      setFilterData(res.data);
    } catch (error) {
      console.log(error.message);
    }
    getTotalRevenuePerMonth();
    getCurrentYearRev();
  };

  // console.log(money);
  useEffect(() => {
    updatePrice();
  }, []);

  const updateAmountstatus = async () => {
    try {
      const res = await axios.put(`/api/user/updateAmountPaid/${emailamt}`, {
        IsAmountpaid: amountpaid,
      });

      console.log("IsAmountpaid", amountpaid);
      console.log(res);
      toast({
        title: "Amount has been successfully paid ",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      getapi();
    } catch (error) {
      console.log(error.message);
      // toast({
      //   title: "Failed to save!",
      //   description: error.response.data,
      //   status: "error",
      //   duration: 5000,
      //   isClosable: true,
      //   position: "bottom",
      // });
    }
  };
  useEffect(() => {
    updateAmountstatus();
  }, []);
  console.log(amountpaid);

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // const month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const month = [
    { number: 0, name: "January" },
    { number: 1, name: "February" },
    { number: 2, name: "March" },
    { number: 3, name: "April" },
    { number: 4, name: "May" },
    { number: 5, name: "June" },
    { number: 6, name: "July" },
    { number: 7, name: "August" },
    { number: 8, name: "September" },
    { number: 9, name: "October" },
    { number: 10, name: "November" },
    { number: 11, name: "December" },
  ];

  const fetchItem = async () => {
    const response = await fetch("/api/user/totalClientsnumber");
    const data = await response.json();
    setItem(data);
    console.log("data", data);
  };
  const fetchIntern = async () => {
    const response = await fetch("/api/user/totalintern");
    const data = await response.json();
    setTotalIntern(data);
    console.log("data", data);
  };
  const fetchTotalRevenue = async () => {
    const response = await fetch("/api/user/totalrevenue");
    const data = await response.json();
    setTotalRevenue(data);
  };
  const fetchTotalAmtPaid = async () => {
    const response = await fetch("/api/user/amount/totalamountpaidclients");
    const data = await response.json();
    setTotalAmountPaid(data);
  };
  const fetchMonthRevenue = async () => {
    const response = await fetch(`/api/user/${value}`);
    const data = await response.json();
    setmonthRevenue(data);
  };

  console.log(email);

  const getapi = async (url) => {
    try {
      const res = await axios.get(
        "/api/user/Allunpaidclients/foradmin/mainlist"
      );
      setFilterData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCurrentYearRev = async (url) => {
    try {
      const res = await axios.get(
        `/api/user/TotalRevenueCurrentYear/${userInfo.email}`
      );
      setMoney(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  async function deleteData(e) {
    try {
      await axios.delete(`/api/user/deletetheuser/${e}`);
      getapi(); // Call the getapi function after deleting the data
      setDelete(false);
    } catch (error) {
      console.error(error);
    }
  }

  const [news, setNews] = useState(0);

  const RevenuePerMonth = async () => {
    try {
      const res = await axios.get(
        `/api/user/TotalRevenueperMonth/${userInfo.email}`,
        { monthIndex: 3 }
      );
      setMoney(res.json);
      console.log("res", res);
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(news);

  const getTotalRevenuePerMonth = async () => {
    try {
      const response = await axios.get(
        `/api/user/TotalRevenueperMonth/${userInfo.email}/${news}`
      );
      console.log(response.data);
      setMonthNew(response.data);
      if (news === 0) {
        setSelectedMonth("January");
      } else if (news === 1) {
        setSelectedMonth("February");
      } else if (news === 2) {
        setSelectedMonth("March");
      } else if (news === 3) {
        setSelectedMonth("April");
      } else if (news === 4) {
        setSelectedMonth("May");
      } else if (news === 5) {
        setSelectedMonth("June");
      } else if (news === 6) {
        setSelectedMonth("July");
      } else if (news === 7) {
        setSelectedMonth("August");
      } else if (news === 8) {
        setSelectedMonth("September");
      } else if (news === 9) {
        setSelectedMonth("October");
      } else if (news === 10) {
        setSelectedMonth("November");
      } else if (news === 11) {
        setSelectedMonth("December");
      }
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getapi("/api/user/allClientforAdmin");
    getapi();
  }, []);

  useEffect(() => {
    // const fun = email;
    fetchItem();
    fetchIntern();
    fetchTotalRevenue();
    fetchTotalAmtPaid();
    RevenuePerMonth();
  }, []);
  useEffect(() => {
    fetchMonthRevenue();
  }, [value]);

  useEffect(() => {
    getTotalRevenuePerMonth();
  }, [news]);

  useEffect(() => {
    getCurrentYearRev();
  }, [news]);

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroudColor: ["red"],
      },
    ],
  });
  const [revenuedata, setrevenuedata] = useState({
    labels: RevenueData.map((data) => data.month),
    datasets: [
      {
        label: "Revenue Generated",
        data: RevenueData.map((data) => data.revenueGain),
        backgroudColor: ["red"],
      },
    ],
  });

  const updateSubarray = async (req, res) => {
    try {
      const res = await axios.put(
        `/api/user/admin/updateSubarrayIndexofdataAdmin/${userInfo.email}`,
        { price: price }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // useEffect(() => {
  //   updateSubarray();
  // }, []);

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
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SOPIFY ADMIN DASHBOARD</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/clientdetails">
                <Nav.Link>All Clients</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/chat">
                <Nav.Link>My Chats</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/particularClient">
                <Nav.Link>Particular Client Info</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <AdminNav />
      <div className="admin-mainContainer">
        <div className="admin-mainHead-div">
          <div className="admin-mainHead">Admin Portal</div>
        </div>
        <div className="admin-subContainer">
          <div className="admin-graphContainer">
            <Chart chartData={userData} />
            <Chart chartData={revenuedata} />
          </div>
          <div className="admin-cardsContainer">
            <div className="admin-card">
              <div className="admin-card-icon-background">
                <div className="admin-card-icon">
                  <FaUserTie />
                </div>
              </div>
              <div className="admin-card-number">{item}</div>
              <div className="admin-card-head">Client</div>
            </div>
            <div className="admin-card admincard-2">
              <div className="admin-card-icon-background">
                <div className="admin-card-icon icon2">
                  <FaUserEdit />
                </div>
              </div>
              <div className="admin-card-number">{totalIntern}</div>
              <div className="admin-card-head">Interns</div>
            </div>
            <div className="admin-card admincard-3">
              <div className="admin-card-icon-background icon3-back">
                <div className="admin-card-icon icon3">
                  <FaCashRegister />
                </div>
              </div>
              <div className="admin-card-number">₹ {totalRevenue}</div>
              <div className="admin-card-head">Total Revenue</div>
            </div>
            <div className="admin-card admincard-4">
              <div className="admin-card-icon-background icon4-back">
                <div className="admin-card-icon icon4">
                  <FaRegListAlt />
                </div>
              </div>
              <div className="admin-card-number">
                {" "}
                <LinkContainer to="/chat">
                  <Nav.Link>My Chats</Nav.Link>
                </LinkContainer>
              </div>
            </div>
            <div className="admin-card admincard-5">
              <div className="admin-card-icon-background icon4-back">
                <div className="admin-card-icon icon4">
                  <FaUserClock />
                </div>
              </div>
              <div className="admin-card-number">
                {Number(item) - Number(totalAmountPaid)}
              </div>
              <div className="admin-card-head">Pending Amount Cients</div>
            </div>
            <div className="admin-card admincard-6">
              <div className="admin-card-icon-background icon4-back">
                <div className="admin-card-icon icon4">
                  <FaUserClock />
                </div>
              </div>
              <div className="admin-card-number">{totalAmountPaid}</div>
              <div className="admin-card-head">Total amount Paid clients</div>
            </div>
          </div>
        </div>
      </div>
      {/* Month based Revenue:{monthnew} */}
      {/* <RadioGroup
        onChange={setValue}
        value={value}
        style={{ marginLeft: "5rem", marginTop: "3rem", marginRight: "5rem" }}
      > */}
      {/* <Stack direction="row">
          {monthNames.map((data) => {
            return (
              <>
                <Radio value={data} onClick={fetchMonthRevenue}>
                  {data}
                </Radio>
              </>
            );
          })}
        </Stack> */}
      {/* /////////////////////////// */}
      {/* ///////////////////////////////////// */}
      <br />
      <div style={{ marginLeft: "50px" }}>
        Revenue from the existing database: {monthRevenue}
        <br />
        <br />
        CURRENT YEAR REVENUE :{money}
        <br />
        <br />
        MONTH BASED REVENUE ({selectedMonth}) :&nbsp;{monthnew}
      </div>
      {/* </RadioGroup> */}
      <RadioGroup
        onChange={setNews}
        value={news}
        style={{ marginLeft: "5rem", marginTop: "3rem", marginRight: "5rem" }}
      >
        {console.log("news", news)}
        <Stack direction="row">
          {month.map((data) => {
            return (
              <>
                <Radio
                  key={data.number}
                  onChange={(e) => setNews(data.number)}
                  value={data.number}
                  colorScheme="green"
                  onClick={getTotalRevenuePerMonth}
                >
                  {data.name}
                </Radio>
              </>
            );
          })}
        </Stack>
        <br />
      </RadioGroup>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <Table  id="table-to-xls">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Update Price</th>
            <th style={{width:"10rem"}}>Is Amount Paid</th>
            <th>Work Status</th>
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
            {/* <th>Delete</th> */}
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
                    <td>
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

                      <Accordion
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
                      </Accordion>

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
                    </td>
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
                        <>
                          {" "}
                          <Button
                            variant="danger"
                            style={{ height: "2rem", fontSize: "13px" }}
                          >
                            Unpaid
                          </Button>
                          <Button
                            variant="warning"
                            onClick={(e) => handleShow(data.email)}
                            style={{ height: "2rem", fontSize: "13px" }}
                          >
                            <AiFillEdit />
                          </Button>
                          <Modal
                            className="canvas-modal"
                            show={show}
                            onHide={handleClose}
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>Amount payment updation</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              {/* <Input
                                  placeholder="Enter the price"
                                  onChange={(e) => setPrice(e.target.value)}
                                ></Input> */}

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

                              {/* <Button onClick={updatePrice}>Done</Button> */}
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
                          </Modal>
                        </>
                      )}
                      {data.IsAmountpaid}
                    </td>
                    <td>
                      {" "}
                      {data.flag ? (
                        <>
                          <Button
                            variant="success"
                            style={{ height: "2rem", fontSize: "13px" }}
                          >
                            Done
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="info"
                            style={{ height: "2rem", fontSize: "13px" }}
                          >
                            Pending
                          </Button>
                        </>
                      )}
                    </td>
                    <td>{data.selectedValues}</td>
                    <td>
                      <form onSubmit={sendEmail}>
                        <input
                          type="email"
                          name="email"
                          value={data.email}
                          style={{ display: "none" }}
                        />
                        <input
                          type="name"
                          name="name"
                          value={data.name}
                          style={{ display: "none" }}
                        />
                        <input
                          type="price"
                          name="price"
                          value={data.price}
                          style={{ display: "none" }}
                        />
                        {console.log(data.email)}
                        <input type="submit" value="Notify the client " />
                      </form>
                      {/* <Button onClick={sendEmail}>Notify</Button> */}
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

export default AdminDashboard;
