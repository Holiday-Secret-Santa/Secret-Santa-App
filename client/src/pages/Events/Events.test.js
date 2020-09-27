import React from "react";
import { render } from "@testing-library/react";
import Events, { PartyList, mergeEventsByRoles } from "./Events";
import { StaticRouter } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react");
useAuth0.mockReturnValue({
	user: jest.fn(),
	getAccessTokenSilently: jest.fn(),
});

describe("events page", () => {
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

	test("renders party list", () => {
		render(
			<StaticRouter location="someLocation">
				<PartyList data={data} />
			</StaticRouter>
		);
	});

	test("renders events dashboard", () => {
		render(
			<StaticRouter location="someLocation">
				<Events />
			</StaticRouter>
		);
	});

	test("merge Events By Role", () => {
		const result = mergeEventsByRoles(rawData);
		expect(result).toHaveLength(1);
	});
});
