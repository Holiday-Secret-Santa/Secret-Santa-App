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

export { createEventMutation, createParticipantMutation };
