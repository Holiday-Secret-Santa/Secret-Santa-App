import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LogOutLink from "./index";
import { StaticRouter } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react");

useAuth0.mockReturnValue({
	logout: jest.fn(),
});

test("renders logout link", () => {
	const { getByTestId } = render(
		<StaticRouter>
			<LogOutLink />
		</StaticRouter>
	);
	fireEvent.click(getByTestId("logout-btn"));
});
