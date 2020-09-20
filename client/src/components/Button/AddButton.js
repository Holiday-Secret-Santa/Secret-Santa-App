import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import Button from "./Button";

const AddButton = ({ text, action }) => {
	return <Button text={text} action={action} icon={<PlusCircleOutlined />} />;
};

export default AddButton;
