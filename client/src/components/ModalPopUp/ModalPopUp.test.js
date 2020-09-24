import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import ModalPopUp from "./ModalPopUp";
import FormInputText from "../FormInput/FormInputText";

test("renders modal popup component", () => {
	render(<ModalPopUp />);
});


test("renders input text component in modal", () => {
	render(<FormInputText />);
});

