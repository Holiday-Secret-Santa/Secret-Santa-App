import React from "react";
import { Tooltip } from "antd";

const TooltipComp = ({ placement, title, children }) => {
	return (
		<Tooltip placement={placement} title={title}>
			{children}
		</Tooltip>
	);
};

export default TooltipComp;
