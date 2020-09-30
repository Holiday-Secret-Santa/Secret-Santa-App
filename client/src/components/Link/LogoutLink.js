// added logout link integrate with Auth0
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

const color = "rgba(90, 136, 110, 0.7)";

const LogoutLink = () => {
	const { logout } = useAuth0();
	return (
		<Tooltip title="Logout" color={color} key={color} placement="left">
			<Link
				data-testid="logout-btn"
				to=""
				onClick={() => logout({ returnTo: window.location.origin })}
			></Link>
		</Tooltip>
	);
};

export default LogoutLink;
