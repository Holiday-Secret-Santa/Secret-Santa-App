import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";
import LoginLink from "../LoginLink";
import SignupLink from "./../SignupLink";
import LogoutLink from "../LogoutLink";
import ProfileLink from "../ProfileLink";
import { useAuth0 } from "@auth0/auth0-react";

/**
 *  Navbar Component using {Link}
 */
function NavigationBar() {
	const { isAuthenticated } = useAuth0();

	return (
		<Navbar bg="light" shadow="lg" expand="lg">
			{/* nav bar logo placeholder here */}
			<Navbar.Toggle aria-controls="navbar-nav" />
			<Navbar.Collapse>
				{isAuthenticated ? (
					<Nav className="ml-auto">
						<ProfileLink />
						<LogoutLink />
					</Nav>
				) : (
					<Nav className="ml-auto">
						<LoginLink />
						<SignupLink />
					</Nav>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
}

export default NavigationBar;
