import React from "react";
import { Row, Col, Button } from "antd";
import CardComp from "../../components/CardComp";
import { PlusCircleOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";
import "./style.css";

const EventsPage = () => {
	return (
		<div className="white">
			<Row>
				<Col>
					<h1>Events Page</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<CardComp description="Frosty the Snow Man" />
				</Col>
				<Col>
					<CardComp description="Feeling the Holiday Spirit" />
				</Col>
			</Row>
			<Row>
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
