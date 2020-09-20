import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";
import EventsPage from "./pages/Events/Events";
import ProfilePage from "./pages/Profile/Profile";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import RsvpEvent from "./pages/RsvpEvent/RsvpEvent";
import OrganizerEvent from "./pages/OrganizerEvent/OrganizerEvent";
import ParticipantEvent from "./pages/ParticipantEvent/ParticipantEvent";
import AddGift from "./pages/AddGift/AddGift";
import Loading from "./components/Loading";
import { Layout } from "antd";
import HomePage from "./pages/HomePage/HomePage";

import "./app.css";

const { Content } = Layout;

const AppContent = (
	<Content className="site-layout">
		<Switch>
			<Route exact path="/" component={HomePage} />
			<PrivateRoute exact path="/events" component={EventsPage} />
			<PrivateRoute exact path="/profile" component={ProfilePage} />
			<PrivateRoute exact path="/events/create" component={CreateEvent} />
			<PrivateRoute
				exact
				path="/events/:id/organizer"
				component={OrganizerEvent}
			/>
			<PrivateRoute
				exact
				path="/events/:id/participant"
				component={ParticipantEvent}
			/>
			<Route exact path="/events/:id/participant/addgift" component={AddGift} />
			<Route
				exact
				path="/events/:id/rsvp/:participantid"
				component={RsvpEvent}
			/>
		</Switch>
	</Content>
);

const App = () => {
	const { isLoading } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Layout>
			<NavigationBar />
			<Layout>{AppContent}</Layout>
		</Layout>
	);
};

export default App;
