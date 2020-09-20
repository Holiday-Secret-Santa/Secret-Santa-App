import React from "react";
import { Row, Button, Tooltip } from "antd";
import { GiftTwoTone, DeleteTwoTone } from "@ant-design/icons";
import DetailCard from "../../components/DetailCard/DetailCard";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import TableComp from "./../../components/Table";
import "./style.css";

const getDummyItems = (size) => {
	var itemsArray = [];

	for (let i = 0; i < size; i++) {
		itemsArray.push({
			key: i,
			item: `item ${i}`,
			price: 32,
			url: `http:"www.example.html"`,
		});
	}
	return itemsArray;
};

const getMySecretSantaItems = () => {
	return getDummyItems(8);
};

const getMyItems = () => {
	return getDummyItems(3);
};

const customColor = "#D62828";

const getColumns = (showDeleteAction) => {
	const columns = [
		{
			title: "Wish List Items",
			dataIndex: "item",
			key: "item",
			align: "center",
		},
		{
			title: "Price",
			dataIndex: "price",
			key: "price",
			responsive: ["md"],
			align: "center",
		},
		{
			title: "Purchase Gift Here",
			dataIndex: "url",
			key: "url",
			responsive: ["lg"],
			align: "center",
		},
	];

	if (showDeleteAction)
		columns.push({
			title: "",
			dataIndex: "",
			key: "action",
			render: (record) => (
				<Tooltip title="Delete Gift Item">
					<Button
						type="text"
						onClick={() => alert(record.item)}
						icon={
							<DeleteTwoTone
								twoToneColor={customColor}
								style={{ fontSize: 24 }}
							/>
						}
					/>
				</Tooltip>
			),
		});

	return columns;
};

const MyGiftListAddButton = () => {
	return (
		<Row justify="end">
			<Tooltip title="Add Gift Item">
				<Button
					shape="circle"
					size="large"
					type="text"
					icon={
						<GiftTwoTone twoToneColor={customColor} style={{ fontSize: 48 }} />
					}
					style={{ width: 80, height: 80 }}
				></Button>
			</Tooltip>
		</Row>
	);
};

const EventCard = () => {
	return (
		<DetailCard
			title="Event Details"
			date="date"
			startTime="9:00 am"
			location={"My House"}
			participants={12}
		/>
	);
};

const ParticipantEvent = () => {
	return (
		<>
			<Row gutter={[30, 30]} style={{ padding: 20 }}>
				<ResponsiveColumn lg={6}>
					<EventCard />
				</ResponsiveColumn>
				<ResponsiveColumn lg={18}>
					<TableComp
						title={() => "You are the Secret Santa for ... "}
						dataSource={getMySecretSantaItems()}
						columns={getColumns(false)}
					/>
					<MyGiftListAddButton />
					<TableComp
						title={() => "Create Your Gift List for Your Secret Santa!"}
						dataSource={getMyItems()}
						columns={getColumns(true)}
					/>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default ParticipantEvent;
