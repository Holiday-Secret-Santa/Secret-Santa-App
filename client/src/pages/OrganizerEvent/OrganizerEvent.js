import React from "react";
import { Row, Col, Table, Divider } from "antd";
import { Bar } from "ant-design-pro/lib/Charts";
import "ant-design-pro/dist/ant-design-pro.css";
import DetailCard from "../../components/DetailCard/DetailCard";
import "./style.css";

const getParticipantsInfo = () => {
	return [];
};

const getColumns = () => {
	const columns = [
		{
			title: "Participant Guest",
			dataIndex: "participant",
			key: "participant",
			align: "center",
		},
		{
			title: "Guest Email",
			dataIndex: "guestEmail",
			key: "guestEmail",
			responsive: ["md"],
			align: "center",
		},
		{
			title: "Secret Santa",
			dataIndex: "secretSanta",
			key: "secretSanta",
			responsive: ["lg"],
			align: "center",
		},
		{
			title: "Secret Santa Email",
			dataIndex: "secretEmail",
			key: "secretEmail",
			responsive: ["lg"],
			align: "center",
		},
	];

	return columns;
};

const TableComp = ({ title, dataSource, columns }) => {
	return (
		<Table
			title={title}
			dataSource={dataSource}
			columns={columns}
			pagination={{ pageSize: 5 }}
			className="custom-table-style"
		/>
	);
};

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

const EventCard = () => {
	return (
		<DetailCard
			title="Event details"
			date="date"
			startTime="9:00am"
			location="park"
		/>
	);
};

const getRsvpData = () => {
	const dataRSVPs = [];
	dataRSVPs.push({ x: "Accepted", y: 45 });
	dataRSVPs.push({ x: "Rejected", y: 10 });
	dataRSVPs.push({ x: "Pending", y: 10 });
	return dataRSVPs;
};

const ChartTitle = () => {
	return (
		<h4
			style={{
				color: "#2c6e49",
				fontFamily: "cursive",
				textAlign: "center",
				fontWeight: "bold",
				fontSize: "30px",
			}}
		>
			Track RSVP
		</h4>
	);
};

const OrganizerEvent = () => {
	return (
		<>
			<Row gutter={[30, 30]} style={{ padding: 20 }}>
				<ResponsiveColumn lg={6}>
					<EventCard />
				</ResponsiveColumn>
				<ResponsiveColumn lg={18}>
					<Bar title={<ChartTitle />} data={getRsvpData()} color="#d62828" />
					<Divider />
					<TableComp
						dataSource={getParticipantsInfo()}
						columns={getColumns(true)}
					/>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default OrganizerEvent;
