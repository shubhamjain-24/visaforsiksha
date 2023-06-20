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
} from "react-bootstrap";
import "./ClientDetails.css";
import ParticularClient from "./ParticularClient";
import { useNavigate } from "react-router";
// import { ChatState } from "../../context/ChatProvider";
import { ChatState } from "../context/ChatProvider";
import UserListItem from "../components/UserAvatar/UserListItem";
import UserBadgeItem from "../components/UserAvatar/UserBadgeItem";
import InternNavigation from "./InternNavigation";
import AdminNav from "./AdminNav";
function AllClientsadmin() {
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
  console.log(selectedUsers);
  const { user, chats, setChats } = ChatState();

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
      const res =
        await axios.get("/api/user/Allunpaidclients/foradmin/mainlist");
      setFilterData(res.data);
      console.log("updated state data");
    } catch (error) {
      console.log(error.message);
    }
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
  }, [emailClientModal]);

  // [ParticularClient];
  console.log(emailClientModal);
  // console.log(clientData);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* {userInfo.name} */}
      <AdminNav />
      <Table className="ClientDetailsTable" >
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
            <th>Area of Specialization</th>
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
            <th>Work Status</th>
            <th>More Details</th>
            <th>Seleted</th>
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
                    <td>{data.specialization}</td>
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
                            variant="danger"
                            style={{ height: "2rem", fontSize: "13px" }}
                          >
                            Pending
                          </Button>
                        </>
                      )}
                    </td>
                    {/* <td>{data.flag}</td> */}
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
                        className="ClientDetailsButton"
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
                          <>specialization: {clientData.specialization}</>{" "}
                          <br /> <br />
                          <>careergoal: {clientData.careergoal}</> <br /> <br />
                          <>
                            anythingelse: {clientData.anythingelse}
                          </> <br /> <br />
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
                      <Accordion
                        defaultActiveKey="0"
                        onClick={() => setEmail(data.email)}
                        className="ClientDetailsAccordian"
                      >
                        <Accordion.Item>
                          <Accordion.Header>
                            <Button
                              className="ClientDetailsButton2"
                              variant="warning"
                              style={{ fontSize: "14px" }}
                            >
                              Update Status
                            </Button>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p> Do you want to select this person</p>
                            <br /> <br />
                            <Button
                              onClick={() => k(setclientEmail(data.email))}
                            >
                              Triple click
                            </Button>
                            <Button onClick={handleSubmit}>Chat</Button>
                            {/* <Input
                              placeholder="Add Users eg: John, Piyush, Jane"
                              mb={1}
                              onChange={(e) => handleSearch(e.target.value)}
                            /> */}
                            <Box w="100%" d="flex" flexWrap="wrap">
                              {selectedUsers.map((u) => (
                                <UserBadgeItem
                                  key={u._id}
                                  user={u}
                                  handleFunction={() => handleDelete(u)}
                                />
                              ))}
                              {loading ? (
                                // <ChatLoading />
                                <div>Loading...</div>
                              ) : (
                                searchResult
                                  ?.slice(0, 4)
                                  .map((user) => (
                                    <UserListItem
                                      key={user._id}
                                      user={user}
                                      handleFunction={() => handleGroup(user)}
                                    />
                                  ))
                              )}
                            </Box>
                            <ButtonGroup>
                              <Button
                                onClick={ClientlistArrayUpdate}
                                variant="outline-danger"
                              >
                                No
                              </Button>{" "}
                              <Button
                                variant="outline-primary"
                                onClick={UpdateStatusfalse}
                              >
                                Yes
                              </Button>
                            </ButtonGroup>
                            {disabled ? (
                              <> </>
                            ) : (
                              <>
                                {" "}
                                <Button
                                  variant="success"
                                  onClick={UpdateStatus}
                                >
                                  Proceed
                                </Button>
                              </>
                            )}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
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
    </>
  );
}

export default AllClientsadmin;
