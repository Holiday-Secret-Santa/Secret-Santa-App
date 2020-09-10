import React from "react";
import { render } from "@testing-library/react";
import ParticipantEvent from "./ParticipantEvent";

// mvp test scenario for participant event page
test("renders participant event page", () => {
	render(<ParticipantEvent />);
});
