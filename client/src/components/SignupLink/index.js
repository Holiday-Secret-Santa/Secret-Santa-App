import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const SignupLink = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Link onClick={() => loginWithRedirect({ screen_hint: "signup" })}>
			Signup
		</Link>
	);
};

export default SignupLink;
