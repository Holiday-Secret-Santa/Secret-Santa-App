import React from "react";
import { render } from "@testing-library/react";
import AcceptEvent from "./AcceptEvent";

// mvp test scenario for accept events page
test("renders accept event page", () => {
	render(<AcceptEvent />);
});
