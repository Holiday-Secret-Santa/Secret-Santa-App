import { gql } from "graphql-request";

const createEventMutation = gql`
	mutation CreateEvent($input: InputEvent!) {
		createEvent(input: $input) {
			id
		}
	}
`;

export { createEventMutation };
