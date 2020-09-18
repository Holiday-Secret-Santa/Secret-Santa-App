import React from "react";
import { Button } from "antd";
import TooltipComp from "../Tooltip/TooltipComp";

const ButtonComp = ({ action, icon, text }) => {
	return (
		<>
			<TooltipComp title="Add Item">
				<Button
					style={{ color: "green" }}
					type="primary"
					onClick={action}
					orientation="right"
					shape="round"
					icon={icon}
				>
					{text}
				</Button>
			</TooltipComp>
		</>
	);
};

export default ButtonComp;
