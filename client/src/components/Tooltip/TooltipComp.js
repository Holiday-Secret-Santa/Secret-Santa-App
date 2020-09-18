import React from "react";
import { Tooltip } from "antd";

const TooltipComp = ({ placement, title, item }) => {
	return (
		<Tooltip placement={placement} title={title}>
			{item}
		</Tooltip>
	);
};

export default TooltipComp;
