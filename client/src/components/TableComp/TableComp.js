import React from "react";
import { Table } from "antd";

const gifts = [
	{
		key: "1",
		item: "babysister",
		price: 800,
		url: "https://www.sittercity.com/?utm_medium=cpc&utm_source=google&utm_",
	},
	{
		key: "2",
		item: "vacation",
		price: 2000,
		url:
			"https://www.tripadvisor.com/Tourism-g150807-Cancun_Yucatan_Peninsula-Vacations.html",
	},
	{
		key: "3",
		item: "babysister",
		price: 800,
		url: "https://www.sittercity.com/?utm_medium=cpc&utm_source=google&utm_",
	},
	{
		key: "4",
		item: "babysister",
		price: 800,
		url: "https://www.sittercity.com/?utm_medium=cpc&utm_source=google&utm_",
	},
	{
		key: "5",
		item: "babysister",
		price: 800,
		url: "https://www.sittercity.com/?utm_medium=cpc&utm_source=google&utm_",
	},
];

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
	return <Table dataSource={gifts} columns={columns} />;
};

export default TableComp;
