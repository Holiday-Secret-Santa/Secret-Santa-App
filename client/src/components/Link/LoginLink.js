import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

// added login link using for authenticate the user once enter to the page (could change to button component and keep the auth0 )
const LoginLink = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Link data-testid="login-btn" to="" onClick={() => loginWithRedirect()}>
			Log In / Signup
		</Link>
	);
};

export default LoginLink;
