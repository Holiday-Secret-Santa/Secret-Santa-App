import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import OrganizerEvent, {
	showSuccess,
	showError,
	getParticipantsInfo,
	getColumns,
	EventCard,
	getRsvpData,
	ChartTitle,
} from "./OrganizerEvent";

jest.mock("./../../actions/graphql.api");

// mvp test scenario for organizer event page
test("renders organizer event page", () => {
	render(<OrganizerEvent match={{ params: { id: 1 } }} />);

	userEvent.click(screen.getByRole("button", { name: /Add Participants/i }));
	userEvent.type(screen.getByRole("textbox", { name: /First Name/i }), "test");
	userEvent.type(screen.getByRole("textbox", { name: /Last Name/i }), "test");
	userEvent.type(
		screen.getByRole("textbox", { name: /Email/i }),
		"test@test.com"
	);
	userEvent.click(screen.getByRole("button", { name: /OK/i }));

	showSuccess();
	showError({});
	getParticipantsInfo();
	getColumns();
	EventCard();
	getRsvpData();
	ChartTitle();
});
