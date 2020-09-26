import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginLink from "./index";
import { StaticRouter } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react");

useAuth0.mockReturnValue({
	loginWithRedirect: jest.fn(),
});

test("renders login link", () => {
	const { getByTestId } = render(
		<StaticRouter>
			<LoginLink />
		</StaticRouter>
	);
	fireEvent.click(getByTestId("login-btn"));
});
