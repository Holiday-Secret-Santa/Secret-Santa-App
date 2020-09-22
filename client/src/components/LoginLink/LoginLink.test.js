import React from "react";
import { render } from "@testing-library/react";
import LoginLink from "./index";
import { StaticRouter } from "react-router";

test("renders login link", () => {
	render(
		<StaticRouter>
			<LoginLink />
		</StaticRouter>
	);
});
