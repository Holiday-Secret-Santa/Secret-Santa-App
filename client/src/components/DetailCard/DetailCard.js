import React from "react";
import { Card } from "antd";

const detailCard = ({
	id,
	description,
	date,
	startTime,
	location,
	participants,
	actions,
}) => (
	<Card title={description} actions={actions} style={{ width: 300 }}>
		<p>Event Date: {date}</p>
		<p>Event Time:{startTime}</p>
		<p>Location: {location}</p>
		<p>Total Participants: {participants}</p>
	</Card>
);

export default detailCard;
