import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
// added useAuth0 from @auth0/auth0-react" to handle the routes
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/Home";
import Loading from "./components/Loading";

const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	// placeholder app router with Auth0 integration and external home page that will be replace it by the first wireframe
	return (
		<Router>
			{/* no private routes must be place it inside Route*/}
			<Route exact path="/" component={HomePage} />
			{/* private routes must be place it inside PrivateRoute */}
			<PrivateRoute exact path="/events" component={NavigationBar} />
		</Router>
	);
};

export default App;