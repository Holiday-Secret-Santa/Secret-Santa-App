// added logout link integrate with Auth0

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LogoutLink = () => {
	const { logout } = useAuth0();
	return (
		<Link
			data-testid="logout-btn"
			to=""
			onClick={() => logout({ returnTo: window.location.origin })}
		></Link>
	);
};

export default LogoutLink;
