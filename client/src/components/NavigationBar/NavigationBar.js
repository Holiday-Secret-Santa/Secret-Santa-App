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
import { LoginLink, LogoutLink } from "../Link";
import appLogo from "./appLogo.png";
import "./style.css";

const LogoLink = () => {
	return (
		<Link to="/" style={{ float: "left" }}>
			<Image src={appLogo} width={200} preview={false} />
		</Link>
	);
};

const AuthenticatedMenu = () => {
	return (
		<Menu mode="horizontal" className="custom-nav-style">
			<LogoLink />
			<Menu.Item
				key="2"
				icon={<GiftOutlined style={{ fontSize: "20px" }} />}
				className="icon-custom-style"
			>
				<Link to="/events">Events</Link>
			</Menu.Item>
			<Menu.Item
				key="3"
				icon={<UserOutlined style={{ fontSize: "20px" }} />}
				className="icon-custom-style"
			>
				<Link to="/profile">Profile</Link>
			</Menu.Item>
			<Menu.Item
				key="4"
				icon={<LogoutOutlined style={{ fontSize: "20px" }} />}
				className="icon-custom-style"
			>
				<LogoutLink />
			</Menu.Item>
		</Menu>
	);
};

const UnauthenticatedMenu = () => {
	return (
		<Menu mode="horizontal" className="custom-nav-style">
			<LogoLink />
			<Menu.Item
				key="5"
				icon={<LoginOutlined style={{ fontSize: "20px" }} />}
				className="icon-custom-style"
			>
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
