// import axios from "axios";
// import { useEffect, useRef } from "react";
// import { useState } from "react";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import {
//   Box,
//   Input,
//   // Modal,
//   useDisclosure,
//   useToast,
// } from "@chakra-ui/react";
// import {
//   Accordion,
//   ButtonGroup,
//   ModalBody,
//   ModalHeader,
//   Stack,
//   Modal,
//   Form,
//   ToggleButton,
// } from "react-bootstrap";

// // import ParticularClient from "./ParticularClient";
// import { useNavigate } from "react-router";

// import { ChatState } from "./context/ChatProvider";

// // import { ChatState } from "./";
// import "./styles/checkerdash.css";
// import UserListItem from "./components/UserAvatar/UserListItem";
// // import UserBadgeItem from "../components/UserAvatar/UserBadgeItem";
// import UserBadgeItem from "./components/UserAvatar/UserBadgeItem";
// import Navigation from "./components/Navigation";
// import CheckerNav from "./components/CheckerNav";

// function CheckerDashboard() {
//   const userInfoString = localStorage.getItem("userInfo");
//   // console.log(userInfoString);
//   const userInfo = JSON.parse(userInfoString);
//   // console.log(userInfo.name);
//   // const [FilterData, setFilterData] =
//   const [FilterData, setFilterData] = useState([]);
//   const [emailIntern, setEmailIntern] = useState(userInfo.email);
//   const [InternName, setInternName] = useState(userInfo.name);

//   const [myinternEmail, setMyintermEmail] = useState("");
//   const [myclientemail, setMyClientEmail] = useState("");

//   const internEmailUpdation = (e) => {
//     setMyintermEmail(e.target.value);
//   };
//   const [checked, setChecked] = useState(false);

//   const clientEmailupdation = (e) => {
//     setMyClientEmail(e.target.value);
//   };
//   console.log("myinternEmail", myinternEmail);
//   console.log("myclientemail", myclientemail);
//   const [showCanvas, setShowCanvas] = useState(false);
//   const handleCloseCanvas = () => {
//     setShowCanvas(false);
//     setMyintermEmail("");
//     setMyClientEmail("");
//   };
//   const handleShowCanvas = () => setShowCanvas(true);

//   const [email, setEmail] = useState("newuser@gmail.com");

//   const [Corrections, setCorrections] = useState("");

//   const buttonRef1 = useRef(null);
//   const buttonRef2 = useRef(null);

//   const handleClick = () => {
//     buttonRef1.current.click();
//     buttonRef2.current.click();
//   };

//   const [disabled, setDisabled] = useState(true);
//   const [show, setShow] = useState(false);
//   const [showSmall, setshowSmall] = useState(false);
//   const [showSmallApproved, setshowSmallApproved] = useState(false);

//   const [emailClientModal, setEmailClientModal] = useState("");
//   const [clientData, setClientData] = useState([]);
//   const [arrayClientData, setarrayClientData] = useState([]);
//   const [searchResult, setSearchResult] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [groupChatName, setGroupChatName] = useState();
//   const [selectedUsers, setSelectedUsers] = useState([]);
//   const [clientEmail, setclientEmail] = useState("");
//   const [chatLoad, setChatLoading] = useState(true);
//   const tripleClickRef = useRef(null);
//   console.log(selectedUsers);
//   const { user, chats, setChats } = ChatState();

//   const particularClientInfo = async () => {
//     try {
//       const res = await axios.get(`/api/user/allclient/${emailClientModal}`);
//       setClientData(res.data);
//       console.log(res.data);
//       console.log("object", emailClientModal);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const DownloadResume = async () => {
//     try {
//       await axios.get(`/api/user/download/resume/${emailClientModal}`);
//       // setClientData(res.data);
//       // console.log(res.data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   // useEffect(() => {}, [FilterData]);

//   const k = async () => {
//     try {
//       const res = await axios.get(`/api/user/allclient/${clientEmail}`);
//       setarrayClientData(res.data);
//       console.log(res.data.email);
//       setSelectedUsers([
//         {
//           _id: arrayClientData._id,
//           name: arrayClientData.name,
//           // email: clientData.email,
//         },
//         // {
//         //   _id: "63f3a76e541f3612b93f133b",
//         //   name: "aa",
//         //   email: "aa",
//         // },
//         {
//           _id: "63f3dd4ea267dc66b38f930b",
//           name: "admin",
//           email: "ad@gmail.com",
//         },
//       ]);
//       setChatLoading(false);
//     } catch (error) {
//       console.log(error.message);
//     }
//     // setarrayClientData("");
//   };

//   useEffect(() => {
//     k();
//   }, [clientEmail]);

//   const toast = useToast();
//   const history = useNavigate();

//   const handleClose = () => {
//     setEmailClientModal("");
//     setShow(false);
//   };
//   const handleShow = async () => {
//     setShow(true);
//   };
//   const handleClosesmall = () => {
//     setEmailClientModal("");
//     setshowSmall(false);
//   };
//   const handleShowSmall = async () => {
//     setshowSmall(true);
//   };

