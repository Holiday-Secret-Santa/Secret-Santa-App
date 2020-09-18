import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import "../../components/TableComp/TableComp";
import TableComp from "../../components/TableComp/TableComp";
import CardComp from "../../components/CardComp";

const ParticipantEvent = () => {
	return (
		<>
			<Row style={{ marginTop: "30px" }}>
				<Col span={2} offset={2}></Col>
				<Col span={4}>
					<CardComp />
				</Col>
				<Col span={12}>
					<TableComp />
				</Col>
				<Col span={4} offset={4}></Col>
			</Row>
			<Row>
				<Col span={2} offset={2}></Col>
				<Col span={16}>
					{" "}
					<TableComp />
				</Col>
				<Col span={4} offset={4}></Col>
			</Row>
		</>
	);
};

export default ParticipantEvent;
