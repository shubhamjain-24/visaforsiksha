import { Box } from "@chakra-ui/layout";
import "../sttyles.css";
import SingleChat from "./SingleChat";
import { ChatState, Input } from "../../context/ChatProvider";
import React from "react";
import './ChatBox.css'

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <>

    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      height={"100%"}
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
      </>
  );
};

export default Chatbox;
