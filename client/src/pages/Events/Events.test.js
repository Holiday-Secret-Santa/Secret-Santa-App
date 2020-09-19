import React from "react";
import { render } from "@testing-library/react";
import Events from "./Events";

// mvp test scenario for events page
test("renders events dashboard", () => {
  render(<Events />);
});