//   const handleClosesmallApproved = () => {
//     setEmailClientModal("");
//     setshowSmallApproved(false);
//   };
//   const handleShowSmallApproved = async () => {
//     setshowSmallApproved(true);
//   };

//   const ClientlistArrayUpdate = async () => {
//     setDisabled(true);
//   };

//   const UpdateStatus = async () => {
//     // e.preventDefault();

//     try {
//       const res = await axios.put(`/api/user/myClientList/${emailIntern}`, {
//         myClientsArray: [
//           {
//             email: email,
//           },
//         ],
//       });
//       console.log(res);
//     } catch (error) {
//       console.log(error.message);
//     }

//     try {
//       const res = await axios.put(`/api/user/status/update/${email}`, {
//         status: true,
//         internName: InternName,
//         internEmail: emailIntern,
//       });

//       console.log("internName: ", InternName);
//       console.log("internEmail ", emailIntern);
//       console.log(res);
//     } catch (error) {
//       console.log(error.message);
//     }
//     setDisabled(false);

//     getapi();
//     history("/particularClient");
//   };

//   const UpdateStatusfalse = async () => {
//     setDisabled(false);
//   };

//   const handleSearch = async (query) => {
//     setSearch(query);
//     if (!query) {
//       return;
//     }

//     try {
//       setLoading(true);
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.get(`/api/user?search=${search}`, config);
//       console.log(data);
//       setLoading(false);
//       setSearchResult(data);
//     } catch (error) {
//       toast({
//         title: "Error Occured!",
//         description: "Failed to Load the Search Results",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom-left",
//       });
//     }
//   };

//   const handleDelete = (delUser) => {
//     setSelectedUsers(selectedUsers.filter((sel) => sel._id !== delUser._id));
//   };
//   const handleSubmit = async () => {
//     try {
//       const config = {
//         headers: {
//           Authorization: `Bearer ${user.token}`,
//         },
//       };
//       const { data } = await axios.post(
//         `/api/chat/group`,
//         {
//           name: "groupChatName",
//           users: JSON.stringify(
//             selectedUsers.map((u) => u._id),
//             console.log(JSON.stringify(selectedUsers.map((u) => u._id)))
//           ),
//         },

//         config
//       );

//       setChats([data, ...chats]);
//       onClose();
//       toast({
//         title: "New Group Chat Created!",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     } catch (error) {
//       toast({
//         title: "Failed to Create the Chat!",
//         description: error.response.data,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     }
//   };

//   const getapi = async () => {
//     try {
//       const res = await axios.get(`/api/user/checkerList`);
//       setFilterData(res.data);
//       console.log("updated state data");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   // useEffect(() => {
//   //   k();
//   // }, [chatLoad]);
//   // const handleTripleClick = () => {
//   //   for (let index = 0; index < 7; index++) {
//   //     tripleClickRef.current.click();
//   //   }
//   // };

//   const handleGroup = (userToAdd) => {
//     console.log("userToAdd", userToAdd);
//     if (selectedUsers.includes(userToAdd)) {
//       toast({
//         title: "User already added",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "top",
//       });
//       return;
//     }

//     setSelectedUsers([...selectedUsers, userToAdd]);
//   };

//   const SubmitMark = async () => {
//     try {
//       const res = await axios.put(
//         `/api/user/Marked/by/the/checker/${myinternEmail}/${myclientemail}/${userInfo.email}`,
//         {
//           Marked: true,
//           checkerSent: false,
//           checkerSentBoolean: false,
//           Corrections: Corrections,

//           myClientsArray: [
//             {
//               CheckerEmail: userInfo.email,
//             },
//           ],
//         }
//       );
//       console.log(res);
//       toast({
//         title: "Successfully sent",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setshowSmall(false);
//       setChecked(false);
//     } catch (error) {
//       toast({
//         title: "Failed to Create the Chat!",
//         description: error.response.data,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     }
//   };

//   const SubmitApproval = async () => {
//     try {
//       const res = await axios.put(
//         `/api/user/approvalbyChecker/${myinternEmail}/${myclientemail}`,
//         {
//           Corrections: Corrections,

//           myClientsArray: [
//             {
//               CheckerEmail: userInfo.email,
//             },
//           ],
//         }
//       );
//       console.log(res);
//       toast({
//         title: "You have approved the work",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setshowSmallApproved(false);
//       setChecked(false);
//     } catch (error) {
//       toast({
//         title: "Failed to Create the Chat!",
//         description: error.response.data,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     }

//     try {
//       const res = await axios.put(
//         `/api/user/duration/${myinternEmail}/${myclientemail}`
//       );
//       console.log(res);
//       toast({
//         title: "Duration is marked",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       setshowSmallApproved(false);
//       setChecked(false);
//     } catch (error) {
//       toast({
//         title: "Failed to Create the Chat!",
//         description: error.response.data,
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     }
//   };

//   useEffect(() => {
//     getapi();
//   }, []);

