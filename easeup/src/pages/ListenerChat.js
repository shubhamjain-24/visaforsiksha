import React from "react";
import axios from "axios";
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbarlogout";
import "../styles/Chat.css";
// import SideDrawer from "../components/miscellanous/SideDrawer";
import MyChats from "../components/miscellanous/MyChats";
import ChatBox from "../components/miscellanous/ChatBox";
import ListenSideDraw from "../components/miscellanous/ListenSideDraw";
import MyChatClient from "../components/miscellanous/MyChatClient";

const ListenerChat = () => {
  const { user } = ChatState();

  return (
    <>
      <Navbar />
      <div style={{ width: "100%" }}>
        {user && <ListenSideDraw />}
        <div className="chat_mainDiv">
          <Box
            display="flex"
            justifyContent="space-between"
            w="100%"
            h="91.5vh"
            p="10px"
          >
            <div className="chat_subDiv">
              {user && <MyChatClient />}
              {user && <ChatBox />}
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ListenerChat;
