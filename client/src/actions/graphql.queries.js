import { gql } from "graphql-request";

const createEventMutation = gql`
	mutation CreateEvent($input: InputEvent!) {
		createEvent(input: $input) {
			id
		}
	}
`;

const getUserEventsQuery = gql`
	query GetUserEvents($email: String!) {
		getEventsByParticipantEmail(email: $email) {
			id
			description
			date
			start_time
			planner_email
			location
		}
		getEventsByOrganizerEmail(email: $email) {
			id
			description
			date
			start_time
			planner_email
			location
		}
	}
`;

export { createEventMutation, getUserEventsQuery };
