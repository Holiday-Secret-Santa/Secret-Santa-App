import React from "react";
import { Table } from "antd";

const gifts = [];

for (let i = 0; i < 100; i++) {
	gifts.push({
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
	},
	{
		title: "Purchase Gift Here",
		dataIndex: "url",
		key: "url",
	},
];

const TableComp = () => {
	return (
		<Table
			dataSource={gifts}
			columns={columns}
			pagination={{ pageSize: 50 }}
			scroll={{ y: 240 }}
		/>
	);
};

export default TableComp;
