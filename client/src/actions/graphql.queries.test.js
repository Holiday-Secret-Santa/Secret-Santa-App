import React from "react";
import { render } from "@testing-library/react";
import { createEventMutation, getUserEventsQuery } from "./graphql.queries";

describe("gql statements", () => {
	test("validate create event mutation", () => {
		expect(createEventMutation).toMatch(/mutation CreateEvent/);
	});

	test("validate get user events query", () => {
		expect(getUserEventsQuery).toMatch(/query GetUserEvents/);
	});
});
