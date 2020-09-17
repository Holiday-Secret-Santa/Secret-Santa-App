import React from "react";
import { Form, Input, Button } from "antd";
import DateTimeIinput from "./DateTimeInput";
import AddGuests from "./AddGuests";
import "antd/dist/antd.css";

const EventForm = () => {
  return (
    <Form>
      <h1>Create New Event</h1>
      <Form.Item label="Your Event Title">
        <Input placeholder="Enter Title Here"></Input>
      </Form.Item>
      <DateTimeIinput />
      <Form.Item label="Location">
        <Input placeholder="Enter address or virtual meeting link"></Input>
      </Form.Item>
      <AddGuests />
      <Form.Item>
        <Button type="primary" htmlType="submit">
					Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EventForm;
