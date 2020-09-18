import React from "react";
import { Card } from "antd";

import "./style.css";

// placeholder parameters for API data
const exchangeCard = ({
	id,
	description,
	date,
	startTime,
	location,
	participants,
	actions,
}) => (
	// Basic Ant card components (will update design during development)
	<Card
		title={description}
		actions={actions}
		style={{ width: 400 }}
		headStyle={{ backgroundColor: "#d62828", color: "#ffffff" }}
	>
		<p>Event Date: {date}</p>
		<p>Event Time:{startTime}</p>
		<p>Location: {location}</p>
		<p>Total Participants: {participants}</p>
	</Card>
);

// Exporting component
export default exchangeCard;
