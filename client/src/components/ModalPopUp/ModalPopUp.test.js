import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ModalPopUp from "./ModalPopUp";
import FormInputText from "../FormInput/FormInputText";
import userEvent from "@testing-library/user-event";

test("renders modal popup component", () => {
	render(<ModalPopUp handleLogic={() => {}} />);

	// Testing specifically for clicking the OK button
	userEvent.click(screen.getByRole("button", { name: /Add Participants/i }));
	userEvent.type(screen.getByRole("textbox", { name: /First Name/i }), "test");
	userEvent.type(screen.getByRole("textbox", { name: /Last Name/i }), "test");
	userEvent.type(
		screen.getByRole("textbox", { name: /Email/i }),
		"test@test.com"
	);
	userEvent.click(screen.getByRole("button", { name: /OK/i }));

	// Testing specifically for clicking the CANCEL button
	userEvent.click(screen.getByRole("button", { name: /Add Participants/i }));
	userEvent.click(screen.getByRole("button", { name: /Cancel/i }));
});

test("renders input text component in modal", () => {
	render(<FormInputText />);
});
