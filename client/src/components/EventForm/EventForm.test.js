import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import EventForm from "./index.js";
import { Form } from "antd";
import ImportGuestList from "../ImportGuestList";
import DateTimeIinput from "../DateTimeInput/index";

describe("New Event Form", () => {
	test("renders form with header", () => {
		render(<EventForm />);
		expect(screen.getByText("Create New Event")).toBeInTheDocument();
	});

	test("user field inputs and submit button", () => {
		render(<EventForm />);

		userEvent.type(
			screen.getByLabelText("Your Event Title"),
			"Office Gift Exchange"
		);
		userEvent.type(screen.getByLabelText("Location"), "The ole office");
		const date = screen.getByRole("textbox", { name: "Date" });

		expect(
			screen.getByRole("textbox", { name: /Your Event Title/i })
		).toHaveValue("Office Gift Exchange");
		expect(screen.getByRole("textbox", { name: /Location/i })).toHaveValue(
			"The ole office"
		);
		userEvent.click(screen.getByRole("button", { name: /Submit/i }));
	});

	test("renders add guest card", () => {
		render(<ImportGuestList />);
	});

	test("renders dateTimeInputs", () => {
		render(
			<Form>
				<DateTimeIinput />
			</Form>
		);
		expect(screen.getByLabelText("Date")).toBeInTheDocument;
		expect(screen.getByLabelText("Time")).toBeInTheDocument;
	});
});
