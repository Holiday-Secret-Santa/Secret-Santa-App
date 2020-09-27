import React from "react";
import { render } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import ParticipantEvent from "./ParticipantEvent";

// mvp test scenario for participant event page
test("renders participant event page", () => {
	const { getByTestId } = render(<ParticipantEvent />);
	userEvent.click(getByTestId("delete-gift-btn-1"));
});
