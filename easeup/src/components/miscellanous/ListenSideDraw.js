import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import React from "react";
import { useState } from "react";
import { BsSearch, BsBellFill } from "react-icons/bs";

import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router";
// import { accessChat } from '../../../../../backend/controllers/chatControllers';
import { ChatState } from "../../context/ChatProvider";
import UserListItem from "../UserAvatar/UserListItem";
import ChatLoading from "./ChatLoading";
import ProfileModal from "./ProfileModal";
import Navbar from "../Navbar/Navbar";

const ListenSideDraw = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const history = useNavigate();
  const { user, setSelectedChat, chats, setChats } = ChatState();
  const LogoutHandler = () => {
    localStorage.removeItem("userInfo");
    history("/");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "please Enter Something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
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
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const accessChatUser = async (userId) => {
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post("/api/chat", { userId }, config);
      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);

      setSelectedChat(data);
      setLoading(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat ",
        description: error.message,
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to Chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            {/* <BsSearch /> */}
            {/* <Text display={{ base: "none", md: "flex" }} px="4">
              Search Usersss
            </Text> */}
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work Sans">
          SOPIFY
        </Text>

        <div>
          <Menu>
            <MenuButton p={1}>
              <BsBellFill style={{marginRight:"9px"}} fontSize="2xl" m={1} />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton  as={Button} rightIcon={<FaChevronDown />}>
              <Avatar 
                size="sm"
                cursor="pointer"
                name={user.samename}
                // src={user.pic}
              />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={LogoutHandler}>Logout</MenuItem>
              {/* <MenuItem>
                <LinkContainer target="_blank" to="/videocall">
                  <Nav.Link target="_blank">
                    VideoCall/Audio Call (Press ctrl + button){" "}
                  </Nav.Link>
                </LinkContainer>
              </MenuItem> */}
            </MenuList>
          </Menu>
        </div>
      </Box>
      {/* <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>

          <DrawerBody>
            <Box display="flex" pb={2}>
              <Input
                placeholder="search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChatUser(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" display="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </>
  );
};

export default ListenSideDraw;
