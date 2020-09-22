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
import appLogo from "./appLogo.png";

const LogoLink = () => {
	return (
		<Link to="/" style={{ float: "left", paddingRight: "70px" }}>
			<Image src={appLogo} width={200} preview={false} />
		</Link>
	);
};

const createMenuItem = (key, icon, children) => {
	return (
		<Menu.Item key={key} icon={icon} style={{ float: "right" }}>
			{children}
		</Menu.Item>
	);
};

const createMenu = (items) => {
	return (
		<Menu
			mode="horizontal"
			style={{ background: "#cad2c5", borderColor: "#2c6e49" }}
		>
			<LogoLink />
			{items}
		</Menu>
	);
};

const AuthenticatedMenu = () => {
	return createMenu(
		<>
			{createMenuItem(4, <LogoutOutlined />, <LogoutLink />)}
			{createMenuItem(3, <UserOutlined />, <Link to="/profile">Profile</Link>)}
			{createMenuItem(2, <GiftOutlined />, <Link to="/events">Events</Link>)}
		</>
	);
};

const UnauthenticatedMenu = () => {
	return createMenu(createMenuItem(4, <LoginOutlined />, <LoginLink />));
};

const NavigationBar = () => {
	const { isAuthenticated } = useAuth0();
	return isAuthenticated ? <AuthenticatedMenu /> : <UnauthenticatedMenu />;
};

export default NavigationBar;
