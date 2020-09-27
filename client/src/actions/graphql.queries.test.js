import React from "react";
import { render } from "@testing-library/react";
import {
	createEventMutation,
	createParticipantMutation,
} from "./graphql.queries";

test("validate create event mutation", () => {
	expect(createEventMutation).toMatch(/mutation CreateEvent/);
});

test("validate create participant mutation", () => {
	expect(createParticipantMutation).toMatch(/mutation CreateParticipant/);
});
