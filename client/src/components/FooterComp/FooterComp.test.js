import React from "react";
import { render } from "@testing-library/react";
import FooterComp from "./FooterComp";

test("renders footer text", () => {
	render(<FooterComp text="Secret Santa App" />);
});
