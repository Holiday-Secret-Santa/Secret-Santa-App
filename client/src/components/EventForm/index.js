import React from "react";
import { Form, Input, Button } from "antd";
import DateTimeIinput from "../DateTimeInput/index";
import AddGuests from "../AddGuest/index";
import "antd/dist/antd.css";
import "./style.css";

const EventForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      name="newEventForm"
      className="newEventForm"
    >
      <h1>Create New Event</h1>
      <Form.Item
        name="Event Title"
        label="Your Event Title"
        rules={[{ required: true }]}
      >
        <Input placeholder="Enter Title Here"></Input>
      </Form.Item>
      <DateTimeIinput className="dateTimeInput" />
      <Form.Item 
        name="Location" 
        label="Location" 
        rules={[{ required: true }]}>
          
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
