import React from "react";
import { Button } from "antd";

const ButtonComp = ({
	action,
	icon,
	text,
	style,
	type,
	orientation,
	shape,
}) => {
	return (
		<>
			<Button
				style={style}
				type={type}
				onClick={action}
				orientation={orientation}
				shape={shape}
				icon={icon}
			>
				{text}
			</Button>
		</>
	);
};

export default ButtonComp;
