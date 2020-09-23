import React from "react";
import { Form, DatePicker, TimePicker, Row } from "antd";
import "antd/dist/antd.css";
import "./style.css";

const DateTimeIinput = () => {
  const { RangePicker } = TimePicker;
  const dateFormat = "DD/MM/YYYY";
  const timeFormat = "h:mm a";

  return (
    <Row className="dateTimeRow">
      <Form.Item name="Date" label="Date" rules={[{required: true, message: "Please enter a date"}]}>
        <DatePicker format={dateFormat} />
      </Form.Item>
      <Form.Item name="Event Time" label="Time" rules={[{required: true, message: "Please enter a time"}]}>
        <RangePicker use12Hours format={timeFormat}/>
      </Form.Item>
    </Row>
  );
};

export default DateTimeIinput;