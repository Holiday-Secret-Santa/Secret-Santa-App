import React from "react";
import { Button, message, Tooltip } from "antd";
const key = "updatable";

const openMessage = () => {
	message.loading({ content: "Loading...", key });
	setTimeout(() => {
		message.success({ content: "Add your item", key, duration: 2 });
	}, 1000);
};

const ButtonComp = () => {
	return (
		<Tooltip title="Add Item">
			<Button
				type="primary"
				onClick={openMessage}
				orientation="right"
				shape="round"
			>
				Add Item
			</Button>
		</Tooltip>
	);
};

export default ButtonComp;
