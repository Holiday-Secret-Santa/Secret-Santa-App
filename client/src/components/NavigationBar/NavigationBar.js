import React from "react";
import { Menu, Image } from "antd";
import { Link } from "react-router-dom";
import {
	LoginOutlined,
	LogoutOutlined,
	UserOutlined,
	GiftOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import LoginLink from "../LoginLink";
import LogoutLink from "../LogoutLink";
import logo from "./logo.png";

const LogoLink = () => {
	return (
		<Link to="/" style={{ float: "left", paddingRight: "70px" }}>
			<Image src={logo} width={200} preview={false} />
		</Link>
	);
};

const AuthenticatedMenu = () => {
	return (
		<Menu mode="horizontal">
			<LogoLink />
			<Menu.Item key="4" icon={<LogoutOutlined />} style={{ float: "right" }}>
				<LogoutLink />
			</Menu.Item>
			<Menu.Item key="2" icon={<GiftOutlined />} style={{ float: "right" }}>
				<Link to="/events">Events</Link>
			</Menu.Item>
			<Menu.Item key="3" icon={<UserOutlined />} style={{ float: "right" }}>
				<Link to="/profile">Profile</Link>
			</Menu.Item>
		</Menu>
	);
};

const UnauthenticatedMenu = () => {
	return (
		<Menu mode="horizontal">
			<LogoLink />
			<Menu.Item key="5" icon={<LoginOutlined />} style={{ float: "right" }}>
				<LoginLink />
			</Menu.Item>
		</Menu>
	);
};

const NavigationBar = () => {
	const { isAuthenticated } = useAuth0();
	return isAuthenticated ? <AuthenticatedMenu /> : <UnauthenticatedMenu />;
};

export default NavigationBar;
