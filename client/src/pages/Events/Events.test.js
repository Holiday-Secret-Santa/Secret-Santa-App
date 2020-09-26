import React from "react";
import { render } from "@testing-library/react";
import Events from "./Events";
import { StaticRouter } from "react-router";

// mvp test scenario for events page
test("renders events dashboard", () => {
	render(
		<StaticRouter location="someLocation">
			<Events />
		</StaticRouter>
	);
});
