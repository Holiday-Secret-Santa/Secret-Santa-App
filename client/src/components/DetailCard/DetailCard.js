import React from "react";
import { Card, Space } from "antd";

const FieldSpan = ({ label, data }) => {
	return (
		<span>
			<span style={{ fontWeight: "bold" }}>{label}: </span>
			{data}
		</span>
	);
};

const formatDate = (date) => {
	let options = {
		weekday: "long",
		year: "numeric",
		month: "numeric",
		day: "numeric",
	};
	let d = new Date(parseInt(date));
	return d.toLocaleDateString(d, options);
};

const formatTime = (time) => {
	let options = { hour12: true, hour: "2-digit", minute: "2-digit" };
	let t = new Date(time);
	return t.toLocaleTimeString(t, options);
};

const DetailCard = ({
	id,
	title,
	date,
	startTime,
	location,
	participants,
	actions,
}) => (
	<Card title={title} actions={actions}>
		<Space direction="vertical">
			<FieldSpan label="Event Date" data={formatDate(date)} />
			<FieldSpan label="Event Time" data={formatTime(startTime)} />
			<FieldSpan label="Location" data={location} />
			{participants && (
				<FieldSpan label="Total Participants" data={participants} />
			)}
		</Space>
	</Card>
);

export default DetailCard;
