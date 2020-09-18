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
	return (
		<div>
			<Row style={{ padding: 15 }}>
				<ResponsiveColumn>
					<h1>Events Page</h1>
				</ResponsiveColumn>
			</Row>
			<Row style={{ padding: 15 }}>
				<ResponsiveColumn>
					<Space>
						<CardComp
							description="Charlie Brown Christmas"
							actions={[
								// Icon buttons for future use
								<span>
									<Tooltip title="Manage Your Gift Exchange">
										<SettingFilled
											style={{ fontSize: "24px", color: "#2c6e49" }}
										/>
									</Tooltip>
								</span>,
								<span>
									<Tooltip title="Add Gifts for Secret Santa">
										<GiftFilled
											style={{ fontSize: "24px", color: "#2c6e49" }}
										/>
									</Tooltip>
								</span>,
							]}
							date={"December 25, 2020"}
							startTime={"7:30pm"}
							location={"https://testvideolink.com"}
							participants={10}
						/>
					</Space>
				</ResponsiveColumn>
				<ResponsiveColumn>
					<Space>
						<CardComp
							description="Ugly Sweater Party"
							actions={[
								// Icon buttons for future use
								<span>
									<Tooltip title="Manage Your Gift Exchange">
										<SettingFilled
											style={{ fontSize: "24px", color: "#2c6e49" }}
										/>
									</Tooltip>
								</span>,
								<span>
									<Tooltip title="Add Gifts for Secret Santa">
										<GiftFilled
											style={{ fontSize: "24px", color: "#2c6e49" }}
										/>
									</Tooltip>
								</span>,
							]}
							date={"December 25, 2020"}
							startTime={"7:30pm"}
							location={"https://testvideolink.com"}
							participants={10}
						/>
					</Space>
				</ResponsiveColumn>
				<ResponsiveColumn>
					<Space>
						<CardComp
							description="Epic Gift and Cookie Exchange"
							actions={[
								// Icon buttons for future use
								<span>
									<Tooltip title="Manage Your Gift Exchange">
										<SettingFilled
											style={{ fontSize: "24px", color: "#2c6e49" }}
										/>
									</Tooltip>
								</span>,
								<span>
									<Tooltip title="Add Gifts for Secret Santa">
										<GiftFilled
											style={{ fontSize: "24px", color: "#2c6e49" }}
										/>
									</Tooltip>
								</span>,
							]}
							date={"December 25, 2020"}
							startTime={"7:30pm"}
							location={"https://testvideolink.com"}
							participants={10}
						/>
					</Space>
				</ResponsiveColumn>
			</Row>
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