//   useEffect(() => {
//     particularClientInfo();
//     DownloadResume();
//   }, [emailClientModal]);

//   // [ParticularClient];
//   console.log(emailClientModal);
//   // console.log(clientData);
//   const [row, setRowid] = useState();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <CheckerNav />
//       {/* {userInfo.name} */}
//       <Table>
//         <thead>
//           <tr>
//             <th>Name of Intern</th>
//             <th>Intern's Email </th>

//             <th>Client Email</th>

//             <th>Intern's Task</th>
//             <th>More Details about Client </th>
//             <th>Chat</th>
//             <th>Not Approved</th>
//             <th>Approved</th>
//           </tr>
//         </thead>
//         <tbody>
//           <>
//             {FilterData.map((data) => {
//               const {
//                 name,
//                 email,
//                 password,
//                 college,
//                 course,
//                 age,
//                 work,
//                 city,
//                 tenth,
//                 twelth,
//                 bachelor,
//                 specialization,
//                 internship,
//                 social,
//                 extra,
//                 other,
//                 fund,
//                 careergoal,
//                 familybg,
//                 anythingelse,
//                 consultancy,
//                 coupon,
//                 country,
//                 phone,
//                 hear,
//                 selectedValues,
//                 status,
//                 file,
//                 clientEmail,
//                 resume,
//               } = data;
//               return (
//                 <>
//                   <tr key={data.id}>
//                     <td>{data.name}</td>
//                     <td>{data.email}</td>

//                     {/* <td>{data.college}</td> */}
//                     {/* <td>{data.course}</td> */}

//                     {/* <td>{data.age}</td>
//                 <td>{data.city}</td>
//                 <td>{data.tenth}</td>
//                 <td>{data.twelth}</td>
//                 <td>{data.bachelor}</td> */}
//                     <td>{data.clientEmail}</td>
//                     <td>
//                       <a
//                         id="download-link"
//                         href={`/api/user/download/file/${data.email}`}
//                         download
//                       >
//                         Download Task
//                       </a>
//                     </td>
//                     {/* <td>{data.internship}</td>
//                 <td>{data.social}</td>
//                 <td>{data.extra}</td>
//                 <td>{data.other}</td>
//                 <td>{data.fund}</td>
//                 <td>{data.careergoal}</td>
//                 <td>{data.familybg}</td>
//                 <td>{data.anythingelse}</td>
//                 <td>{data.consultancy}</td>
//                 <td>{data.coupon}</td>
//                 <td>{data.country}</td>
//                 <td>{data.file}</td>
//                 <td>{data.resume}</td>
//                 <td>{data.phone}</td>
//                 <td>{data.hear}</td> */}
//                     {/* <td>{data.selectedValues}</td> */}
//                     <td>
//                       <Button
//                         variant="primary"
//                         onClick={() =>
//                           handleShow(setEmailClientModal(data.clientEmail))
//                         }
//                       >
//                         View More
//                       </Button>
//                       {console.log("llll", data.clientEmail)}
//                       <Modal show={show} onHide={handleClose} size="md">
//                         <Modal.Header closeButton>
//                           <Modal.Title>{clientData.name}</Modal.Title>
//                         </Modal.Header>
//                         <Modal.Body>
//                           {/* <Button onClick={particularClientInfo}>k</Button> */}
//                           <br />
//                           <>name: {clientData.name}</>
//                           <br />
//                           <>email: {clientData.email}</>
//                           <br />
//                           <>college: {clientData.college}</> <br /> <br />
//                           <>phone: {clientData.phone}</> <br /> <br />
//                           <>age: {clientData.age}</> <br /> <br />
//                           <>tenth: {clientData.tenth}</> <br /> <br />
//                           <>twelth: {clientData.twelth}</> <br /> <br />
//                           <>specialization: {clientData.specialization}</>{" "}
//                           <br /> <br />
//                           <>careergoal: {clientData.careergoal}</> <br /> <br />
//                           <>
//                             anythingelse: {clientData.anythingelse}
//                           </> <br /> <br />
//                           resume:{clientData.resume}
//                           <br /> <br />
//                           <a
//                             id="download-link"
//                             href={`/api/user/download/resume/${clientData.email}`}
//                             download
//                             style={{
//                               backgroundColor: "skyblue",
//                               padding: "10px 10px",
//                             }}
//                           >
//                             Download Resume
//                           </a>
//                           <br /> <br />
//                           File:{clientData.file}
//                           <br /> <br />
//                           <a
//                             id="download-link"
//                             href={`/api/user/download/file/${clientData.email}`}
//                             download
//                             style={{
//                               backgroundColor: "#a6b7ff",
//                               padding: "10px 10px",
//                             }}
//                           >
//                             Download File
//                           </a>
//                         </Modal.Body>
//                         <Modal.Footer>
//                           <Button variant="secondary" onClick={handleClose}>
//                             Close
//                           </Button>
//                         </Modal.Footer>
//                       </Modal>
//                     </td>

