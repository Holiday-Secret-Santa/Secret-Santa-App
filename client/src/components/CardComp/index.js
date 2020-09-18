import React from "react";
import { Card, Col, Space } from "antd";
import "./style.css";

// Responsiveness column
const ResponsiveColumn = ({ children, lg, offset, span, flex, style }) => {
	return (
		<Col
			xs={24}
			sm={24}
			md={8}
			lg={8}
			offset={offset}
			span={span}
			flex={flex}
			style={style}
		>
			{children}
		</Col>
	);
};

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
	<ResponsiveColumn>
		<Space>
			<Card
			title={description}
			actions={actions}
			style={{ width: "100%", fontSize: "18px" }}
			headStyle={{
				backgroundColor: "#d62828",
				color: "#ffffff",
				fontSize: "20px",
			}}
		>
			<p>Event Date: {date}</p>
			<p>Event Time:{startTime}</p>
			<p>Location: {location}</p>
			<p>Total Participants: {participants}</p>
		</Card>
		</Space>
		
	</ResponsiveColumn>
);

// Exporting component
export default exchangeCard;
