import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {
  Box,
  Input,
  // Modal,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import {
  Accordion,
  ButtonGroup,
  ModalBody,
  ModalHeader,
  Stack,
  Modal,
  Card,
} from "react-bootstrap";

import ParticularClient from "./ParticularClient";
import { useNavigate } from "react-router";
// import { ChatState } from "../../context/ChatProvider";
import { ChatState } from "../context/ChatProvider";
import UserListItem from "../components/UserAvatar/UserListItem";
import UserBadgeItem from "../components/UserAvatar/UserBadgeItem";
import AdminNav from "./AdminNav";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
function InternList() {
  const userInfoString = localStorage.getItem("userInfo");
  // console.log(userInfoString);
  const userInfo = JSON.parse(userInfoString);
  // console.log(userInfo.name);
  // const [FilterData, setFilterData] =
  const [FilterData, setFilterData] = useState([]);
  const [emailIntern, setEmailIntern] = useState(userInfo.email);
  const [InternName, setInternName] = useState(userInfo.name);

  const [email, setEmail] = useState("newuser@gmail.com");

  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);
  const [emailClientModal, setEmailClientModal] = useState("");
  const [clientData, setClientData] = useState([]);
  const [arrayClientData, setarrayClientData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [groupChatName, setGroupChatName] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [clientEmail, setclientEmail] = useState("");
  const [internItem, setInternItem] = useState("");
  const [emailClient, setEmailClient] = useState("hjhj");

  console.log(selectedUsers);
  const { user, chats, setChats } = ChatState();
  console.log("emailClient", emailClient);
  const particularClientInfo = async () => {
    try {
      const res = await axios.get(`/api/user/allclient/${emailClientModal}`);
      setClientData(res.data);
      console.log(res.data);
      console.log("object", emailClientModal);
    } catch (error) {
      console.log(error.message);
    }
  };

  const FetchInternClientarray = async () => {
    setEmail(userInfo.email);
    try {
      const res = await axios.get(`/api/user/singleIntern/${emailClient}`);
      setInternItem(res.data);
      console.log("res", res);
    } catch (error) {
      console.log(error);
    }
  };

  const DownloadResume = async () => {
    try {
      await axios.get(`/api/user/download/resume/${emailClientModal}`);
      // setClientData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const k = async () => {
    try {
      const res = await axios.get(`/api/user/allclient/${clientEmail}`);
      setarrayClientData(res.data);
      console.log(res.data.email);
      setSelectedUsers([
        {
          _id: arrayClientData._id,
          name: arrayClientData.name,
          // email: clientData.email,
        },
        // {
        //   _id: "63f3a76e541f3612b93f133b",
        //   name: "aa",
        //   email: "aa",
        // },
        {
          _id: "63f3dd4ea267dc66b38f930b",
          name: "admin",
          email: "admin@gmail.com",
        },
      ]);
    } catch (error) {
      console.log(error.message);
    }
    // setarrayClientData("");
  };
  const [showed, setShowed] = useState(false);

  const handleClosed = () => {
    setEmailClientModal("");
    setShowed(false);
  };

  const handleShowed = () => setShowed(true);
  useEffect(() => {
    k();
  }, [clientEmail]);

  const toast = useToast();
  const history = useNavigate();

  const handleClose = () => {
    setEmailClientModal("");
    setShow(false);
  };
  const handleShow = async () => {
    setShow(true);
  };

  const ClientlistArrayUpdate = async () => {
    setDisabled(true);
  };

  const UpdateStatus = async () => {
    // e.preventDefault();

    try {
      const res = await axios.put(`/api/user/myClientList/${emailIntern}`, {
        myClientsArray: [
          {
            email: email,
          },
        ],
      });
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }

    try {
      const res = await axios.put(`/api/user/status/update/${email}`, {
        status: true,
        internName: InternName,
        internEmail: emailIntern,
      });

      console.log("internName: ", InternName);
      console.log("internEmail ", emailIntern);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
    setDisabled(false);

    getapi();
    history("/particularClient");
  };

  const UpdateStatusfalse = async () => {
    setDisabled(false);
  };

  // useEffect(() => {
  //   // UpdateStatusfalse();
  //   // ClientlistArrayUpdate();
  //   // UpdateStatus();
  // }, []);

  //  const handleGroup = (userToAdd) => {
  //    if (selectedUsers.includes(userToAdd)) {
  //      toast({
  //        title: "User already added",
  //        status: "warning",
  //        duration: 5000,
  //        isClosable: true,
  //        position: "top",
  //      });
  //      return;
  //    }

  //    setSelectedUsers([...selectedUsers, userToAdd]);
  //  };
  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.get(`/api/user?search=${search}`, config);
      console.log(data);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleDelete = (delUser) => {
    setSelectedUsers(selectedUsers.filter((sel) => sel._id !== delUser._id));
  };
  const handleSubmit = async () => {
    // if (!groupChatName) {
    //   toast({
    //     title: "Please fill all the feilds",
    //     status: "warning",
    //     duration: 5000,
    //     isClosable: true,
    //     position: "top",
    //   });
    //   return;
    // }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(
        `/api/chat/group`,
        {
          name: "groupChatName",
          users: JSON.stringify(
            selectedUsers.map((u) => u._id),
            console.log(JSON.stringify(selectedUsers.map((u) => u._id)))
          ),
        },

        config
      );

      setChats([data, ...chats]);
      onClose();
      toast({
        title: "New Group Chat Created!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (error) {
      toast({
        title: "Failed to Create the Chat!",
        description: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const getapi = async () => {
    try {
      const res = await axios.get(`/api/user/onlyintern`);
      setFilterData(res.data);
      console.log("updated state data");
    } catch (error) {
      console.log(error.message);
    }
  };
  const [subArray, setSubArray] = useState([]);

  const getSubArray = async () => {
    try {
      const res = await axios.get(`/api/user/subarray/of/interns`);
      setSubArray(res.data);
      console.log(subArray);
    } catch (error) {
      console.log(error.message);
    }
    setClose(true);
  };

  const handleGroup = (userToAdd) => {
    console.log("userToAdd", userToAdd);
    if (selectedUsers.includes(userToAdd)) {
      toast({
        title: "User already added",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setSelectedUsers([...selectedUsers, userToAdd]);
  };

  useEffect(() => {
    getapi();
  }, []);

  useEffect(() => {
    particularClientInfo();
    DownloadResume();
    // FetchInternClientarray();
  }, [emailClientModal]);

  // [ParticularClient];
  console.log(emailClientModal);
  // console.log(clientData);

  const { isOpen, onOpen, onClose } = useDisclosure();
const[close,setClose]=useState(true);
  return (
    <>
      <AdminNav />
      {/* <Button onClick={getSubArray}> Generate compressed Record</Button> */}

      {close ? (
        <div>
          <ReactHTMLTableToExcel
            id="test-table-xls-button"
            className="download-table-xls-button"
            table="internList"
            filename="tablexls"
            sheet="tablexls"
            buttonText="Download as XLS"
          />
          <Button
            onClick={() => setClose(false)}
            variant="danger"
            style={{
              margin: "2% 2%",
            }}
          >
            close
          </Button>
          <Table striped id="internList">
            <thead>
              <tr>
                <th>Name of Intern</th>
                <th>Email of Intern</th>
                <th>Revisions</th>
                <th> Date of First Submission</th>
                <th> Date of Approval</th>
                <th> Duration</th>
                <th> Status of Work </th>
                <th> Approved by Checker</th>
              </tr>
            </thead>
            <tbody>
              <>
                {subArray.map((data) => {
                  const {
                    nameofintern,
                    emailofintern,
                    revision,
                    FirstSubmission,
                    approvalDate,
                    duration,
                    completion,
                    CheckerEmail,
                  } = data;
                  return (
                    <>
                      <tr>
                        <td>{nameofintern}</td>
                        <td>{emailofintern}</td>
                        <td>{revision}</td>
                        <td>
                          {typeof FirstSubmission === "string"
                            ? FirstSubmission.slice(0, 10)
                            : FirstSubmission}
                        </td>{" "}
                        <td>
                          {typeof approvalDate === "string"
                            ? approvalDate.slice(0, 10)
                            : approvalDate}
                        </td>{" "}
                        <td>{duration}</td>
                        <td>{completion}</td>
                        <td>{CheckerEmail}</td>
                      </tr>
                    </>
                  );
                })}
              </>
            </tbody>
          </Table>
        </div>
      ) : (
        <>
          {" "}
          <Button
            onClick={getSubArray}
            style={{
              margin: "2% 2%",
            }}
          >
            {" "}
            Generate compressed Record
          </Button>
        </>
      )}
      {/* {userInfo.name} */}
      <div style={{ display: "flex", flexWrap: "wrap", height: "100vh" }}>
        {/* style={{ border: "2px solid red" }} */}
        <div
          style={{
            width: "50%",
            height: "10%",
            border: "2px solid black",
            overflow: "scroll",
            height: "100vh",
          }}
        >
          <Table striped style={{ width: "16rem" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {/* <th>Applying College</th> */}
                {/* <th>Aspiring course</th> */}
                {/* <th>Age</th> */}
                {/* <th>City</th>
          <th>Marks in 10th</th>
          <th>Marks in 12th</th>
          <th>Marks in Bachelor</th> */}
                <th>Work </th>
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
                {/* <th>Selected Additional Services</th> */}
              </tr>
            </thead>
            <tbody>
              <>
                {FilterData.map((data) => {
                  const {
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
                  } = data;
                  return (
                    <>
                      <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>

                        {/* <td>{data.college}</td> */}
                        {/* <td>{data.course}</td> */}

                        {/* <td>{data.age}</td> 
                <td>{data.city}</td>
                <td>{data.tenth}</td>
                <td>{data.twelth}</td>
                <td>{data.bachelor}</td> */}
                        {/* <td>{data.specialization}</td> */}
                        {/* <td>{data.internship}</td>
                <td>{data.social}</td>
                <td>{data.extra}</td>
                <td>{data.other}</td>
                <td>{data.fund}</td>
                <td>{data.careergoal}</td>
                <td>{data.familybg}</td>
                <td>{data.anythingelse}</td>
                <td>{data.consultancy}</td>
                <td>{data.coupon}</td>
                <td>{data.country}</td>
                <td>{data.file}</td>
                <td>{data.resume}</td>
                <td>{data.phone}</td>
                <td>{data.hear}</td> */}
                        {/* <td>{data.selectedValues}</td> */}

                        <td>
                          {/* <Button onClick={onOpen} variant="outline-primary">
                        view
                      </Button>

                      <Modal
                        blockScrollOnMount={false}
                        isOpen={isOpen}
                        onClose={onClose}
                        size="full"
                      >
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Modal Title</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Text fontWeight="bold" mb="1rem">
                              You can scroll the content behind the modal
                            </Text>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dignissimos rem, maxime velit mollitia iure
                            eos tempora at dolorum deserunt. Illum reprehenderit
                            explicabo, odit eligendi rerum deleniti veniam
                            aliquid facilis odio.
                          </ModalBody>

                          <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                              Close
                            </Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal> */}

                          <Button
                            variant="primary"
                            onClick={() =>
                              handleShow(setEmailClientModal(data.email))
                            }
                          >
                            View More
                          </Button>

                          <Modal show={show} onHide={handleClose} fullscreen>
                            <Modal.Header closeButton>
                              <Modal.Title>{clientData.name}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              {/* <Button onClick={particularClientInfo}>k</Button> */}
                              <br />
                              <>name: {clientData.name}</>
                              <br />
                              <>email: {clientData.email}</>
                              <br />
                              <>college: {clientData.college}</> <br /> <br />
                              <>phone: {clientData.phone}</> <br /> <br />
                              <>age: {clientData.age}</> <br /> <br />
                              <>tenth: {clientData.tenth}</> <br /> <br />
                              <>twelth: {clientData.twelth}</> <br /> <br />
                              <>
                                specialization: {clientData.specialization}
                              </>{" "}
                              <br /> <br />
                              <>
                                careergoal: {clientData.careergoal}
                              </> <br /> <br />
                              <>anythingelse: {clientData.anythingelse}</>{" "}
                              <br /> <br />
                              resume:{clientData.resume}
                              <br /> <br />
                              <a
                                id="download-link"
                                href={`/api/user/download/resume/${clientData.email}`}
                                download
                              >
                                Download Resume
                              </a>
                              <br /> <br />
                              File:{clientData.file}
                              <br /> <br />
                              <a
                                id="download-link"
                                href={`/api/user/download/file/${clientData.email}`}
                                download
                              >
                                Download File
                              </a>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Close
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
                        <td>
                          <Button
                            variant="outline-success"
                            onClick={() => setEmailClient(data.email)}
                          >
                            Select
                          </Button>
                        </td>
                      </tr>
                      {/* <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">{data.name}</Heading>

                  <Text py="2">
                    <p>{data.email}</p>
                    <p>{data.city}</p>
                    <p>{data.phone}</p>
                    <p>{data.age}</p>
                  </Text>
                  <Box>
                    <Text py="2">10th Score ={data.tenth}</Text>
                    <Text py="2">12th Score ={data.twelth}</Text>
                    <Text py="2">Bachelor Score ={data.bachelor}</Text>
                    <Text py="2">
                      Area of Specialization ={data.specialization}
                    </Text>
                    <Text py="2">Internship Experience ={data.internship}</Text>
                    <Text py="2">
                      Social Service Experience ={data.social}
                    </Text>{" "}
                    <Text py="2">Extra Curriculam ={data.extra}</Text>
                    <Text py="2">Other Relevant Information ={data.other}</Text>
                    <Text py="2">Funding Procedure ={data.fund}</Text>
                    <Text py="2">Career Goal ={data.careergoal}</Text>
                    <Text py="2">Family Background ={data.familybg}</Text>
                    <Text py="2">
                      Anthing Else (Relevant) ={data.anythingelse}
                    </Text>
                    <Text py="2">Consultancy applied ={data.consultancy}</Text>
                    <Text py="2">Coupon Code ={data.coupon}</Text>
                    <Text py="2">Country ={data.country}</Text>
                    <Text py="2">Format File ={data.file}</Text>
                    <Text py="2">Resume ={data.resume}</Text>{" "}
                    <Text py="2">Heard About us ={data.hear}</Text>
                    <Text py="2">
                      Selected Additional Services ={data.selectedValues}
                    </Text>
                    <Text py="2">Current Status={data.status}</Text>
                  </Box>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Select
                  </Button>
                </CardFooter>
              </Stack>
            </Card> */}
                    </>
                  );
                })}
              </>
              {/* </tr> */}
            </tbody>
          </Table>
        </div>

        <div
          style={{
            border: "2px solid black",
            width: "50%",
            height: "100vh",
            overflow: "scroll",
            // position: "absolute",
          }}
        >
          <Button onClick={FetchInternClientarray}>ok</Button>
          {internItem.name}

          {internItem.myClientsArray?.map((data) => {
            return (
              <>
                <Card>
                  <Card.Body>
                    <Card.Title>{data.email}</Card.Title>

                    <Card.Subtitle className="mb-2 text-muted">
                      Duration : {data.duration} days
                    </Card.Subtitle>
                    <Card.Text>
                      No. of Revisions : {data.revision}
                      <br />
                      Status of Work : {data.completion}
                      <br />
                      Name of intern : {data.nameofintern}
                      <br />
                      Email of intern : {data.emailofintern}
                      <br />
                      Date of First Submission: {data.FirstSubmission}
                      <br />
                      Date of Approval : {data.approvalDate}
                      <br />
                      Approved by Checker : {data.CheckerEmail}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InternList;
