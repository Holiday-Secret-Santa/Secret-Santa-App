import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import EventForm from "./index.js";

describe("New Event Form", () => {

  test("renders form with header", () => {
    render(<EventForm />);
    expect(screen.getByText("Create New Event")).toBeInTheDocument();
  });
  
  test("user text inputs", () => {
    render(<EventForm />);
    userEvent.type(screen.getByLabelText("Your Event Title"), "Hello, World!");
    expect(
      screen.getByRole("textbox", { name: /Your Event Title/i })
    ).toHaveValue("Hello, World!");
  });
});
