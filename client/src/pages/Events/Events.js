import React from "react";
import "./style.css";
import LoginLink from "./../../components/LoginLink";
import SignupLink from "./../../components/SignupLink";
import { useAuth0 } from "@auth0/auth0-react";

const EventsPage = () => {
	const { isAuthenticated } = useAuth0();
	return (
		<div>
			{!isAuthenticated ? (
				<div>
					<LoginLink /> <SignupLink />
				</div>
			) : (
				<h1>Events Page</h1>
			)}
		</div>
	);
};

export default EventsPage;
