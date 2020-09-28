import { gql } from "graphql-request";

const createEventMutation = gql`
	mutation CreateEvent($input: InputEvent!) {
		createEvent(input: $input) {
			id
		}
	}
`;

const createParticipantMutation = gql`
	mutation CreateParticipant($input: InputParticipant!) {
		createParticipant(input: $input) {
			id
		}
	}
`;

const createGiftMutation = gql`
mutation CreateGift($input: InputGift!) {
  createGift(input: $input) {
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

const getParticipantsbyEventIdQuery = gql`
	query GetParticipantsByEventId($eventId: Int!) {
		getParticipantsByEventId(eventId: $eventId) {
			id
			first_name
			last_name
			email
		}
	}
`;

const getEventByEventIdQuery = gql`
	query GetEvent($id: Int!) {
		getEvent(id: $id) {
			id
			description
			date
			start_time
			location
		}
	}
`;

export {
  createEventMutation,
  createParticipantMutation,
  getUserEventsQuery,
  getParticipantsbyEventIdQuery,
  getEventByEventIdQuery,
  createGiftMutation
};
