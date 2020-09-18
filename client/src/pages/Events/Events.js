import React from "react";
import { Row, Col, Button, Space, Tooltip } from "antd";
import { SettingFilled, GiftFilled } from "@ant-design/icons";
import CardComp from "../../components/CardComp";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./style.css";

const EventsPage = () => {
	return (
		<div>
			<Row>
				<Col xs={2} xl={1}></Col>
				<Col xs={20} xl={22}>
					<h1>Events Page</h1>
				</Col>
				<Col xs={2} xl={1}></Col>
			</Row>
			<Row>
				<Col xs={2} xl={1}></Col>
				<Col xs={20} xl={5}>
					<Space className="space-top">
						<CardComp
							description="Frosty the Snow Man"
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
						/>
					</Space>
				</Col>
				<Col xs={20} xl={5}>
					<Space className="space-top">
						<CardComp
							description="Simpson Christmas"
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
						/>
					</Space>
				</Col>
				<Col xs={20} xl={5}>
					<Space className="space-top">
						<CardComp
							description="Rocking Around the Christmas Tree"
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
						/>
					</Space>
				</Col>
				<Col xs={20} xl={5}>
					<Space className="space-top">
						<CardComp
							description="Frozen"
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
						/>
					</Space>
				</Col>
				<Col xs={2} xl={1}></Col>
			</Row>
			<Row className="space-top">
				<Col xs={2} xl={2}></Col>
				<Col xs={20} xl={20}>
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
				</Col>
				<Col xs={2} xl={2}></Col>
			</Row>
		</div>
	);
};

export default EventsPage;
