import React from "react";
import { render } from "@testing-library/react";
import { createEventMutation } from "./graphql.queries";

test("validate create event mutation", () => {
	expect(createEventMutation).toMatch(/mutation CreateEvent/);
});
