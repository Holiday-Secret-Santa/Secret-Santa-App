import React, { useState, useEffect } from "react";
import { Row, notification } from "antd";
import { Redirect } from "react-router";
import ResponsiveColumn from "../../components/ResponsiveColumn";
import DetailCard from "../../components/DetailCard/DetailCard";
import Button from "../../components/Button";
import "./style.css";
import {
	getEventByEventId,
	participantAcceptedInvite,
	participantRejectedInvite,
} from "../../actions/graphql.api";
import { useAuth0 } from "@auth0/auth0-react";

const processStatusAction = (
	status,
	setStatusCallBack,
	eventId,
	participantId,
	token,
	setNextUrl,
	setParticipantMadeChoice
) => {
	if (status === "Accepted") {
		participantAcceptedInvite(
			participantId,
			token,
			() => {
				notification.success({
					message: "Going",
					description: "You have been added to the event list",
				});
				setNextUrl(`/events/${eventId}/participant`);
				setParticipantMadeChoice(true);
			},
			(e) => showError(e)
		);
	} else if (status === "Rejected") {
		participantRejectedInvite(
			participantId,
			token,
			() => {
				notification.warn({
					message: "Not Going",
					description: "No worries, we will notify the event host",
				});
				setNextUrl(`/`);
				setParticipantMadeChoice(true);
			},
			(e) => showError(e)
		);
	}
	setStatusCallBack(status);
};

const showError = (error) => {
	notification.error({
		message: "Error",
		description: "We couldn't add your participant due to error: " + error,
	});
};

const RsvpEvent = (props) => {
	const [participantMadeChoice, setParticipantMadeChoice] = useState(false);
	const [nextUrl, setNextUrl] = useState("");
	const [eventData, setEventData] = useState({});
	const [status, setStatus] = useState(null);
	const { getAccessTokenSilently } = useAuth0();
	const eventId = parseInt(props.match.params.id);
	const participantId = parseInt(props.match.params.participantid);

	// Rendering event info
	useEffect(() => {
		getEventByEventId(
			eventId,
			getAccessTokenSilently(),
			(d) => setEventData(d.getEvent),
			showError
		);
	}, [getAccessTokenSilently, eventId]);

	return (
		<>
			{participantMadeChoice && <Redirect to={nextUrl} />}
			<Row gutter={[30, 30]} justify="center">
				<ResponsiveColumn style={{ padding: 40 }} lg={9} md={9}>
					<DetailCard
						title={eventData.description}
						date={eventData.date}
						startTime={eventData.start_time}
						location={eventData.location}
						actions={[
							<Button
								testid="going-btn"
								text="Going"
								disabled={status === "Accepted"}
								action={() =>
									processStatusAction(
										"Accepted",
										setStatus,
										eventId,
										participantId,
										getAccessTokenSilently(),
										setNextUrl,
										setParticipantMadeChoice
									)
								}
							/>,
							<Button
								testid="not-going-btn"
								text="Not Going"
								disabled={status === "Rejected"}
								bgColor="#D62828"
								action={() =>
									processStatusAction(
										"Rejected",
										setStatus,
										eventId,
										participantId,
										getAccessTokenSilently(),
										setNextUrl,
										setParticipantMadeChoice
									)
								}
							/>,
						]}
					/>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default RsvpEvent;
