import React from "react";
import { render } from "@testing-library/react";

import {
	createEventMutation,
	getUserEventsQuery,
	createParticipantMutation,
	getParticipantsbyEventIdQuery,
	getEventByEventIdQuery,
	deleteEventMutation,
	getParticipantByEventIdAndEmailQuery,
	createGiftMutation,
	autoAssignSecretSantaMutation,
	participantRejectedInviteMutation,
	participantAcceptedInviteMutation,
} from "./graphql.queries";

describe("gql statements", () => {
	test("validate create event mutation", () => {
		expect(createEventMutation).toMatch(/mutation CreateEvent/);
	});

	test("validate get user events query", () => {
		expect(getUserEventsQuery).toMatch(/query GetUserEvents/);
	});

	test("validate create participant mutation", () => {
		expect(createParticipantMutation).toMatch(/mutation CreateParticipant/);
	});

	test("validate get participants by event query", () => {
		expect(getParticipantsbyEventIdQuery).toMatch(
			/query GetParticipantsByEventId/
		);
	});

	test("validate get events by id", () => {
		expect(getEventByEventIdQuery).toMatch(/query GetEvent/);
	});

	test("validate delete event mutation", () => {
		expect(deleteEventMutation).toMatch(/mutation deleteEvent/);
	});

	test("validate getParticipantByEventIdAndEmail query", () => {
		expect(getParticipantByEventIdAndEmailQuery).toMatch(
			/query GetParticipantByEventIdAndEmail/
		);
	});

	test("validate createGiftMutation mutation", () => {
		expect(createGiftMutation).toMatch(/mutation CreateGift/);
	});

	test("validate autoAssignSecretSantaMutation mutation", () => {
		expect(autoAssignSecretSantaMutation).toMatch(
			/mutation autoAssignSecretSanta/
		);
	});
	test("validate updated invite status change to accepted", () => {
		expect(participantAcceptedInviteMutation).toMatch(
			/mutation updateParticipantAccepted/
		);
	});
	test("validate updated invite status change to rejected", () => {
		expect(participantRejectedInviteMutation).toMatch(
			/mutation updateParticipantRejected/
		);
	});
});
