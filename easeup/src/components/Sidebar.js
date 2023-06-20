import React from "react";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  const rooms = ["first room", "second room", "third room"];
  return (
    <>
      <h3>Available Rooms</h3>
      <ListGroup>
        <ListGroup.Item>first room</ListGroup.Item>
        <ListGroup.Item>second room</ListGroup.Item>

        <ListGroup.Item>third room</ListGroup.Item>

        {/* {rooms.map((room,idx)=>{
        <ListGroup.Item >{idx}{console.log(room)}{room}</ListGroup.Item>
    })} */}
      </ListGroup>
      <h3>Members</h3>
    </>
  );
};

export default Sidebar;
