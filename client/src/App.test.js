import React from "react";
import { render } from "@testing-library/react";
import App, { AppContent } from "./App";
import { StaticRouter } from "react-router";

describe("App page", () => {
	test("renders app component", () => {
		render(<App />);
	});

	test("renders app content not authenticated", () => {
		render(
			<StaticRouter location="someLocation">
				<AppContent isAuthenticated={false} />
			</StaticRouter>
		);
	});

	test("renders app content authenticated", () => {
		render(
			<StaticRouter location="someLocation">
				<AppContent isAuthenticated={true} />
			</StaticRouter>
		);
	});
});
