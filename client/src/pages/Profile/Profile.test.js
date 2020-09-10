import React from "react";
import { render } from "@testing-library/react";
import ProfilePage from "./Profile";

// mvp test scenario for participant event page
test("renders profile page", () => {
	render(<ProfilePage />);
});
