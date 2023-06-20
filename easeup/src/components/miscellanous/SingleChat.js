import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Spacer, Text } from "@chakra-ui/layout";
import "../sttyles.css";
import { IconButton, Progress, Spinner, useToast } from "@chakra-ui/react";
import { getSender, getSenderFull } from "../../config/ChatLogics";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import { ArrowBackIcon } from "@chakra-ui/icons";
import ProfileModal from "./ProfileModal";
import ScrollableChat from "../ScrollableChat";
import { ChatState } from "../../context/ChatProvider";
import Lottie from "react-lottie";
import { AiOutlineArrowLeft } from "react-icons/ai";
import animationData from "../../animation/typing.json";
import io from "socket.io-client";
import UpdateGroupChatModal from "./UpdateGroupChat";
// import Spinner from "react-bootstrap/Spinner";
// import { calcLength } from "framer-motion";
// const ENDPOINT = "http://localhost:8080";
const ENDPOINT = "";
var socket, selectedChatCompare;

//174,30,313

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [buffer, setBuffer] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const [pdf, setPdf] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [progress, setProgress] = useState(false);
  const toast = useToast();
  const fileRef = useRef();
  // import Lottie from 'react-lottie'

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { selectedChat, setSelectedChat, user } = ChatState();

  const fetchMessages = async () => {
    if (!selectedChat) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config
      );
      setMessages(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  });

  useEffect(() => {
    fetchMessages();

    selectedChatCompare = selectedChat;
  }, [selectedChat]);

  const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");
        setBuffer("");
        let lol;
        if (buffer.length > 0) {
          lol = {
            file: buffer,
            type: "pdf",
            chatId: selectedChat._id,
          };
        } else {
          lol = {
            content: newMessage,
            type: "text",
            chatId: selectedChat._id,
          };
        }

        const { data } = await axios.post("/api/message", lol, config);

        socket.emit("new message", data);

        setMessages([...messages, data]);
        console.log({ messages });
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send the Message",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };
  const fileSelected = (e) => {
    const file = e.target.files[0];
    setNewMessage(JSON.stringify(e.target.files[0]));
    setPdf(file);
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const data = reader.result;
      // socket.emit("upload", selectedChat._id);
      socket.emit("upload", { data });
    };
    setShowSpinner(true);
    toast({
      title: "Loading...",
      status: "info",
      duration: 3000,
      isClosable: true,
      // render: () => (
      //   <Spinner size="lg" color="blue.500" thickness="4px" speed="0.65s" />
      // ),
    });
    <Progress size="xs" isIndeterminate />;
    setTimeout(() => {
      setShowSpinner(false);
      // setProgress(true);
      setProgress(true);
    }, 5000);

    // setTimeout(() => {
    //   setProgress(false);
    // }, 100000);

    console.log(e.target.files[0]);
  };

  // useEffect(() => {
  //   socket = io(ENDPOINT);
  //   socket.emit("setup", user);
  //   socket.on("connected", () => setSocketConnected(true));
  //   socket.on("typing", () => setIsTyping(true));
  //   socket.on("stop typing", () => setIsTyping(false));
  // },);

  // useEffect(() => {
  //   socket = io(ENDPOINT);
  //   socket.emit("setup", user);
  //   socket.on("connected", () => setSocketConnected(true));
  //   socket.on("typing", () => setIsTyping(true));
  //   socket.on("stop typing", () => setIsTyping(false));
  //   fetchMessages();
  // eslint-disable-next-line
  // }, [selectedChat]);

  // useEffect(() => {
  //   fetchMessages();

  //   selectedChatCompare = selectedChat;
  // eslint-disable-next-line
  // }, [selectedChat]);

  // useEffect(() => {
  //   socket.on("message recieved", (newMessageRecieved) => {
  //     if (
  //       !selectedChatCompare || // if chat is not selected or doesn't match current chat
  //       selectedChatCompare._id !== newMessageRecieved.chat._id
  //     ) {
  //       if (!notification.includes(newMessageRecieved)) {
  //         setNotification([newMessageRecieved, ...notification]);
  //         setFetchAgain(!fetchAgain);
  //       }
  //     } else {
  //   setMessages([...messages, newMessageRecieved])
  // }
  //   });

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      if (
        !selectedChatCompare ||
        selectedChat._id !== newMessageRecieved.chat._id
      ) {
        //give notification
      } else {
        console.log({ newMessageRecieved });
        setMessages([...messages, newMessageRecieved]);
      }
    });
  });

  const handleSendPdf = () => {
    // Join the specified chat room
    // socket.emit("join-room", room);
    // Send the PDF file to the specified chat room
    socket.emit("send-pdf", { pdf });
  };

  useEffect(() => {
    socket.on("uploaded", (data, newMessageRecieved) => {
      console.log(data);
      if (data.buffer.length > 0) {
        //set 1 state with the bffer data
        //disable the input
        //instead input put button
        setBuffer(data.buffer);
      }
      console.log({ newMessageRecieved, data });
      // setNewMessage([
      //   ...messages,
      //   { message: data.buffer, type: "pdf", ...newMessageRecieved },
      // ]);
    });
  });

  //   const typingHandler=(e)=>{
  //     console.log(e.target.value);
  //   }
  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }

    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };

  // useEffect(() => {
  //   // Hide the spinner after 5 seconds
  //   const timer = setTimeout(() => {
  //     setShowSpinner(false);
  //   }, 15000);

  //   return () => clearTimeout(timer);
  // }, [pdf]);

  return (
    <>
      {selectedChat ? (
        <>
          <Text
            fontSize={{ base: "28px", md: "30px" }}
            pb={3}
            px={2}
            w="100%"
            fontFamily="Work sans"
            d="flex"
            justifyContent={{ base: "space-between" }}
            alignItems="center"
          >
            <IconButton
              d={{ base: "flex", md: "none" }}
              icon={<AiOutlineArrowLeft />}
              onClick={() => setSelectedChat("")}
            />
            {messages &&
              (!selectedChat.isGroupChat ? (
                <>
                  {getSender(user, selectedChat.users)}
                  <ProfileModal
                    user={getSenderFull(user, selectedChat.users)}
                  />
                </>
              ) : (
                <>
                  {selectedChat.chatName.toUpperCase()}
                  <UpdateGroupChatModal
                    fetchMessages={fetchMessages}
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}
                  />
                </>
              ))}
          </Text>
          <Box
            d="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="80%"
            borderRadius="lg"
            //   overflowY="hidden"
            overflowY="scroll"
          >
            {loading ? (
              <Spinner
                size="xl"
                w={20}
                h={20}
                alignSelf="center"
                margin="auto"
              />
            ) : (
              <div className="messages">
                <ScrollableChat messages={messages} />
              </div>
            )}

            <FormControl
              onKeyDown={sendMessage}
              id="first-name"
              isRequired
              mt={3}
            >
              {istyping ? (
                <div>
                  <p>Typing</p>
                  <Lottie
                    options={defaultOptions}
                    height={20}
                    width={60}
                    style={{ marginBottom: 15, marginLeft: 0 }}
                  />
                </div>
              ) : (
                <></>
              )}
              {buffer.length > 0 ? (
                <iframe src={buffer} frameborder="0"></iframe>
              ) : (
                <Input
                  variant="filled"
                  bg="#E0E0E0"
                  //   style={{position:"sticky"}}
                  placeholder="Enter a message.."
                  value={newMessage}
                  onChange={typingHandler}
                ></Input>
              )}

              {showSpinner && (
                <Spinner
                  size="xl"
                  color="blue.500"
                  thickness="4px"
                  speed="0.65s"
                />
              )}
              {progress && <Progress size="xs" isIndeterminate />}
              <br />
              <input type="file" onChange={fileSelected} ref={fileRef} />
            </FormControl>
            {/* <div>
              <input
                type="file"
                placeholder="Chat room name"
                onChange={(e) => setPdf(e.target.value)}
              />
              <button onClick={handleSendPdf}>Send PDF</button>
              {pdf ? (
                <embed
                  src={`data:application/pdf;base64,${pdf.data}`}
                  type="application/pdf"
                />
              ) : (
                <p>No PDF received</p>
              )}
            </div> */}
          </Box>
        </>
      ) : (
        // to get socket.io on same page
        <Box d="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="2xl" pb={3} fontFamily="Work sans">
            Once the task has been selected, you will be able to commence
            communication
          </Text>
        </Box>
      )}
    </>
  );
};

export default SingleChat;
