import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { LoginLink, LogoutLink } from "./index";
import { StaticRouter } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react");

useAuth0.mockReturnValue({
	logout: jest.fn(),
	loginWithRedirect: jest.fn(),
});

const testLink = (link, id) => {
	const { getByTestId } = render(<StaticRouter>{link}</StaticRouter>);
	fireEvent.click(getByTestId(id));
};

test("renders login link", () => {
	testLink(<LoginLink />, "login-btn");
});

test("renders logout link", () => {
	testLink(<LogoutLink />, "logout-btn");
});
