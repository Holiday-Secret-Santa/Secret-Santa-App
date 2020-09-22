import React from "react";
import { Form, DatePicker, TimePicker, Row } from "antd";
import "antd/dist/antd.css";
import "./style.css";

const DateTimeIinput = () => {
  const { RangePicker } = TimePicker;
  const dateFormat = "DD/MM/YYYY";

  return (
    <Row className="dateTimeRow">
      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Time">
        <RangePicker />
      </Form.Item>
    </Row>
  );
};

export default DateTimeIinput;