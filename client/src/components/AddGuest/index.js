import React from "react";
import { Form, Input, Button, Upload, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./style.css";

const AddGuests = () => {
  return (
    <Card title="Import Guest List" style={{ width: 300, margin: "auto" }}>
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <p className="add-guest-text">Or add guest email</p>
      <Form.Item>
        <Input type="text" placeholder="Guest Email"></Input>
        <Button type="primary">Add Guest</Button>
      </Form.Item>
    </Card>
  );
};

export default AddGuests;
