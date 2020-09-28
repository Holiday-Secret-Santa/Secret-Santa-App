import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateEvent, { processSuccess, processError } from "./CreateEvent";

jest.mock("./../../actions/graphql.api");

describe("create event api ", () => {
	test("renders create event page", () => {
		render(<CreateEvent />);
	});

	test("handle success", () => {
		// createEvent.mockReturnValue(() => Promise.resolve(1));
		const { getByTestId } = render(<CreateEvent />);
		fireEvent.click(getByTestId("create-btn"));
		processSuccess(
			1,
			() => {},
			() => {}
		);
	});

	test("handle error", () => {
		const { getByTestId } = render(<CreateEvent />);
		fireEvent.click(getByTestId("create-btn"));
		processError("error");
	});
});
