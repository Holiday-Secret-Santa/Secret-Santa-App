import React from "react";
import { Card, Tooltip } from "antd";
import { SettingFilled, GiftFilled } from "@ant-design/icons";
import "./style.css";

// placeholder parameters for API data
const exchangeCard = ({
	id,
	description,
	date,
	startTime,
	location,
	participants,
}) => (
	// Basic Ant card components (will update design during development)
	<Card
		title={description}
		actions={[
			// Icon buttons for future use
			<span>
				<Tooltip title="Manage Your Gift Exchange">
					<SettingFilled style={{ fontSize: "24px", color: "#2c6e49" }} />
				</Tooltip>
			</span>,
			<span>
				<Tooltip title="Add Gifts for Secret Santa">
					<GiftFilled style={{ fontSize: "24px", color: "#2c6e49" }} />
				</Tooltip>
			</span>,
		]}
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
