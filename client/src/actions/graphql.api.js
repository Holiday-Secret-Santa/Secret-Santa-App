import { GraphQLClient } from "graphql-request";

import {
	createEventMutation,
	createParticipantMutation,
	getUserEventsQuery,
	getParticipantsbyEventIdQuery,
	getEventByEventIdQuery,
	deleteEventMutation,
	createGiftMutation,
	getParticipantByEventIdAndEmailQuery,
	autoAssignSecretSantaMutation,
} from "./graphql.queries";

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

const deleteEvent = (eventId, token, onSuccess, onError) => {
	const variables = {
		eventId: eventId,
	};

	return processWithClient(
		token,
		deleteEventMutation,
		variables,
		onSuccess,
		onError
	);
};

const getParticipantsbyEventId = (eventId, token, onSuccess, onError) => {
	const variables = {
		eventId: eventId,
	};

	return processWithClient(
		token,
		getParticipantsbyEventIdQuery,
		variables,
		onSuccess,
		onError
	);
};

const createGift = async (
	description,
	link,
	price,
	token,
	participantId,
	showSuccessMsg,
	showErrorMsg
) => {
	var variables = {
		input: {
			description: description,
			link: link,
			price: price,
			ParticipantId: participantId,
		},
	};

	return processWithClient(
		token,
		createGiftMutation,
		variables,
		showSuccessMsg,
		showErrorMsg
	);
};

const createParticipant = async (
	first_name,
	last_name,
	email,
	token,
	eventId,
	showSuccessMsg,
	showErrorMsg
) => {
	var variables = {
		input: {
			first_name: first_name,
			last_name: last_name,
			email: email,
			EventId: parseInt(eventId),
		},
	};

	return processWithClient(
		token,
		createParticipantMutation,
		variables,
		showSuccessMsg,
		showErrorMsg
	);
};

const getEventByEventId = (eventId, token, onSuccess, onError) => {
	const variables = {
		id: eventId,
	};

	return processWithClient(
		token,
		getEventByEventIdQuery,
		variables,
		onSuccess,
		onError
	);
};

const getParticipantByEventIdAndEmail = (
	eventId,
	email,
	token,
	onSuccess,
	onError
) => {
	const variables = {
		eventId: eventId,
		email: email,
	};

	return processWithClient(
		token,
		getParticipantByEventIdAndEmailQuery,
		variables,
		onSuccess,
		onError
	);
};

const autoAssignSecretSanta = async (eventId, token, onSuccess, onError) => {
	const variables = {
		eventId: eventId,
	};

	return processWithClient(
		token,
		autoAssignSecretSantaMutation,
		variables,
		onSuccess,
		onError
	);
};
// Query APIs

export {
	graphQLClient,
	processWithClient,
	createEvent,
	getUserEvents,
	createParticipant,
	getParticipantsbyEventId,
	getEventByEventId,
	deleteEvent,
	createGift,
	getParticipantByEventIdAndEmail,
	autoAssignSecretSanta,
};