//                     <td>
//                       <Accordion
//                         defaultActiveKey="0"
//                         onClick={() => setEmail(data.email)}
//                         style={{ width: "15rem" }}
//                       >
//                         <Accordion.Item>
//                           <Accordion.Header>
//                             <Button
//                               variant="warning"
//                               style={{ fontSize: "14px" }}
//                             >
//                               Chat on Portal
//                             </Button>
//                           </Accordion.Header>
//                           <Accordion.Body>
//                             <p> triple Click to create chat!</p>
//                             <br />
//                             <Button
//                               onClick={() => k(setclientEmail(data.email))}
//                               ref={tripleClickRef}
//                             >
//                               Triple click
//                             </Button>

//                             <Button variant="success" onClick={handleSubmit}>
//                               create Chat
//                             </Button>
//                             {/* <Input
//                               placeholder="Add Users eg: John, Piyush, Jane"
//                               mb={1}
//                               onChange={(e) => handleSearch(e.target.value)}
//                             /> */}
//                             <Box w="100%" d="flex" flexWrap="wrap">
//                               {selectedUsers.map((u) => (
//                                 <UserBadgeItem
//                                   key={u._id}
//                                   user={u}
//                                   handleFunction={() => handleDelete(u)}
//                                 />
//                               ))}
//                               {loading ? (
//                                 // <ChatLoading />
//                                 <div>Loading...</div>
//                               ) : (
//                                 searchResult
//                                   ?.slice(0, 4)
//                                   .map((user) => (
//                                     <UserListItem
//                                       key={user._id}
//                                       user={user}
//                                       handleFunction={() => handleGroup(user)}
//                                     />
//                                   ))
//                               )}
//                             </Box>
//                             {/* <ButtonGroup>
//                               <Button
//                                 onClick={ClientlistArrayUpdate}
//                                 variant="outline-danger"
//                               >
//                                 No
//                               </Button>{" "}
//                               <Button
//                                 variant="outline-primary"
//                                 onClick={UpdateStatusfalse}
//                               >
//                                 Yes
//                               </Button>
//                             </ButtonGroup> */}
//                             {/* {disabled ? (
//                               <> </>
//                             ) : (
//                               <>
//                                 {" "}
//                                 <Button
//                                   variant="success"
//                                   onClick={UpdateStatus}
//                                 >
//                                   Proceed
//                                 </Button>
//                               </>
//                             )} */}
//                           </Accordion.Body>
//                         </Accordion.Item>
//                       </Accordion>
//                     </td>

//                     <td>
//                       <td>
//                         <Button
//                           variant="danger"
//                           onClick={() =>
//                             handleShowSmall(setEmailClientModal(data.email))
//                           }
//                         >
//                           Disapprove
//                         </Button>
//                         {console.log("llll", data.clientEmail)}
//                         <Modal
//                           show={showSmall}
//                           onHide={handleClosesmall}
//                           className="canvas"
//                         >
//                           <Modal.Header closeButton>
//                             <Modal.Title>
//                               {clientData.name}'s,Work is{" "}
//                               <span style={{ color: "red" }}>
//                                 NOT approved!
//                               </span>
//                             </Modal.Title>
//                           </Modal.Header>
//                           <Modal.Body>
//                             {/* <Button onClick={particularClientInfo}>k</Button> */}
//                             <br />
//                             {/* <input type="text" value={clientData.name} /> */}
//                             <>
//                               Intern Name:{" "}
//                               <span>
//                                 {" "}
//                                 <input type="text" value={clientData.name} />
//                               </span>
//                             </>
//                             <br />
//                             Intern Email:{" "}
//                             <span>
//                               {" "}
//                               <input type="text" value={clientData.email} />
//                             </span>
//                             <br />
//                             Client Email:
//                             <span>
//                               {" "}
//                               <input
//                                 type="text"
//                                 value={clientData.clientEmail}
//                               />
//                             </span>
//                             <br /> <br />
//                             <button style={{ display: "none" }}>
//                               <button
//                                 ref={buttonRef1}
//                                 value={clientData.clientEmail}
//                                 onClick={clientEmailupdation}
//                                 style={{
//                                   border: "2px solid black",
//                                   color: "transparent",
//                                   // width: "1px",
//                                   // cursor: "all-scroll",
//                                 }}
//                               >
//                                 k
//                               </button>
//                               <button
//                                 ref={buttonRef2}
//                                 value={clientData.email}
//                                 onClick={internEmailUpdation}
//                                 style={{
//                                   color: "transparent",
//                                   border: "2px solid green",
//                                   // width: "1px",
//                                 }}
//                               >
//                                 j
//                               </button>
//                             </button>
//                             {/* <button onClick={handleClick}>Click Me</button> */}
//                             <div>
//                               Simply verify that the details are placed
//                               correctly.
//                               <span>
//                                 <ToggleButton
//                                   id="toggle-check"
//                                   type="checkbox"
//                                   variant="outline-success"
//                                   // variant="primary"
//                                   checked={checked}
//                                   value="1"
//                                   onClick={handleClick}
//                                   onChange={(e) =>
//                                     setChecked(e.currentTarget.checked)
//                                   }
//                                 >
//                                   {checked ? (
//                                     <>Verified</>
//                                   ) : (
//                                     <>Click to Verify</>
//                                   )}
//                                 </ToggleButton>
//                               </span>
//                             </div>
//                             <br />
//                             <br />
//                             <Form.Group
//                               className="mb-3"
//                               controlId="exampleForm.ControlTextarea1"
//                             >
//                               {/* <Form.Label>Example textarea</Form.Label> */}
//                               <Form.Control
//                                 as="textarea"
//                                 rows={3}
//                                 placeholder="Enter your Feedback"
//                                 onChange={(e) => setCorrections(e.target.value)}
//                               />
//                             </Form.Group>
//                           </Modal.Body>
//                           <Modal.Footer>
//                             {checked ? (
//                               <>
//                                 {" "}
//                                 <Button
//                                   variant="primary"
//                                   onClick={SubmitMark}
//                                   id="1"
//                                 >
//                                   Send
//                                 </Button>
//                               </>
//                             ) : (
//                               <>
//                                 {" "}
//                                 <Button
//                                   variant="primary"
//                                   onClick={SubmitMark}
//                                   disabled
//                                   id="1"
//                                 >
//                                   Send
//                                 </Button>
//                               </>
//                             )}

