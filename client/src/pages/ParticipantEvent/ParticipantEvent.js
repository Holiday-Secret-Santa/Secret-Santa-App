import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import "../../components/TableComp/TableComp";
import TableComp from "../../components/Table/TableComp";
import CardComp from "../../components/CardComp";
import ButtonComp from "../../components/ButtonComp/ButtonComp";

const dataSourceItemsArray = [];

// just for testing the table, must to adapt
for (let i = 0; i < 100; i++) {
	dataSourceItemsArray.push({
		key: i,
		item: `item ${i}`,
		price: 32,
		url: `http:"www.example.html"`,
	});
}

const columns = [
	{
		title: "Wish List Items",
		dataIndex: "item",
		key: "item",
		responsive: ["sm", "md"],
	},
	{
		title: "Price",
		dataIndex: "price",
		key: "price",
		responsive: ["sm", "md"],
	},
	{
		title: "Purchase Gift Here",
		dataIndex: "url",
		key: "url",
		responsive: ["sm", "md"],
	},
];

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
					<TableComp dataSource={dataSourceItemsArray} columns={columns} />
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
