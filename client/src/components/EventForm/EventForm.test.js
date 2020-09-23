import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import EventForm from "./index.js";
import { Form } from "antd";
import ImportGuestList from "../ImportGuestList";
import AddguestField from "../AddGuestField/index";

describe("New Event Form", () => {
  test("renders form with header", () => {
    render(<EventForm />);
    expect(screen.getByText("Create New Event")).toBeInTheDocument();
  });

  test("user text inputs and submit button", () => {
    render(<EventForm />);

    userEvent.type(
      screen.getByLabelText("Your Event Title"),
      "Office Gift Exchange"
    );
    userEvent.type(screen.getByLabelText("Location"), "The ole office");

    expect(
      screen.getByRole("textbox", { name: /Your Event Title/i })
    ).toHaveValue("Office Gift Exchange");
    expect(screen.getByRole("textbox", { name: /Location/i })).toHaveValue(
      "The ole office"
    );
    userEvent.click(screen.getByRole("button", { name: /Submit/i }));
  });

  test("renders add guest card", () => {
    render(<ImportGuestList />);
  });

  test("renders AddguestField component", () => {
    render(<Form><AddguestField /></Form>);
    expect(screen.getByRole("button", { name: /Add Guest/i})).toBeInTheDocument;
  });
});
