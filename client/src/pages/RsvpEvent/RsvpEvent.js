import React, { useState, useEffect } from "react";
import { Row, notification } from "antd";
import ResponsiveColumn from "../../components/ResponsiveColumn";
import DetailCard from "../../components/DetailCard/DetailCard";
import Button from "../../components/Button";
import "./style.css";
import { getEventByEventId } from "../../actions/graphql.api";
import { useAuth0 } from "@auth0/auth0-react";

const processStatusAction = (status, setStatusCallBack) => {
	if (status === "Accepted") {
		notification.success({
			message: "Going",
			description: "You Have been added to the event list",
		});
	} else if (status === "Rejected") {
		notification.warn({
			message: "Not Going",
			description: "No worries, we will notify the event host",
		});
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
	const [eventData, setEventData] = useState({});
	const [status, setStatus] = useState(null);
	const { getAccessTokenSilently } = useAuth0();
	const eventId = parseInt(props.match.params.id);

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
								action={() => processStatusAction("Accepted", setStatus)}
							/>,
							<Button
								testid="not-going-btn"
								text="Not Going"
								disabled={status === "Rejected"}
								bgColor="#D62828"
								action={() => processStatusAction("Rejected", setStatus)}
							/>,
						]}
					/>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default RsvpEvent;
