import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
// added useAuth0 from @auth0/auth0-react" to handle the routes
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";

import EventsPage from "./pages/Events/Events";
import ProfilePage from "./pages/Profile/Profile";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import AcceptEvent from "./pages/AcceptEvent/AcceptEvent";
import OrganizerEvent from "./pages/OrganizerEvent/OrganizerEvent";
import ParticipantEvent from "./pages/ParticipantEvent/ParticipantEvent";
import Loading from "./components/Loading";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./app.css";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
	const { isLoading } = useAuth0();
	const { Content } = Layout;

	if (isLoading) {
		return <Loading />;
	}

	// placeholder app router with Auth0 integration and external home page that will be replace it by the first wireframe
	return (
		<Layout>
			<NavigationBar />
			<Layout>
				<Content className="site-layout"></Content>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<PrivateRoute exact path="/events" component={EventsPage} />
					<PrivateRoute exact path="/profile" component={ProfilePage} />
					<PrivateRoute exact path="/events/create" component={CreateEvent} />
					<PrivateRoute
						exact
						path="/events/:id/accept"
						component={AcceptEvent}
					/>
					<PrivateRoute
						exact
						path="/events/:id/organize"
						component={OrganizerEvent}
					/>
					<PrivateRoute
						exact
						path="/events/:id/participant"
						component={ParticipantEvent}
					/>
				</Switch>
			</Layout>
		</Layout>
	);
};

export default App;
