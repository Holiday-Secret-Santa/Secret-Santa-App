import React from "react";
import { render } from "@testing-library/react";
import ModalPopUp from "./ModalPopUp";
import FormInputText from "../FormInput/FormInputText";

test("renders modal popup component", () => {
	render(<ModalPopUp />);
});

test("renders input text component in modal", () => {
	render(<FormInputText />);
});
