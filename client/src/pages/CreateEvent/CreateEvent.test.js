import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CreateEvent, {
	endpoint,
	getInput,
	graphQLClient,
	mutation,
	createEvent,
	showSuccess,
	showError,
	action,
} from "./CreateEvent";

// mvp test scenario for create event page
test("renders create event page", () => {
	const { getByTestId } = render(<CreateEvent />);
	fireEvent.click(getByTestId("create-btn"));
	expect(endpoint).toBe("/graphql");
	expect(mutation).toMatch(/mutation/);
	expect(graphQLClient("dummy")).not.toBeUndefined();
	const values = {
		date: "date",
		title: "title",
		time: [1, 2],
		location: "location",
	};
	const input = getInput(values, "email", "given", "last");
	expect(input.input.date).toBe("date");
	expect(input.input.start_time).toBe(1);
	expect(input.input.end_time).toBe(2);
	expect(input.input.planner_email).toBe("email");
	showSuccess();
	showError("error");
	var counter = 0;
	const client = ({ token }) => {
		return {
			request: (mutation, variables) => {
				counter += 1;
			},
		};
	};
	createEvent(input, () => "test-token", client);
	action(
		values,
		{ given_name: "", family_name: "", email: "" },
		() => "",
		(url) => "",
		(created) => ""
	);
});
