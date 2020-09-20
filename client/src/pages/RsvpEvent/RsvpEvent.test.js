import React from "react";
import { render } from "@testing-library/react";
import RsvpEvent from "./RsvpEvent";

// mvp test scenario for accept events page
test("renders rsvp event page", () => {
	render(<RsvpEvent />);
});
