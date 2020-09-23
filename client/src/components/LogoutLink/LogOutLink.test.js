import React from "react";
import { render } from "@testing-library/react";
import LogOutLink from "./index";
import { StaticRouter } from "react-router";

test("renders logout link", () => {
  render(
    <StaticRouter>
      <LogOutLink />
    </StaticRouter>
  );
});
