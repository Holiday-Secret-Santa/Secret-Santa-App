import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RsvpEvent from "./RsvpEvent";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("./../../actions/graphql.api");

jest.mock("@auth0/auth0-react");
useAuth0.mockReturnValue({
	user: jest.fn(),
	getAccessTokenSilently: jest.fn(),
});

describe("rsvp events ", () => {
	test("renders rsvp event page", () => {
		render(<RsvpEvent match={{ params: { id: 1 } }} />);
	});

	test("verify answer is given and set", () => {
		const { getByTestId } = render(<RsvpEvent match={{ params: { id: 1 } }} />);
		expect(getByTestId("going-btn")).not.toHaveAttribute("disabled");
		expect(getByTestId("not-going-btn")).not.toHaveAttribute("disabled");
		fireEvent.click(getByTestId("going-btn"));
		expect(getByTestId("going-btn")).toHaveAttribute("disabled");
		expect(getByTestId("not-going-btn")).not.toHaveAttribute("disabled");
		fireEvent.click(getByTestId("not-going-btn"));
		expect(getByTestId("going-btn")).not.toHaveAttribute("disabled");
		expect(getByTestId("not-going-btn")).toHaveAttribute("disabled");
	});
});
