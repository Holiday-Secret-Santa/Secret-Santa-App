import React from "react";
import { render } from "@testing-library/react";
import FormInput, {
	FormInputText,
	FormInputNumber,
	FormInputDate,
	FormInputTime,
} from "./index";

test("renders form input", () => {
	render(<FormInput name="name" label="label" />);
});

test("renders form input text", () => {
	render(<FormInputText name="name" label="label" />);
});

test("renders form input number", () => {
	render(<FormInputNumber name="name" label="label" />);
});

test("renders form input date", () => {
	render(<FormInputDate name="name" label="label" />);
});

test("renders form input time", () => {
	render(<FormInputTime name="name" label="label" />);
});
