import React from "react";
import { Row, Col, Button } from "antd";
import CardComp from "../../components/CardComp";
import { PlusCircleOutlined } from "@ant-design/icons";
import "./style.css";

const EventsPage = () => {
	return (
		<div className="white" justify="space-between" align="bottom">
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col>
					<h1>Events Page</h1>
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col>
					<CardComp description="Frosty the Snow Man" />
				</Col>
				<Col>
					<CardComp description="Feeling the Holiday Spirit" />
				</Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col>
					<Button
						type="primary"
						shape="round"
						icon={<PlusCircleOutlined />}
						size="large"
						style={{ backgroundColor: "#2c6e49", borderColor: "#2c6e49" }}
					>
						Create New Event
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default EventsPage;
