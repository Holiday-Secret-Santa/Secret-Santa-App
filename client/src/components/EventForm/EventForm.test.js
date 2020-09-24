import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import EventForm from "./index.js";
import { Form } from "antd";
import ImportGuestList from "../ImportGuestList";
import AddguestField from "../AddGuestField/index";
import DateTimeIinput from "../DateTimeInput/index";
import { act } from "react-dom/test-utils";

describe("New Event Form", () => {
  test("renders form with header", () => {
    render(<EventForm />);
    expect(screen.getByText("Create New Event")).toBeInTheDocument();
  });

  test("user field inputs and submit button", () => {
    render(<EventForm />);

    userEvent.type(
      screen.getByLabelText("Your Event Title"),
      "Office Gift Exchange"
    );
    userEvent.type(screen.getByLabelText("Location"), "The ole office");
    const date = screen.getByRole("textbox", { name: "Date" });

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

  test("renders AddguestField component", async () => {
    render(
      <Form>
        <AddguestField />
      </Form>
    );
    const addguestBtn = screen.getByRole("button", { name: /Add Guest/i });
    expect(addguestBtn).toBeInTheDocument;
    userEvent.click(addguestBtn);
    await waitFor(
      () =>
      {
        return expect(screen.findByRole("textbox", { name: /First Name/i }))
          .toBeInTheDocument;
      }
    );
  });

  test("renders dateTimeInputs", () => {
    render(
      <Form>
        <DateTimeIinput />
      </Form>
    );
    expect(screen.getByLabelText("Date")).toBeInTheDocument;
    expect(screen.getByLabelText("Time")).toBeInTheDocument;
  });
});
