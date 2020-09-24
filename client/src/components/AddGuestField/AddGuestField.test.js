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
    expect(screen.getByRole("img", {name: /plus/i})).toBeInTheDocument;
  });

  test("Returns form item on button click", async () => {
    userEvent.click(addguestBtn);
    const fName = screen.findByRole("textbox", { name: /First Name/i});
    await expect(fName).toBeInTheDocument;
    // userEvent.type(fName, "Antonio");
    await expect(screen.findByRole("textbox", { name: /Last Name/i})).toBeInTheDocument;
    await expect(screen.findByRole("img", { name: /minus-circle/i})).toBeInTheDocument;
    
  });

  test("renders form item", () => {
    render(
      <Form>
        {CreateNameFields(2, null, "test", 3, <Input placeholder="First Name" />)}
      </Form>
    );
    expect(screen.getByRole("textbox")).toHaveClass("ant-input");
  });

});
