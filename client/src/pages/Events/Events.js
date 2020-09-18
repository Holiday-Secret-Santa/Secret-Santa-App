import React from "react";
import { Row, Col, Button, Layout, Space } from "antd";
import CardComp from "../../components/CardComp";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./style.css";

const { Content } = Layout;

const EventsPage = () => {
	return (
		<div>
			<Content className="white">
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col className="gutter-row">
						<h1>Events Page</h1>
					</Col>
				</Row>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
					<Col className="gutter-row">
						<Space className="space-top">
							<CardComp description="Frosty the Snow Man" />
						</Space>
					</Col>
					<Col className="gutter-row">
						<Space className="space-top">
							<CardComp description="Feeling the Holiday Spirit" />
						</Space>
					</Col>
				</Row>
				<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="space-top">
					<Col className="gutter-row">
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
				</Row>
			</Content>
		</div>
	);
};

export default EventsPage;
