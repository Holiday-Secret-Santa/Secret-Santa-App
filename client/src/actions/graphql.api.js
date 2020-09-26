import { GraphQLClient } from "graphql-request";
import { createEventMutation, getUserEventsQuery } from "./graphql.queries";
const endpoint = "/graphql";

// Common Graphql Client

const graphQLClient = (token) =>
	new GraphQLClient(endpoint, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

const processWithClient = (token, query, variables, onSuccess, onError) => {
	return graphQLClient(token)
		.request(query, variables)
		.then((data) => onSuccess(data))
		.catch((error) => onError(error));
};

// Mutation APIs

const createEvent = (values, user, token, onSuccess, onError) => {
	const { given_name, family_name, email } = user;

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

	return processWithClient(
		token,
		createEventMutation,
		variables,
		(data) => onSuccess(data.createEvent.id),
		onError
	);
};

const getUserEvents = (user, token, onSuccess, onError) => {
	const { email } = user;
	const variables = {
		email: email,
	};

	return processWithClient(
		token,
		getUserEventsQuery,
		variables,
		onSuccess,
		onError
	);
};

// Query APIs

export { graphQLClient, processWithClient, createEvent, getUserEvents };
