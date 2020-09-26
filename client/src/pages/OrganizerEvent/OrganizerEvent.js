import React from "react";
import { Row, Divider, notification } from "antd";
import { Bar } from "ant-design-pro/lib/Charts";
import DetailCard from "./../../components/DetailCard/DetailCard";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import TableComp from "./../../components/Table";
import Button from "../../components/Button/Button";
import "./style.css";
import { TeamOutlined } from "@ant-design/icons";
import ModalPopUp from "../../components/ModalPopUp/ModalPopUp";
import { GraphQLClient, gql } from "graphql-request";

// Main endpoint to query GraphQL
const endpoint = "/graphql";

// Function to get input entered by user (event organizer).
const getInput = (values) => {
	return {
		input: {
			first_name: values.first_name,
			last_name: values.last_name,
			email: values.email,
		},
	};
};

// Added graphQLClient
const graphQLClient = (token) =>
	new GraphQLClient(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

// Adding mutation to create new participant
const mutation = gql`
	mutation CreateParticipant($input: InputParticipant!) {
		createEvent(input: $input) {
			id
		}
	}
`;

// Function to create participant
const CreateParticipant = async (variables, getAccessTokenSilently, client) => {
	const token = await getAccessTokenSilently();
	return client(token).request(mutation, variables);
};

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

const OrganizerEvent = () => {
	
	function test(first_name, last_name, email) {
		alert(`${first_name} ${last_name} ${email}`);
	}

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
					<Divider />
					<div className="center">
						<ModalPopUp handleLogic={test} />
					</div>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default OrganizerEvent;
