import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/Home";
import Loading from "./components/Loading";

const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Router>
			<Route exact path="/" component={HomePage} />
			<PrivateRoute exact path="/events" component={NavigationBar} />
		</Router>
	);
};

export default App;
