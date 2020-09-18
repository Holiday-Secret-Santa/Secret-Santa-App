import React from "react";
import { Card, Space } from "antd";

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
			<span>Event Date: {date}</span>
			<span>Event Time:{startTime}</span>
			<span>Location: {location}</span>
			<span>Total Participants: {participants}</span>
		</Space>
	</Card>
);

export default detailCard;
