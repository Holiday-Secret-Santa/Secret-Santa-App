import React from "react";
import { render } from "@testing-library/react";
import AddGift from "./AddGift";

// mvp test scenario for events page
test("renders events dashboard", () => {
	render(<AddGift />);
});
