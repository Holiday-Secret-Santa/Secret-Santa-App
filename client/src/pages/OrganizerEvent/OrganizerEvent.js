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
	createParticipant,
	getParticipantsbyEventId,
	getEventByEventId,
	autoAssignSecretSanta,
} from "../../actions/graphql.api";

// Notification for when participant is entered successfully
const showSuccess = () => {
	notification.success({
		message: "Participant Added",
		description: "Participant successfully added.",
	});
};

// Notification for when participant is not created
const showError = (error) => {
	notification.error({
		message: "Error",
		description: "We couldn't add your participant due to error: " + error,
	});
};

const showAssignmentError = (error) => {
	notification.error({
		message: "Error",
		description: "We couldn't assign secret santas due to error: " + error,
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

const EventCard = ({ description, date, start_time, location, action }) => {
	return (
		<DetailCard
			title={description}
			date={date}
			startTime={start_time}
			location={location}
			actions={[
				<span>
					<Button
						icon={<TeamOutlined style={{ fontSize: "18px" }} />}
						text={" Make Assignments"}
						action={action}
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
			secretSanta: participant.SecretSanta
				? `${participant.SecretSanta.first_name} ${participant.SecretSanta.last_name}`
				: "",
			secretEmail: participant.SecretSanta ? participant.SecretSanta.email : "",
		};
		formattedData.push(participantEntry);
	});
	setData(formattedData);
};

const OrganizerEvent = (props) => {
	const { getAccessTokenSilently } = useAuth0();
	const [data, setData] = useState([]);
	const [eventData, setEventData] = useState({});
	const [reloadState, setReloadState] = useState(false);
	const eventId = parseInt(props.match.params.id);

	// Rendering participant info
	useEffect(() => {
		getParticipantsbyEventId(
			eventId,
			getAccessTokenSilently(),
			(d) => setParticipantData(d, setData),
			showError
		);
	}, [getAccessTokenSilently, eventId, reloadState]);

	// Rendering event info
	useEffect(() => {
		getEventByEventId(
			eventId,
			getAccessTokenSilently(),
			(d) => setEventData(d.getEvent),
			showError
		);
	}, [getAccessTokenSilently, eventId]);

	// Function to create participant
	// Keeping function on this page because relies on props id to link to Event
	const processCreateParticipant = (first_name, last_name, email) => {
		// Creating input variable
		createParticipant(
			first_name,
			last_name,
			email,
			getAccessTokenSilently(),
			eventId,
			() => {
				showSuccess();
				setReloadState(!reloadState);
			},
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
						action={() =>
							autoAssignSecretSanta(
								eventId,
								getAccessTokenSilently(),
								() => setReloadState(!reloadState),
								showAssignmentError
							)
						}
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
						<ModalPopUp handleLogic={processCreateParticipant} />
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
	createParticipant,
	setParticipantData,
};
export default OrganizerEvent;
