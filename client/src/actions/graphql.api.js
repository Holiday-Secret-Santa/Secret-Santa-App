import { GraphQLClient } from "graphql-request";
import {
	createEventMutation,
	createParticipantMutation,
} from "./graphql.queries";
const endpoint = "/graphql";

// Common Graphql Client

const graphQLClient = (token) =>
	new GraphQLClient(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

// Mutation APIs

const createEvent = (values, user, token, onSuccess, onError) => {
	const { given_name, family_name, email } = user ? user : {};

	const variables = {
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

	return graphQLClient(token)
		.request(createEventMutation, variables)
		.then((event) => onSuccess(event.createEvent.id))
		.catch((error) => onError(error));
};

// Query APIs

export { graphQLClient, createEvent };
