import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EventForm from "./index.js";

test("renders form with header", () => {
  render(<EventForm />);
  expect(screen.getByText("Create New Event")).toBeInTheDocument();
});