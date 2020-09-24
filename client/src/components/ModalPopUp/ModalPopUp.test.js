import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ModalPopUp from "./ModalPopUp";
import FormInputText from "../FormInput/FormInputText";
import userEvent from "@testing-library/user-event";

test("renders modal popup component", () => {
	render(<ModalPopUp />);

	userEvent.click(screen.getByRole("button", { name: /Add Participants/i }));
	userEvent.click(screen.getByRole("button", { name: /OK/i }));
});

test("renders input text component in modal", () => {
	render(<FormInputText />);
});
