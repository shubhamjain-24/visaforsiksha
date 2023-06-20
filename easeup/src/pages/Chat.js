import React from "react";
import axios from "axios";
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/miscellanous/SideDrawer";
import MyChats from "../components/miscellanous/MyChats";
import ChatBox from "../components/miscellanous/ChatBox";
import "../styles/Chat.css";

const Chat = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = React.useState(false);

  // const fetchChats=async()=>{
  //   const {data}=await axios.get('api/chat')
  //   console.log(data);
  // }

  // React.useEffect(()=>{
  //   fetchChats();
  // },[])

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <div className="chat_mainDiv">
        <Box
          display="flex"
          justifyContent="space-between"
          w="100%"
          h="91.5vh"
          p="10px"
        >
          <div className="chat_subDiv">
            {user && <MyChats fetchAgain={fetchAgain} />}

            {user && (
              <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
            )}
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Chat;
