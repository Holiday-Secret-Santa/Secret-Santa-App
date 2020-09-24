import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { Form } from "antd";
import AddguestField from "../AddGuestField/index";

describe("AddGuestField", () => {
  test("should render add guest button", () => {
    render(
      <Form>
        <AddGuestField />
      </Form>
    );
    const addguestBtn = screen.getByRole("button", { name: /Add Guest/i });
    expect(addguestBtn).toBeInTheDocument;
  });
});
