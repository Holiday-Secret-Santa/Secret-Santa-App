import React from "react";
import { render } from "@testing-library/react";
import OrganizerEvent from "./OrganizerEvent";

// mvp test scenario for organizer event page
test("renders organizer event page", () => {
	render(<OrganizerEvent />);
});
