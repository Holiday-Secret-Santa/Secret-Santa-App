import React from "react";
import { render } from "@testing-library/react";
import { graphQLClient, createEvent } from "./graphql.api";
import { GraphQLClient } from "graphql-request";

jest.mock("graphql-request");

const onSuccess = jest.fn();
const onError = jest.fn();

describe("graph apis", () => {
	test("creates client with token", () => {
		const client = graphQLClient("token");
		expect(client).not.toBeNull();
		expect(GraphQLClient).toHaveBeenCalledTimes(1);
	});

	const values = {
		date: "date",
		title: "title",
		time: [1, 2],
		location: "location",
	};

	const user = { given_name: "name", family_name: "familiy", email: "email" };

	test("handles success", () => {
		GraphQLClient.mockImplementation(() => {
			return {
				request: jest.fn(() => Promise.resolve({ createEvent: { id: 1 } })),
			};
		});
		createEvent(values, user, "token", onSuccess, onError);
	});

	test("handles error", () => {
		GraphQLClient.mockImplementation(() => {
			return {
				request: jest.fn(() => Promise.reject("error")),
			};
		});
		createEvent(values, user, "token", onSuccess, onError);
	});
});
