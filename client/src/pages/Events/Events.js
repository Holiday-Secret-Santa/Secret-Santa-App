import React from "react";
import { Container } from "react-bootstrap";
import "./style.css";
import LogoutLink from "../../components/LogoutLink";

const EventsPage = () => {
	return (
		<Container fluid className="p-0">
			<h1>Events Page</h1>
			<LogoutLink />
		</Container>
	);
};

export default EventsPage;
