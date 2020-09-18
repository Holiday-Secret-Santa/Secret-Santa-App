import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import "../../components/TableComp/TableComp";
import TableComp from "../../components/TableComp/TableComp";
import CardComp from "../../components/CardComp";
import ButtonComp from "../../components/ButtonComp/ButtonComp";

const ParticipantEvent = () => {
	return (
		<>
			<Row style={{ marginTop: "30px" }}>
				<Col span={1} offset={2}></Col>
				<Col span={4}>
					<CardComp />
				</Col>
				<Col span={2} offset={2}></Col>
				<Col span={10}>
					<TableComp />
				</Col>
			</Row>
			<Row>
				<Col span={12} offset={2}>
					<ButtonComp />
				</Col>
			</Row>
		</>
	);
};

export default ParticipantEvent;
