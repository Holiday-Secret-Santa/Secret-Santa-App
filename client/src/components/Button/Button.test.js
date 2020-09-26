import React from "react";
import { render } from "@testing-library/react";
import { Button, AddButton } from "./index";

test("renders button", () => {
	render(<Button text="text" />);
});

test("renders add button", () => {
	render(<AddButton text="text" />);
});
