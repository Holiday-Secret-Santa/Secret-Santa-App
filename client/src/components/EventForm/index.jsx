import React from "react";
import { Form, Input, Button } from "antd";
import DateTimeIinput from "./DateTimeInput/index";
import AddGuests from "./AddGuest/index";
import "antd/dist/antd.css";
import "./style.css";

const EventForm = () => {
  return (
    <Form className="newEventForm">
      <h1>Create New Event</h1>
      <Form.Item label="Your Event Title">
        <Input placeholder="Enter Title Here"></Input>
      </Form.Item>
      <DateTimeIinput className="dateTimeInput"/>
      <Form.Item label="Location">
        <Input placeholder="Enter address or virtual meeting link"></Input>
      </Form.Item>
      <AddGuests />
      <Form.Item className="submitBtn">
        <Button type="primary" htmlType="submit">
					Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
