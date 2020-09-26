import React from "react";
import { render } from "@testing-library/react";
import PrivateRoute from "./index";
import { StaticRouter } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";

jest.mock("@auth0/auth0-react");

useAuth0.mockReturnValue({
	loginWithRedirect: jest.fn(),
});

test("renders login link", () => {
	render(
		<StaticRouter>
			<PrivateRoute exact path="/" component={<></>} />
		</StaticRouter>
	);
});
