import React, { useEffect, useState } from "react";
import { Row, Tooltip, notification, Popconfirm } from "antd";
import { SettingFilled, GiftFilled, DeleteFilled } from "@ant-design/icons";
import DetailCard from "./../../components/DetailCard/DetailCard";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import { AddButton } from "./../../components/Button";
import { Link } from "react-router-dom";
import { getUserEvents, deleteEvent } from "./../../actions/graphql.api";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const getAction = (eventId, role, getAccessTokenSilently, onSuccess) => {
	const values =
		role === "organizer"
			? [
					{
						title: "Manage Your Gift Exchange",
						icon: (
							<SettingFilled style={{ fontSize: "24px", color: "#2c6e49" }} />
						),
					},
					{
						title: "Delete this Gift Exchange",
						icon: (
							<DeleteFilled style={{ fontSize: "24px", color: "#D62828" }} />
						),
						action: () =>
							deleteEvent(
								eventId,
								getAccessTokenSilently(),
								onSuccess,
								showError
							),
					},
			  ]
			: [
					{
						title: "Add Gifts for Secret Santa",
						icon: <GiftFilled style={{ fontSize: "24px", color: "#2c6e49" }} />,
					},
			  ];

	return values.map((v) => (
		<span
			data-testid={
				v.action ? `delete-btn-${eventId}` : `${role}-btn-${eventId}`
			}
		>
			<Tooltip title={v.title}>
				{!v.action && <Link to={`/events/${eventId}/${role}`}>{v.icon}</Link>}
				{v.action && (
					<Popconfirm
						title="Are you sure you want to delete this event?"
						onConfirm={v.action}
						okText="Yes"
						cancelText="No"
					>
						{v.icon}
					</Popconfirm>
				)}
			</Tooltip>
		</span>
	));
};

const getActions = (data, getAccessTokenSilently, onSuccess) => {
	let actions = [];
	data.roles.map((r) =>
		getAction(data.id, r, getAccessTokenSilently, onSuccess).map((a) =>
			actions.push(a)
		)
	);
	return actions;
};

const mergeEventsByRoles = (data) => {
	var result = {};
	// adds all events the user is an organizer
	if (data.getEventsByOrganizerEmail)
		data.getEventsByOrganizerEmail.map(
			(ev) => (result[ev.id] = { ...ev, roles: ["organizer"] })
		);
	if (data.getEventsByParticipantEmail)
		data.getEventsByParticipantEmail.map((ev) =>
			result[ev.id]
				? (result[ev.id] = { ...ev, roles: ["organizer", "participant"] })
				: (result[ev.id] = { ...ev, roles: ["participant"] })
		);
	return Object.values(result);
};

const PartyList = ({ data, getAccessTokenSilently, onSuccess }) => {
	return (
		<>
			{data.map((event, index) => (
				<ResponsiveColumn key={index} lg={8}>
					<DetailCard
						title={event.description}
						actions={getActions(event, getAccessTokenSilently, onSuccess)}
						date={event.date}
						startTime={event.start_time}
						location={event.location}
					/>
				</ResponsiveColumn>
			))}
		</>
	);
};

const showLoadError = (error) => {
	notification.error({
		message: "Error",
		description: "Unable to load due to error: " + error,
	});
};

const showError = (error) => {
	notification.error({
		message: "Delete Failed",
		description: "Unable to delete event due to error: " + error,
	});
};

const showSuccess = () => {
	notification.success({
		message: "Event Deleted",
		description: "Event was successfully deleted",
	});
};

const EventsPage = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const [data, setData] = useState([]);
	const [deleteState, setDeleteState] = useState(false);

	useEffect(() => {
		getUserEvents(
			user,
			getAccessTokenSilently(),
			(d) => setData(mergeEventsByRoles(d)),
			showLoadError
		);
	}, [user, deleteState, getAccessTokenSilently]);

	const onSuccess = () => {
		showSuccess();
		setDeleteState(!deleteState);
	};

	return (
		<div>
			<Row gutter={[30, 30]} style={{ padding: 30 }}>
				<PartyList
					data={data}
					getAccessTokenSilently={getAccessTokenSilently}
					onSuccess={onSuccess}
				/>
			</Row>
			<div className="center">
				<Row gutter={[30, 30]} style={{ padding: 20 }}>
					<ResponsiveColumn>
						<Link to="events/create">
							<AddButton text="Create New Event" />
						</Link>
					</ResponsiveColumn>
				</Row>
			</div>
		</div>
	);
};

export {
	PartyList,
	mergeEventsByRoles,
	getActions,
	getAction,
	showSuccess,
	showError,
	showLoadError,
};
export default EventsPage;
