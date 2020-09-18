import React from "react";
import { FolderAddTwoTone } from "@ant-design/icons";
import { Button } from "antd";
import TooltipComp from "../Tooltip/TooltipComp";

const ButtonComp = ({ action }) => {
	return (
		<>
			<TooltipComp title="Add Item">
				<Button
					style={{ color: "green" }}
					type="primary"
					onClick={action}
					orientation="right"
					shape="round"
					icon={<FolderAddTwoTone twoToneColor="#52c41a" width="3em" />}
				>
					Add Item
				</Button>
			</TooltipComp>
		</>
	);
};

export default ButtonComp;
