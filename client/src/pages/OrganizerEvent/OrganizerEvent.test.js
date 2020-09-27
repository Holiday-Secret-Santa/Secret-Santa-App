import React from "react";
import { render } from "@testing-library/react";
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
	render(<OrganizerEvent />);
	showSuccess();
	showError({});
	getParticipantsInfo();
	getColumns();
	EventCard();
	getRsvpData();
	ChartTitle();
});
