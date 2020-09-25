import React, { useState } from "react";
import { GraphQLClient, gql } from "graphql-request";
import { useAuth0 } from "@auth0/auth0-react";
import EventForm from "../../components/EventForm/index";
import { Redirect } from "react-router";
import { notification } from "antd";
import "./style.css";

const endpoint = "/graphql";

const getInput = (values, email, given_name, family_name) => {
	return {
		input: {
			date: values.date,
			description: values.title,
			start_time: values.time[0],
			end_time: values.time[1],
			location: values.location,
			planner_email: email,
			planner_first_name: given_name,
			planner_last_name: family_name,
		},
	};
};

const graphQLClient = (token) =>
	new GraphQLClient(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

const mutation = gql`
	mutation CreateEvent($input: InputEvent!) {
		createEvent(input: $input) {
			id
		}
	}
`;

const createEvent = async (variables, getAccessTokenSilently) => {
	const token = await getAccessTokenSilently();
	return graphQLClient(token).request(mutation, variables);
};

const CreateEvent = ({ props }) => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { given_name, family_name, email } = user ? user : {};
	// used to send user to next page on create success
	const [eventCreated, setEventCreated] = useState(false);
	const [nextUrl, setNextUrl] = useState("");

	const action = (values) => {
		let variables = getInput(values, email, given_name, family_name);
		createEvent(variables, getAccessTokenSilently)
			.then((event) => {
				notification.success({
					message: "Event Created",
					description: "Event Created. You can now add participants and more",
				});
				setNextUrl(`/events/${event.createEvent.id}/organizer`);
				setEventCreated(true);
			})
			.catch((error) => {
				notification.error({
					message: "Error",
					description: "We couldn't create your event due to error: " + error,
				});
			});
	};

	return (
		<>
			{eventCreated && <Redirect to={nextUrl} />}
			<EventForm action={action} />
		</>
	);
};

export default CreateEvent;
