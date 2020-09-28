import React from "react";
import { render } from "@testing-library/react";
import AddGift from "./AddGift";

// mvp test scenario for events page
test("renders form to add gift", () => {
	render(<AddGift match={{ params: { id: 1, participantid: 1 } }} />);
});