//                             <Button
//                               variant="secondary"
//                               onClick={handleClosesmall}
//                             >
//                               Close
//                             </Button>
//                           </Modal.Footer>
//                         </Modal>
//                       </td>
//                     </td>

//                     <td>
//                       <td>
//                         <Button
//                           variant="success"
//                           onClick={() =>
//                             handleShowSmallApproved(
//                               setEmailClientModal(data.email)
//                             )
//                           }
//                         >
//                           Click to approve
//                         </Button>
//                         {console.log("llll", data.clientEmail)}
//                         <Modal
//                           show={showSmallApproved}
//                           onHide={handleClosesmallApproved}
//                           className="canvas"
//                         >
//                           <Modal.Header closeButton>
//                             <Modal.Title>
//                               {clientData.name}'s, Work is{" "}
//                               <span style={{ color: "green" }}>
//                                 ready for approval!{" "}
//                               </span>
//                             </Modal.Title>
//                           </Modal.Header>
//                           <Modal.Body>
//                             {/* <Button onClick={particularClientInfo}>k</Button> */}
//                             <br />
//                             {/* <input type="text" value={clientData.name} /> */}
//                             <>
//                               Intern Name:{" "}
//                               <span>
//                                 {" "}
//                                 <input type="text" value={clientData.name} />
//                               </span>
//                             </>
//                             <br />
//                             Intern Email:{" "}
//                             <span>
//                               {" "}
//                               <input type="text" value={clientData.email} />
//                             </span>
//                             <br />
//                             Client Email:
//                             <span>
//                               {" "}
//                               <input
//                                 type="text"
//                                 value={clientData.clientEmail}
//                               />
//                             </span>
//                             <br /> <br />
//                             <button style={{ display: "none" }}>
//                               <button
//                                 ref={buttonRef1}
//                                 value={clientData.clientEmail}
//                                 onClick={clientEmailupdation}
//                                 style={{
//                                   border: "2px solid black",
//                                   color: "transparent",
//                                   // width: "1px",
//                                   // cursor: "all-scroll",
//                                 }}
//                               >
//                                 k
//                               </button>
//                               <button
//                                 ref={buttonRef2}
//                                 value={clientData.email}
//                                 onClick={internEmailUpdation}
//                                 style={{
//                                   color: "transparent",
//                                   border: "2px solid green",
//                                   // width: "1px",
//                                 }}
//                               >
//                                 j
//                               </button>
//                             </button>
//                             {/* <button onClick={handleClick}>Click Me</button> */}
//                             <div>
//                               Simply verify that the details are placed
//                               correctly.
//                               <span>
//                                 <ToggleButton
//                                   id="toggle-check"
//                                   type="checkbox"
//                                   variant="outline-success"
//                                   // variant="primary"
//                                   checked={checked}
//                                   value="1"
//                                   onClick={handleClick}
//                                   onChange={(e) =>
//                                     setChecked(e.currentTarget.checked)
//                                   }
//                                 >
//                                   {checked ? (
//                                     <>Verified</>
//                                   ) : (
//                                     <>Click to Verify</>
//                                   )}
//                                 </ToggleButton>
//                               </span>
//                               <br />
//                               <br />
//                               <p style={{ color: "grey" }}>
//                                 {" "}
//                                 The work of this intern is ready for approval;
//                                 by clicking "Send," you are endorsing the work
//                                 and removing the intern's record from your list.{" "}
//                               </p>
//                             </div>
//                             <br />
//                             <br />
//                             <Form.Group
//                               className="mb-3"
//                               controlId="exampleForm.ControlTextarea1"
//                             >
//                               {/* <Form.Label>Example textarea</Form.Label> */}
//                               <Form.Control
//                                 as="textarea"
//                                 rows={3}
//                                 placeholder="Enter your Feedback"
//                                 onChange={(e) => setCorrections(e.target.value)}
//                               />
//                             </Form.Group>
//                           </Modal.Body>
//                           <Modal.Footer>
//                             {checked ? (
//                               <>
//                                 {" "}
//                                 <Button
//                                   variant="primary"
//                                   onClick={SubmitApproval}
//                                   id="1"
//                                 >
//                                   Send
//                                 </Button>
//                               </>
//                             ) : (
//                               <>
//                                 {" "}
//                                 <Button
//                                   variant="primary"
//                                   onClick={SubmitApproval}
//                                   disabled
//                                   id="1"
//                                 >
//                                   Send
//                                 </Button>
//                               </>
//                             )}

