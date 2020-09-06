import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

// added login link using for authenticate the user once enter to the page (could change to button component and keep the auth0 )
const LoginLink = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-login">Log In</Tooltip>}
    >
      <Nav.Link onClick={() => loginWithRedirect()}>
        <FontAwesomeIcon icon={faSignInAlt} size="lg" />
      </Nav.Link>
    </OverlayTrigger>
  );
};

export default LoginLink;
