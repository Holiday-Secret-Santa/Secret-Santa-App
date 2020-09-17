import React from "react";
import { Card, Avatar, Tooltip } from "antd";
import { EyeFilled, SaveFilled, DeleteFilled } from "@ant-design/icons";

const { Meta } = Card;

const exchangeCard = ({
	id,
	description,
	date,
	startTime,
	location,
	participants,
}) => (
	<Card title={description} extra={<a href="#">More</a>} style={{ width: 300 }}>
		<p>Event Date: {date}</p>
		<p>Event Time:{startTime}</p>
		<p>Location: {location}</p>
		<p>Total Participants: {participants}</p>
	</Card>
);

export default exchangeCard;
