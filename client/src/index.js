import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth0-provider-with-history";
import "antd/dist/antd.css";

// add Auth0 => Auth0ProviderWithHistory
ReactDOM.render(
	<Router>
		<Auth0ProviderWithHistory>
			<App />
		</Auth0ProviderWithHistory>
	</Router>,
	document.getElementById("root")
);
