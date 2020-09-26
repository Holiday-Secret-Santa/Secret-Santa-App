import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EventForm from "./index.js";

describe("New Event Form", () => {
	test("renders form", () => {
		const { getByTestId } = render(<EventForm />);
	});
});
