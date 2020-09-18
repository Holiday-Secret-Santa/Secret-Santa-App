import React from "react";
import { Card, Space } from "antd";

const FieldSpan = ({ label, data }) => {
	return (
		<span>
			<span style={{ fontWeight: "bold" }}>{label}: </span>
			{data}
		</span>
	);
};

const detailCard = ({
	id,
	title,
	date,
	startTime,
	location,
	participants,
	actions,
}) => (
	<Card title={title} actions={actions}>
		<Space direction="vertical">
			<FieldSpan label="Event Date" data={date} />
			<FieldSpan label="Event Time" data={startTime} />
			<FieldSpan label="Location" data={location} />
			<FieldSpan label="Total Participants" data={participants} />
		</Space>
	</Card>
);

export default detailCard;
