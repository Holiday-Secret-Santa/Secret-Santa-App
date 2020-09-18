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

//
const EventsPage = () => {
	return (
		<div>
			{/* Header */}
			<Row style={{ padding: 15 }}>
				<ResponsiveColumn>
					<h1>Events Page</h1>
				</ResponsiveColumn>
			</Row>
			{/* Cards */}
			<Row style={{ padding: 15 }}>
				<CardComp
					description={"Ugly Sweather Exchange"}
					date={"12/25/2020"}
					startTime={"7:30pm"}
					location={"https://myvirtuallink.com"}
					participants={"10 accepted attendees"}
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
				/>
				<CardComp
					description={"Frosty the Snow Man"}
					date={"12/10/2020"}
					startTime={"7:30pm"}
					location={"https://myvirtuallink.com"}
					participants={"15 accepted attendees"}
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
				/>
				<CardComp
					description={"Feliz Navidad"}
					date={"12/24/2020"}
					startTime={"7:30pm"}
					location={"https://myvirtuallink.com"}
					participants={"12 accepted attendees"}
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
				/>
			</Row>

			{/* Button */}
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
