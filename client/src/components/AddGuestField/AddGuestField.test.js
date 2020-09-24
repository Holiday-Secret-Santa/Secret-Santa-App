import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import "antd/dist/antd.css";
import { Form, Input, Button, Space } from "antd";
import { AddGuestField, CreateNameFields } from "./index";

describe("AddGuestField", () => {
  render(
    <Form>
      <AddGuestField />
    </Form>
  );
  const addguestBtn = screen.getByRole("button", { name: /Add Guest/i });
  test("should render add guest button", () => {
    expect(addguestBtn).toBeInTheDocument;
  });

  test("Returns form item on button click", async () => {
    userEvent.click(addguestBtn);
    await expect(screen.findByRole("textbox", { name: /First Name/i})).toBeInTheDocument;
    await expect(screen.findByRole("textbox", { name: /Last Name/i})).toBeInTheDocument;
  });
});
