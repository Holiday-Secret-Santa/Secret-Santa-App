import React from "react";
import { Row, Col, Button, Space, Tooltip } from "antd";
import { SettingFilled, GiftFilled } from "@ant-design/icons";
import CardComp from "../../components/CardComp";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./style.css";

// Adding responsiveness
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

const EventsPage = () => {
	const sampleData = [
		{
			role: "organizer",
			description: "Frosty the Snow Man",
			date: "12/24/2020",
			startTime: "7:30pm",
			location: "https://virtualremoteparty.com",
			participants: "12 participants confirmed",
		},
		{
			role: "participant",
			description: "Feliz Navidad",
			date: "12/25/2020",
			startTime: "7:30pm",
			location: "https://virtualremoteparty.com",
			participants: "15 participants confirmed",
		},
		{
			role: "organizer",
			description: "Ugly Sweater Exchange Party",
			date: "12/10/2020",
			startTime: "7:30pm",
			location: "https://virtualremoteparty.com",
			participants: "12 participants confirmed",
		},
	];

	const partyList = sampleData.map((data, index) => (
		<ResponsiveColumn key={index}>
			<Space>
				<CardComp
					description={data.description}
					actions={[
						// Icon buttons for future use
						<span>
							<Tooltip
								title={
									data.role === "organizer"
										? "Manage Your Gift Exchange"
										: "Add Gifts for Secret Santa"
								}
							>
								{data.role === "organizer" ? (
									<SettingFilled
										style={{ fontSize: "24px", color: "#2c6e49" }}
									/>
								) : (
									<GiftFilled style={{ fontSize: "24px", color: "#2c6e49" }} />
								)}
							</Tooltip>
						</span>,
					]}
					date={data.date}
					startTime={data.startTime}
					location={data.location}
					participants={data.participants}
				/>
			</Space>
		</ResponsiveColumn>
	));

	return (
		<div>
			<Row style={{ padding: 15 }}>
				<ResponsiveColumn>
					<h1>Events Page</h1>
				</ResponsiveColumn>
			</Row>
			<Row style={{ padding: 15 }}>{partyList}</Row>
			<Row style={{ padding: 15 }}>
				<ResponsiveColumn>
					<Button
						type="primary"
						shape="round"
						icon={<PlusCircleOutlined />}
						size="large"
						style={{
							backgroundColor: "#2c6e49",
							borderColor: "#2c6e49",
						}}
					>
						Create New Event
					</Button>
				</ResponsiveColumn>
			</Row>
		</div>
	);
};

export default EventsPage;
