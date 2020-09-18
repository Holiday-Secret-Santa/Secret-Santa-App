import React from "react";
import { Table, Tooltip } from "antd";

const gifts = [];

// just for testing the table, must to adapt
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
		responsive: ["sm", "md"],

		render: (item) => (
			<Tooltip placement="topRight" title={item}>
				{item}
			</Tooltip>
		),
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
