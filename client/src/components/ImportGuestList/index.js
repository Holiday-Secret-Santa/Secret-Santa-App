import React from "react";
import { Button, Upload, Card } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./style.css";

const ImportGuestList = () => {
  return (
    <Card title="Import Guest List" className="add-guest-card">
      <Upload>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </Card>
  );
};

export default ImportGuestList;
