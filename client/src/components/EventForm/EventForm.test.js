import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EventForm from "./index.js";

describe("New Event Form", () => {
	test("renders form", () => {
		render(<EventForm />);
	});
});
