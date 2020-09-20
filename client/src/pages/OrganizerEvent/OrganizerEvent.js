import React from "react";
import { Row, Divider } from "antd";
import { Bar } from "ant-design-pro/lib/Charts";
import DetailCard from "./../../components/DetailCard/DetailCard";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import TableComp from "./../../components/Table";
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
		<span
			style={{
				color: "#2c6e49",
				fontFamily: "cursive",
				textAlign: "center",
				fontWeight: "bold",
				fontSize: "30px",
			}}
		>
			Track RSVP
		</span>
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
					<Bar
						height="300"
						title={<ChartTitle />}
						data={getRsvpData()}
						color="#d62828"
					/>
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
