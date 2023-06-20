import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { Route, Router, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);

  <BrowserRouter>
    {useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);
      if (!userInfo) {
        <Router>
          <Route path="/" element={<Home />} />
        </Router>;
      }
    }, [])}
  </BrowserRouter>;

  return (
    <ChatContext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
