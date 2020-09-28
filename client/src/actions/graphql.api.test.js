import React from "react";
import { render } from "@testing-library/react";
import {
	graphQLClient,
	processWithClient,
	createEvent,
	getUserEvents,
	createParticipantLogic,
	getParticipantsbyEventId,
	getEventByEventId,
	deleteEvent,
	getParticipantByEventIdAndEmail,
} from "./graphql.api";
import { GraphQLClient } from "graphql-request";

jest.mock("graphql-request");

const onSuccess = jest.fn();
const onError = jest.fn();

afterEach(() => {
	jest.clearAllMocks();
});

const user = { given_name: "name", family_name: "familiy", email: "email" };

const mockGrapgqlClient = (answer) => {
	GraphQLClient.mockImplementation(() => {
		return {
			request: jest.fn(() => answer),
		};
	});
};

const mockGrapgqlClientSuccess = (answer) => {
	mockGrapgqlClient(Promise.resolve(answer));
};

const mockGrapgqlClientError = (error) => {
	mockGrapgqlClient(Promise.reject(error));
};

describe("graph apis", () => {
	test("creates client with token", () => {
		const client = graphQLClient("token");
		expect(client).not.toBeNull();
		expect(GraphQLClient).toHaveBeenCalledTimes(1);
	});

	test("process with client", () => {
		mockGrapgqlClientSuccess({ createEvent: { id: 1 } });
		processWithClient("token", "query", {}, onSuccess, onError);
		expect(GraphQLClient).toHaveBeenCalledTimes(1);
	});

	const values = {
		date: "date",
		title: "title",
		time: [1, 2],
		location: "location",
	};

	test("handles success", () => {
		mockGrapgqlClientSuccess({ createEvent: { id: 1 } });
		createEvent(values, user, "token", onSuccess, onError);
	});

	test("handles error", () => {
		mockGrapgqlClientError("error");
		createEvent(values, user, "token", onSuccess, onError);
	});

	test("process get user events", () => {
		mockGrapgqlClientSuccess({});
		getUserEvents(user, "token", onSuccess, onError);
	});

	test("process get participant by event", () => {
		mockGrapgqlClientSuccess({});
		getParticipantsbyEventId(1, "token", onSuccess, onError);
	});

	test("create participant on success", () => {
		mockGrapgqlClientSuccess({});
		createParticipantLogic(
			"",
			"",
			"",
			() => {},
			1,
			() => {},
			() => {}
		);
	});

	test("create participant on error", () => {
		mockGrapgqlClientError("error");
		createParticipantLogic(
			"",
			"",
			"",
			() => {},
			1,
			() => {},
			() => {}
		);
	});

	test("process get user event by eventId", () => {
		mockGrapgqlClientSuccess({});
		getEventByEventId(
			1,
			"token",
			() => {},
			() => {}
		);
	});

	test("process delete event success", () => {
		mockGrapgqlClientSuccess(1);
		deleteEvent(
			1,
			"token",
			() => {},
			() => {}
		);
	});

	test("process getParticipantByEventIdAndEmail success", () => {
		mockGrapgqlClientSuccess(1);
		getParticipantByEventIdAndEmail(
			1,
			"token",
			() => {},
			() => {}
		);
	});
});
