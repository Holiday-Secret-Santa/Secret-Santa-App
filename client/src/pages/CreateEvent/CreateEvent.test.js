import React from "react";
import { render } from "@testing-library/react";
import CreateEvent from "./CreateEvent";

// mvp test scenario for create event page
test("renders create event page", () => {
	render(<CreateEvent />);
});
