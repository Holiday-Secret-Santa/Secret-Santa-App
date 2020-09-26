import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import EventForm from "../../components/EventForm/index";
import { Redirect } from "react-router";
import { notification } from "antd";
import { createEvent } from "./../../actions/graphql.api";
import "./style.css";

const processSuccess = (eventId, setNextUrl, setEventCreated) => {
	notification.success({
		message: "Event Created",
		description: "Event Created. You can now add participants and more",
	});
	setNextUrl(`/events/${eventId}/organizer`);
	setEventCreated(true);
};

const processError = (error) => {
	notification.error({
		message: "Error",
		description: "We couldn't create your event due to error: " + error,
	});
};

const CreateEvent = () => {
	// used to send user to next page on create success
	const [eventCreated, setEventCreated] = useState(false);
	const [nextUrl, setNextUrl] = useState("");
	const { user, getAccessTokenSilently } = useAuth0();
	const onSuccess = (eventid) =>
		processSuccess(eventId, setNextUrl, setEventCreated);

	return (
		<>
			{eventCreated && <Redirect to={nextUrl} />}
			<EventForm
				action={() =>
					createEvent(
						values,
						user,
						getAccessTokenSilently(),
						onSuccess,
						processError
					)
				}
			/>
		</>
	);
};

export { processSuccess, processError };
export default CreateEvent;
