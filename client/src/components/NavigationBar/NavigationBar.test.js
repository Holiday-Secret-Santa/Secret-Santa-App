import React from "react";
import { render } from "@testing-library/react";
import NavigationBar, { AuthenticatedMenu } from "./NavigationBar";
import { StaticRouter } from "react-router";

test("renders nav bar component", () => {
	render(
		<StaticRouter location="someLocation">
			<NavigationBar />
		</StaticRouter>
	);
	AuthenticatedMenu();
});
