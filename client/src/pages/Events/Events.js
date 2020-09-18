import React from "react";
import { Row, Col, Container } from "antd";
import CardComp from "../../components/CardComp";
import "./style.css";

const EventsPage = () => {
	return (
		<div className="white">
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col xs={1}></Col>
				<Col xs={22}>
					<h1>Events Page</h1>
				</Col>
				<Col xs={1}></Col>
			</Row>
			<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
				<Col xs={1}></Col>
				<Col xs={11}>
					<CardComp description="Frosty the Snow Man" />
				</Col>
				<Col xs={11}>
					<CardComp description="Feeling the Holiday Spirit" />
				</Col>
				<Col xs={1}></Col>
			</Row>
		</div>
	);
};

export default EventsPage;
