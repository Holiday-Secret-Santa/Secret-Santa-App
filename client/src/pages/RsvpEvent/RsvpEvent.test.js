import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RsvpEvent from "./RsvpEvent";

describe("rsvp events ", () => {
	test("renders rsvp event page", () => {
		render(<RsvpEvent />);
	});

	test("verify answer is given and set", () => {
		const { getByTestId } = render(<RsvpEvent />);
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
