import React from "react";
import { Descriptions } from "antd";

const DescriptionItem = (props) => {
	return (
		<div>
			<Descriptions title={props.title}>
				<Descriptions.Item label={props.label}>{props.data}</Descriptions.Item>
			</Descriptions>
		</div>
	);
};

export default DescriptionItem;
