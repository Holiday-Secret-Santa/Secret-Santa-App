import React, { useState } from "react";
import { Row, Col, Space } from "antd";
import { GiftTwoTone } from "@ant-design/icons";
import TableComp from "../../components/Table/TableComp";
import DetailCard from "../../components/DetailCard/DetailCard";
import ButtonComp from "../../components/Button/ButtonComp";
import "./style.css";

const dataSourceItemsArray = [];

for (let i = 0; i < 15; i++) {
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
	},
	{
		title: "Price",
		dataIndex: "price",
		key: "price",
		responsive: ["md"],
	},
	{
		title: "Purchase Gift Here",
		dataIndex: "url",
		key: "url",
		responsive: ["lg"],
	},
	{
		title: "Action",
		dataIndex: "",
		key: "action",
		render: (text, record) => (
			<>
				<a onClick={() => alert(record.item)}>Delete</a>
			</>
		),
	},
];

const ResponsiveColumn = ({ children, lg, offset, span, flex, style }) => {
	return (
		<Col
			xs={24}
			sm={24}
			md={24}
			lg={lg}
			offset={offset}
			span={span}
			flex={flex}
			style={style}
		>
			{children}
		</Col>
	);
};

const ParticipantEvent = () => {
	const [container, setContainer] = useState(null);
	return (
		<>
			<Row gutter={[30, 30]} style={{ padding: 20 }}>
				<ResponsiveColumn span={24} style={{ justify: "flex-end" }}>
					<Row justify="end">
						<ButtonComp shape="circle" icon={<GiftTwoTone />} />
					</Row>
				</ResponsiveColumn>
				<ResponsiveColumn lg={6}>
					<DetailCard title="Event Details" date="date" startTime="9:00 am" />
				</ResponsiveColumn>
				<ResponsiveColumn lg={18}>
					<TableComp dataSource={dataSourceItemsArray} columns={columns} />
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default ParticipantEvent;
