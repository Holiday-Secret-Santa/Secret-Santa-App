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

const deleteEventMutation = gql`
	mutation deleteEvent($eventId: Int!) {
		deleteEvent(id: $eventId)
	}
`;

const deleteGiftMutation = gql`
	mutation deleteGift($id: Int!) {
		deleteGift(id: $id)
	}
`;

const getParticipantsbyEventIdQuery = gql`
	query GetParticipantsByEventId($eventId: Int!) {
		getParticipantsByEventId(eventId: $eventId) {
			id
			first_name
			last_name
			invite_status
			email
			SecretSanta {
				id
				first_name
				last_name
				email
			}
		}
	}
`;

const getGiftByParticipantIdQuery = gql`
	query GetGiftByParticipantId($participantId: Int!) {
		getGiftByParticipantId(participantId: $participantId) {
			id
			description
			link
			price
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

const getParticipantByEventIdAndEmailQuery = gql`
	query GetParticipantByEventIdAndEmail($eventId: Int!, $email: String!) {
		getParticipantByEventIdAndEmail(eventId: $eventId, email: $email) {
			id
		}
	}
`;

const autoAssignSecretSantaMutation = gql`
	mutation autoAssignSecretSanta($eventId: Int!) {
		autoAssignSecretSanta(eventId: $eventId) {
			participant_id
			secret_santa_id
		}
	}
`;

const participantAcceptedInviteMutation = gql`
	mutation updateParticipantAccepted($id: Int!) {
		updateParticipantAccepted(id: $id) {
			id
		}
	}
`;

const participantRejectedInviteMutation = gql`
	mutation updateParticipantRejected($id: Int!) {
		updateParticipantRejected(id: $id) {
			id
		}
	}
`;

const getParticipantSantaWithWishList = gql`
	query getParticipantSantaWithWishList($id: Int!) {
		getWishListForSecretSanta(id: $id) {
			description
			link
			price
		}
		getParticipantForSanta(id: $id) {
			first_name
			last_name
			email
		}
	}
`;

export {
	createEventMutation,
	createParticipantMutation,
	getUserEventsQuery,
	getParticipantsbyEventIdQuery,
	getEventByEventIdQuery,
	deleteEventMutation,
	createGiftMutation,
	getParticipantByEventIdAndEmailQuery,
	getGiftByParticipantIdQuery,
	autoAssignSecretSantaMutation,
	deleteGiftMutation,
	participantAcceptedInviteMutation,
	participantRejectedInviteMutation,
	getParticipantSantaWithWishList,
};
