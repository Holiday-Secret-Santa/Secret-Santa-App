import React from "react";
import { Row, Col, Button, Tooltip } from "antd";
import { GiftTwoTone, DeleteTwoTone } from "@ant-design/icons";
import TableComp from "../../components/Table/TableComp";
import DetailCard from "../../components/DetailCard/DetailCard";
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
		title: "",
		dataIndex: "",
		key: "action",
		render: (text, record) => (
			<Button action={() => alert(record.item)} icon={<DeleteTwoTone />} />
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
	return (
		<>
			<Row gutter={[30, 30]} style={{ padding: 20 }}>
				<ResponsiveColumn span={24} style={{ justify: "flex-end" }}>
					<Row justify="end">
						<Tooltip title="Add Gift Item">
							<Button
								shape="circle"
								size="large"
								type="text"
								icon={<GiftTwoTone style={{ fontSize: 48 }} />}
								style={{ width: 80, height: 80 }}
							></Button>
						</Tooltip>
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
