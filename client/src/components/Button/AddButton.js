import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import Button from "./Button";

const AddButton = ({ text, action, htmlType }) => {
  return <Button text={text} action={action} htmlType={htmlType} icon={<PlusCircleOutlined />} />;
};

export default AddButton;
