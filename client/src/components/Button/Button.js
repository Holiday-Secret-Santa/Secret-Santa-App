import React from "react";
import { Button as AntdButton } from "antd";

const Button = ({ text, icon, action }) => {
	return (
		<AntdButton
			type="primary"
			shape="round"
			icon={icon}
			size="large"
			style={{
				backgroundColor: "#2c6e49",
				borderColor: "#2c6e49",
			}}
			onClick={action}
		>
			{text}
		</AntdButton>
	);
};

export default Button;
