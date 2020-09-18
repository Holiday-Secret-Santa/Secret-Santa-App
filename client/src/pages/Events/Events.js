import React from "react";
import { Row, Col } from "antd";
import CardComp from "../../components/CardComp";
import "./style.css";

const EventsPage = () => {
	return (
		<div>
			<Row>
				<h1>Events Page</h1>
			</Row>
			<Row>
				<Col span={12}>
					<CardComp />
				</Col>
				<Col span={12}>
					<CardComp />
				</Col>
			</Row>
		</div>
	);
};

export default EventsPage;
