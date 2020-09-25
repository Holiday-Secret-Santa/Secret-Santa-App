import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CreateEvent from "./CreateEvent";

// mvp test scenario for create event page
test("renders create event page", () => {
	const { getByTestId } = render(<CreateEvent />);
	fireEvent.click(getByTestId("create-btn"));
});
