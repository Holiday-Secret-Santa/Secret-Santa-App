import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateEvent, { processSuccess, processError } from "./CreateEvent";
import { createEvent } from "./../../actions/graphql.api";
jest.mock("./../../actions/graphql.api");

describe("create event api ", () => {
	test("renders create event page", () => {
		render(<CreateEvent />);
	});

	test("handle success", () => {
		createEvent.mockReturnValue(() => Promise.resolve(1));
		const { getByTestId } = render(<CreateEvent />);

		userEvent.type(screen.getByLabelText("Title"), "Office Gift Exchange");
		userEvent.type(screen.getByLabelText("Date"), "01/01/2021");
		userEvent.type(screen.getByLabelText("Time"), "10000");
		userEvent.type(screen.getByLabelText("Location"), "Random Location");

		fireEvent.click(getByTestId("create-btn"));

		processSuccess(
			1,
			() => {},
			() => {}
		);
	});

	test("handle error", () => {
		createEvent.mockReturnValue(() => Promise.reject("error"));
		const { getByTestId } = render(<CreateEvent />);
		userEvent.type(screen.getByLabelText("Title"), "Office Gift Exchange");
		userEvent.type(screen.getByLabelText("Date"), "01/01/2021");
		userEvent.type(screen.getByLabelText("Time"), "10000");
		userEvent.type(screen.getByLabelText("Location"), "Random Location");
		fireEvent.click(getByTestId("create-btn"));
		processError("error");
	});
});
