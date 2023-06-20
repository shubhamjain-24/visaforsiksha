import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "../styles/messageForm.css";
import { AiOutlineSend } from "react-icons/ai";

const MessageForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  
  return (
    <>
      <div className="message_output">MessageForm</div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your Message"
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", backgroundColor: "orange" }}
            >
              <AiOutlineSend />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MessageForm;
