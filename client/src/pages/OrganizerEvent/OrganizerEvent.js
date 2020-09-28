import React, { useEffect, useState } from "react";
import { Row, Divider, notification } from "antd";
import { Bar } from "ant-design-pro/lib/Charts";
import DetailCard from "./../../components/DetailCard/DetailCard";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import TableComp from "./../../components/Table";
import Button from "../../components/Button/Button";
import "./style.css";
import { TeamOutlined } from "@ant-design/icons";
import ModalPopUp from "../../components/ModalPopUp/ModalPopUp";
import { useAuth0 } from "@auth0/auth0-react";
import {
	createParticipantLogic,
	getParticipantsbyEventId,
	getEventByEventId,
} from "../../actions/graphql.api";

// Notification for when participant is entered successfully
const showSuccess = () => {
	notification.success({
		message: "Participant Added",
		description: "Participant successfully added.",
	});
};

// Notification for when participant is not created
const showError = ({ error }) => {
	notification.error({
		message: "Error",
		description: "We couldn't add your participant due to error: " + error,
	});
};

const getParticipantsInfo = () => {
	return [];
};

const getColumns = () => {
	const columns = [
		{
			title: "#",
			dataIndex: "key",
			key: "key",
			align: "center",
		},
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

const EventCard = (props) => {
	return (
		<DetailCard
			title={props.description}
			date={props.date}
			startTime={props.start_time}
			location={props.location}
			actions={[
				<span>
					<Button
						icon={<TeamOutlined style={{ fontSize: "18px" }} />}
						text={" Make Assignments"}
					/>
				</span>,
			]}
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

const setParticipantData = (d, setData) => {
	var formattedData = [];
	d.getParticipantsByEventId.forEach((participant, index) => {
		var participantEntry = {
			key: index + 1,
			participant: `${participant.first_name} ${participant.last_name}`,
			guestEmail: participant.email,
			secretSanta: "",
			secretEmail: "",
		};
		formattedData.push(participantEntry);
	});
	setData(formattedData);
};

const OrganizerEvent = (props) => {
	const { getAccessTokenSilently } = useAuth0();
	const [data, setData] = useState([]);
	const [eventData, setEventData] = useState({});

	// Rendering participant info
	useEffect(() => {
		getParticipantsbyEventId(
			parseInt(props.match.params.id),
			getAccessTokenSilently(),
			(d) => setParticipantData(d, setData),
			showError
		);
	}, [getAccessTokenSilently]);

	// Rendering event info
	useEffect(() => {
		getEventByEventId(
			parseInt(props.match.params.id),
			getAccessTokenSilently(),
			(d) => setEventData(d.getEvent),
			showError
		);
	}, [getAccessTokenSilently]);

	// Function to create participant
	// Keeping function on this page because relies on props id to link to Event
	const createParticipant = async (first_name, last_name, email) => {
		// Creating input variable
		createParticipantLogic(
			first_name,
			last_name,
			email,
			getAccessTokenSilently,
			props.match.params.id,
			showSuccess,
			showError
		);
	};

	return (
		<>
			<Row gutter={[30, 30]} style={{ padding: 20 }}>
				<ResponsiveColumn lg={6}>
					<EventCard
						description={eventData.description}
						date={eventData.date}
						start_time={eventData.start_time}
						location={eventData.location}
					/>
				</ResponsiveColumn>
				<ResponsiveColumn lg={18}>
					<Bar
						height="300"
						title={<ChartTitle />}
						data={getRsvpData()}
						color="#d62828"
					/>
					<Divider />
					<TableComp dataSource={data} columns={getColumns(true)} />
					<Divider />
					<div className="center">
						<ModalPopUp handleLogic={createParticipant} />
					</div>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export {
	showSuccess,
	showError,
	getParticipantsInfo,
	getColumns,
	EventCard,
	getRsvpData,
	ChartTitle,
	createParticipantLogic,
	setParticipantData,
};
export default OrganizerEvent;
