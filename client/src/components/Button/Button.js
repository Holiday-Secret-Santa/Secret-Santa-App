import React from "react";
import { Button as AntdButton } from "antd";

const Button = ({ text, icon, action, disabled, bgColor }) => {
	return (
		<AntdButton
			type="primary"
			shape="round"
			icon={icon}
			size="large"
			style={{
				backgroundColor: bgColor ? bgColor : "#2c6e49",
				borderColor: "#2c6e49",
			}}
			onClick={action}
			disabled={disabled}
		>
			{text}
		</AntdButton>
	);
};

export default Button;
