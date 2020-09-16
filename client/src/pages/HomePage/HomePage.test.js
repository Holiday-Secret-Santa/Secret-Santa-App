import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

// mvp test scenario for events page
test("renders home page dashboard", () => {
	render(<HomePage />);
});
