import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

const color = "rgba(90, 136, 110, 0.7)";

// added login link using for authenticate the user once enter to the page (could change to button component and keep the auth0 )
const LoginLink = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Tooltip title="Login/Signup" color={color} key={color} placement="left">
			<Link
				data-testid="login-btn"
				to=""
				onClick={() => loginWithRedirect()}
			></Link>
		</Tooltip>
	);
};

export default LoginLink;
