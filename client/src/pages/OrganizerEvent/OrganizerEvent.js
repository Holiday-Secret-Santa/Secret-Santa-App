import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import LogoutLink from "../../components/LogoutLink";

const OrganizerEvent = () => {
	return (
		<Container fluid className="p-0">
			<Row>
				<Col>
					<h1>Organizer Event Page</h1>
					<LogoutLink />
				</Col>
			</Row>
		</Container>
	);
};

export default OrganizerEvent;
