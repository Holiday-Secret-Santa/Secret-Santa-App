import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Events, {
	PartyList,
	mergeEventsByRoles,
	getAction,
	showError,
	showSuccess,
	showLoadError,
} from "./Events";
import { StaticRouter } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { GraphQLClient } from "graphql-request";
import userEvent from "@testing-library/user-event";

afterEach(() => {
	jest.clearAllMocks();
});

jest.mock("@auth0/auth0-react");
useAuth0.mockReturnValue({
	user: jest.fn(),
	getAccessTokenSilently: jest.fn(),
});

jest.mock("graphql-request");

const rawData = {
	getEventsByOrganizerEmail: [
		{
			id: 11,
			description: "Event 1",
			date: "1601503094000",
			start_time: "2020-09-25T23:00:00.704Z",
			planner_email: "email",
			location: "location",
		},
	],
	getEventsByParticipantEmail: [
		{
			id: 11,
			description: "Event 1",
			date: "1601503094000",
			start_time: "2020-09-25T23:00:00.704Z",
			planner_email: "email",
			location: "location",
		},
	],
};

const data = [
	{
		id: 11,
		description: "Event 1",
		date: "1601503094000",
		start_time: "2020-09-25T23:00:00.704Z",
		planner_email: "ystamaritq@gmail.com",
		roles: ["organizer", "participant"],
	},
];

const sleep = (ms) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

GraphQLClient.mockImplementation(() => {
	return {
		request: jest.fn(() => Promise.resolve(rawData)),
	};
});

describe("events page", () => {
	test("renders party list", () => {
		render(
			<StaticRouter location="someLocation">
				<PartyList data={data} />
			</StaticRouter>
		);
	});

	test("renders events dashboard", async () => {
		act(() => {
			render(
				<StaticRouter location="someLocation">
					<Events />
				</StaticRouter>
			);
		});

		await act(() => sleep(500)); // wait for useeffect to load data
		userEvent.click(screen.getByTestId("delete-btn-11"));
		userEvent.click(screen.getByTestId("organizer-btn-11"));
		userEvent.click(screen.getByTestId("participant-btn-11"));
	});

	test("merge Events By Role", () => {
		const result = mergeEventsByRoles(rawData);
		expect(result).toHaveLength(1);
	});

	test("get actions for organizer", () => {
		var output = getAction(1, "organizer", () => {});
		expect(output).toHaveLength(2);
		var organizerBtnSpan = output[0];
		render(
			<StaticRouter location="someLocation">{organizerBtnSpan}</StaticRouter>
		);
		userEvent.click(screen.getByTestId("organizer-btn-1"));
		var deleteBtnSpan = output[1];
		render(deleteBtnSpan);
		userEvent.click(screen.getByTestId("delete-btn-1"));
	});

	test("get action for participant", () => {
		var output = getAction(1, "participant");
		expect(output).toHaveLength(1);
	});

	test("show error", () => {
		showError("error");
	});

	test("show success", () => {
		showSuccess(1);
	});

	test("show load error", () => {
		showLoadError("loading error");
	});
});