//                             <Button
//                               variant="secondary"
//                               onClick={handleClosesmallApproved}
//                             >
//                               Close
//                             </Button>
//                           </Modal.Footer>
//                         </Modal>
//                       </td>
//                     </td>
//                   </tr>
//                 </>
//               );
//             })}
//           </>
//           {/* </tr> */}
//         </tbody>
//       </Table>
//     </>
//   );
// }

// export default CheckerDashboard;

import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
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
  Form,
  ToggleButton,
} from "react-bootstrap";

// import ParticularClient from "./ParticularClient";
import { useNavigate } from "react-router";

import { ChatState } from "./context/ChatProvider";

// import { ChatState } from "./";
import "./styles/checkerdash.css";
import UserListItem from "./components/UserAvatar/UserListItem";
// import UserBadgeItem from "../components/UserAvatar/UserBadgeItem";
import UserBadgeItem from "./components/UserAvatar/UserBadgeItem";
import Navigation from "./components/Navigation";
import CheckerNav from "./components/CheckerNav";

function CheckerDashboard() {
  const userInfoString = localStorage.getItem("userInfo");
  // console.log(userInfoString);
  const userInfo = JSON.parse(userInfoString);
  // console.log(userInfo.name);
  // const [FilterData, setFilterData] =
  const [FilterData, setFilterData] = useState([]);
  const [emailIntern, setEmailIntern] = useState(userInfo.email);
  const [InternName, setInternName] = useState(userInfo.name);

  const [myinternEmail, setMyintermEmail] = useState("");
  const [myclientemail, setMyClientEmail] = useState("");

  const internEmailUpdation = (e) => {
    setMyintermEmail(e.target.value);
  };
  const [checked, setChecked] = useState(false);

  const clientEmailupdation = (e) => {
    setMyClientEmail(e.target.value);
  };
  console.log("myinternEmail", myinternEmail);
  console.log("myclientemail", myclientemail);
  const [showCanvas, setShowCanvas] = useState(false);
  const handleCloseCanvas = () => {
    setShowCanvas(false);
    setMyintermEmail("");
    setMyClientEmail("");
  };
  const handleShowCanvas = () => setShowCanvas(true);

  const [email, setEmail] = useState("newuser@gmail.com");

  const [Corrections, setCorrections] = useState("");

  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);

  const handleClick = () => {
    buttonRef1.current.click();
    buttonRef2.current.click();
  };

  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);
  const [showSmall, setshowSmall] = useState(false);
  const [showSmallApproved, setshowSmallApproved] = useState(false);

  const [emailClientModal, setEmailClientModal] = useState("");
  const [clientData, setClientData] = useState([]);
  const [arrayClientData, setarrayClientData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [groupChatName, setGroupChatName] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [clientEmail, setclientEmail] = useState("");
  const [chatLoad, setChatLoading] = useState(true);
  const tripleClickRef = useRef(null);
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
  // useEffect(() => {}, [FilterData]);

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
          email: "ad@gmail.com",
        },
      ]);
      setChatLoading(false);
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
  const handleClosesmall = () => {
    setEmailClientModal("");
    setshowSmall(false);
  };
  const handleShowSmall = async () => {
    setshowSmall(true);
  };

  const handleClosesmallApproved = () => {
    setEmailClientModal("");
    setshowSmallApproved(false);
  };
  const handleShowSmallApproved = async () => {
    setshowSmallApproved(true);
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
      const res = await axios.get(`/api/user/checkerList`);
      setFilterData(res.data);
      console.log("updated state data");
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   k();
  // }, [chatLoad]);
  // const handleTripleClick = () => {
  //   for (let index = 0; index < 7; index++) {
  //     tripleClickRef.current.click();
  //   }
  // };

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

  const SubmitMark = async () => {
    try {
      const res = await axios.put(
        `/api/user/Marked/by/the/checker/${myinternEmail}/${myclientemail}/${userInfo.email}`,
        {
          Marked: true,
          checkerSent: false,
          checkerSentBoolean: false,
          Corrections: Corrections,

          myClientsArray: [
            {
              CheckerEmail: userInfo.email,
            },
          ],
        }
      );
      console.log(res);
      toast({
        title: "Successfully sent",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setshowSmall(false);
      setChecked(false);
    } catch (error) {
      toast({
        title: "Failed to sent!",
        description: error.response.data,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    try {
      const res = await axios.get(`/api/user/checkerList`);
      setFilterData(res.data);
      console.log("updated state data");
    } catch (error) {
      console.log(error.message);
    }
  };

  const SubmitApproval = async () => {
    try {
      const res = await axios.put(
        `/api/user/approvalbyChecker/${myinternEmail}/${myclientemail}/${userInfo.email}`,
        {
          Corrections: Corrections,

          myClientsArray: [
            {
              CheckerEmail: userInfo.email,
            },
          ],
        }
      );
      console.log(res);
      toast({
        title: "You have approved the work",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setshowSmallApproved(false);
      setChecked(false);
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

    try {
      const res = await axios.put(
        `/api/user/duration/${myinternEmail}/${myclientemail}`
      );
      console.log(res);
      toast({
        title: "Duration is marked",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setshowSmallApproved(false);
      setChecked(false);
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
    getapi();
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
  const [row, setRowid] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <CheckerNav />
      {/* {userInfo.name} */}
      <Table>
        <thead>
          <tr>
            <th>Name of Intern</th>
            <th>Intern's Email </th>

            <th>Client Email</th>

            <th>Intern's Task</th>
            <th>More Details about Client </th>
            <th>Chat</th>
            <th>Not Approved</th>
            <th>Approved</th>
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
                clientEmail,
                resume,
              } = data;
              return (
                <>
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>

                    {/* <td>{data.college}</td> */}
                    {/* <td>{data.course}</td> */}

                    {/* <td>{data.age}</td> 
                <td>{data.city}</td>
                <td>{data.tenth}</td>
                <td>{data.twelth}</td>
                <td>{data.bachelor}</td> */}
                    <td>{data.clientEmail}</td>
                    <td>
                      <a
                        id="download-link"
                        href={`/api/user/download/file/${data.email}`}
                        download
                      >
                        Download Task
                      </a>
                    </td>
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
                      <Button
                        variant="primary"
                        onClick={() =>
                          handleShow(setEmailClientModal(data.clientEmail))
                        }
                      >
                        View More
                      </Button>
                      {console.log("llll", data.clientEmail)}
                      <Modal show={show} onHide={handleClose} size="md">
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
                            style={{
                              backgroundColor: "skyblue",
                              padding: "10px 10px",
                            }}
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
                            style={{
                              backgroundColor: "#a6b7ff",
                              padding: "10px 10px",
                            }}
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
                        style={{ width: "15rem" }}
                      >
                        <Accordion.Item>
                          <Accordion.Header>
                            <Button
                              variant="warning"
                              style={{ fontSize: "14px" }}
                            >
                              Chat on Portal
                            </Button>
                          </Accordion.Header>
                          <Accordion.Body>
                            <p> triple Click to create chat!</p>
                            <br />
                            <Button
                              onClick={() => k(setclientEmail(data.email))}
                              ref={tripleClickRef}
                            >
                              Triple click
                            </Button>

                            <Button variant="success" onClick={handleSubmit}>
                              create Chat
                            </Button>
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
                            {/* <ButtonGroup>
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
                            </ButtonGroup> */}
                            {/* {disabled ? (
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
                            )} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </td>

                    <td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() =>
                            handleShowSmall(setEmailClientModal(data.email))
                          }
                        >
                          Disapprove
                        </Button>
                        {console.log("llll", data.clientEmail)}
                        <Modal
                          show={showSmall}
                          onHide={handleClosesmall}
                          className="canvas"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>
                              {clientData.name}'s,Work is{" "}
                              <span style={{ color: "red" }}>
                                NOT approved!
                              </span>
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {/* <Button onClick={particularClientInfo}>k</Button> */}
                            <br />
                            {/* <input type="text" value={clientData.name} /> */}
                            <>
                              Intern Name:{" "}
                              <span>
                                {" "}
                                <input type="text" value={clientData.name} />
                              </span>
                            </>
                            <br />
                            Intern Email:{" "}
                            <span>
                              {" "}
                              <input type="text" value={clientData.email} />
                            </span>
                            <br />
                            Client Email:
                            <span>
                              {" "}
                              <input
                                type="text"
                                value={clientData.clientEmail}
                              />
                            </span>
                            <br /> <br />
                            <button style={{ display: "none" }}>
                              <button
                                ref={buttonRef1}
                                value={clientData.clientEmail}
                                onClick={clientEmailupdation}
                                style={{
                                  border: "2px solid black",
                                  color: "transparent",
                                  // width: "1px",
                                  // cursor: "all-scroll",
                                }}
                              >
                                k
                              </button>
                              <button
                                ref={buttonRef2}
                                value={clientData.email}
                                onClick={internEmailUpdation}
                                style={{
                                  color: "transparent",
                                  border: "2px solid green",
                                  // width: "1px",
                                }}
                              >
                                j
                              </button>
                            </button>
                            {/* <button onClick={handleClick}>Click Me</button> */}
                            <div>
                              Simply verify that the details are placed
                              correctly.
                              <span>
                                <ToggleButton
                                  id="toggle-check"
                                  type="checkbox"
                                  variant="outline-success"
                                  // variant="primary"
                                  checked={checked}
                                  value="1"
                                  onClick={handleClick}
                                  onChange={(e) =>
                                    setChecked(e.currentTarget.checked)
                                  }
                                >
                                  {checked ? (
                                    <>Verified</>
                                  ) : (
                                    <>Click to Verify</>
                                  )}
                                </ToggleButton>
                              </span>
                            </div>
                            <br />
                            <br />
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              {/* <Form.Label>Example textarea</Form.Label> */}
                              <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your Feedback"
                                onChange={(e) => setCorrections(e.target.value)}
                              />
                            </Form.Group>
                          </Modal.Body>
                          <Modal.Footer>
                            {checked ? (
                              <>
                                {" "}
                                <Button
                                  variant="primary"
                                  onClick={SubmitMark}
                                  id="1"
                                >
                                  Send
                                </Button>
                              </>
                            ) : (
                              <>
                                {" "}
                                <Button
                                  variant="primary"
                                  onClick={SubmitMark}
                                  disabled
                                  id="1"
                                >
                                  Send
                                </Button>
                              </>
                            )}

                            <Button
                              variant="secondary"
                              onClick={handleClosesmall}
                            >
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </td>
                    </td>

                    <td>
                      <td>
                        <Button
                          variant="success"
                          onClick={() =>
                            handleShowSmallApproved(
                              setEmailClientModal(data.email)
                            )
                          }
                        >
                          Click to approve
                        </Button>
                        {console.log("llll", data.clientEmail)}
                        <Modal
                          show={showSmallApproved}
                          onHide={handleClosesmallApproved}
                          className="canvas"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>
                              {clientData.name}'s, Work is{" "}
                              <span style={{ color: "green" }}>
                                ready for approval!{" "}
                              </span>
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {/* <Button onClick={particularClientInfo}>k</Button> */}
                            <br />
                            {/* <input type="text" value={clientData.name} /> */}
                            <>
                              Intern Name:{" "}
                              <span>
                                {" "}
                                <input type="text" value={clientData.name} />
                              </span>
                            </>
                            <br />
                            Intern Email:{" "}
                            <span>
                              {" "}
                              <input type="text" value={clientData.email} />
                            </span>
                            <br />
                            Client Email:
                            <span>
                              {" "}
                              <input
                                type="text"
                                value={clientData.clientEmail}
                              />
                            </span>
                            <br /> <br />
                            <button style={{ display: "none" }}>
                              <button
                                ref={buttonRef1}
                                value={clientData.clientEmail}
                                onClick={clientEmailupdation}
                                style={{
                                  border: "2px solid black",
                                  color: "transparent",
                                  // width: "1px",
                                  // cursor: "all-scroll",
                                }}
                              >
                                k
                              </button>
                              <button
                                ref={buttonRef2}
                                value={clientData.email}
                                onClick={internEmailUpdation}
                                style={{
                                  color: "transparent",
                                  border: "2px solid green",
                                  // width: "1px",
                                }}
                              >
                                j
                              </button>
                            </button>
                            {/* <button onClick={handleClick}>Click Me</button> */}
                            <div>
                              Simply verify that the details are placed
                              correctly.
                              <span>
                                <ToggleButton
                                  id="toggle-check"
                                  type="checkbox"
                                  variant="outline-success"
                                  // variant="primary"
                                  checked={checked}
                                  value="1"
                                  onClick={handleClick}
                                  onChange={(e) =>
                                    setChecked(e.currentTarget.checked)
                                  }
                                >
                                  {checked ? (
                                    <>Verified</>
                                  ) : (
                                    <>Click to Verify</>
                                  )}
                                </ToggleButton>
                              </span>
                              <br />
                              <br />
                              <p style={{ color: "grey" }}>
                                {" "}
                                The work of this intern is ready for approval;
                                by clicking "Send," you are endorsing the work
                                and removing the intern's record from your list.{" "}
                              </p>
                            </div>
                            <br />
                            <br />
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              {/* <Form.Label>Example textarea</Form.Label> */}
                              <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your Feedback"
                                onChange={(e) => setCorrections(e.target.value)}
                              />
                            </Form.Group>
                          </Modal.Body>
                          <Modal.Footer>
                            {checked ? (
                              <>
                                {" "}
                                <Button
                                  variant="primary"
                                  onClick={SubmitApproval}
                                  id="1"
                                >
                                  Send
                                </Button>
                              </>
                            ) : (
                              <>
                                {" "}
                                <Button
                                  variant="primary"
                                  onClick={SubmitApproval}
                                  disabled
                                  id="1"
                                >
                                  Send
                                </Button>
                              </>
                            )}

                            <Button
                              variant="secondary"
                              onClick={handleClosesmallApproved}
                            >
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </td>
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
}

export default CheckerDashboard;
