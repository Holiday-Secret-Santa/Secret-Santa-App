import React from "react";
import { Card, Tooltip } from "antd";
import { SettingFilled, GiftOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";
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
					<SettingFilled />
				</Tooltip>
			</span>,
			<span>
				<Tooltip title="Add Gifts for Secret Santa">
					<GiftOutlined />
				</Tooltip>
			</span>,
		]}
		style={{ width: 400 }}
		headStyle={{ backgroundColor: "#d62828", fontStyle: "#ffffff" }}
	>
		<p>Event Date: {date}</p>
		<p>Event Time:{startTime}</p>
		<p>Location: {location}</p>
		<p>Total Participants: {participants}</p>
	</Card>
);

// Exporting component
export default exchangeCard;
