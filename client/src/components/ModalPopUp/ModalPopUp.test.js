import React from "react";
import { render, screen } from "@testing-library/react";
import ModalPopUp from "./ModalPopUp";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
// import FormInputText from "../FormInput/FormInputText";

test("renders modal popup component", () => {
	render(<ModalPopUp />);
});

test("renders input text component in modal", () => {
	render(<ModalPopUp />);
	userEvent.type(screen.getByLabelText("First Name"), "Caleb");

	userEvent.type(screen.getByLabelText("Last Name"), "Duran");

	userEvent.type(screen.getByLabelText("Email"), "Caleb.Duran@gmail.com");

	expect(screen.getByRole("textbox", { name: /First Name/i })).toHaveValue(
		"Caleb"
	);

	expect(screen.getByRole("textbox", { name: /Last Name/i })).toHaveValue(
		"Duran"
	);

	expect(screen.getByRole("textbox", { name: /Email/i })).toHaveValue(
		"Caleb.Duran@gmail.com"
	);
});

// test("renders input text component in modal", () => {
// 	render(<FormInputText />);
// });

// test("user text input", () => {
// 	render(<FormInputText />);
// });
