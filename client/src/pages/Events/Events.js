import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import LogoutLink from "../../components/LogoutLink";
// import { useAuth0 } from "@auth0/auth0-react";

//
const EventsPage = () => {
	return (
		<Container fluid className="p-0">
			<Row>
				<Col>
					<h1>Events Page</h1>
					<LogoutLink />
				</Col>
			</Row>
		</Container>
	);
};

export default EventsPage;
