import React from "react";
import { Menu, Image } from "antd";
import { Link } from "react-router-dom";
import {
	LoginOutlined,
	LogoutOutlined,
	UserOutlined,
	GiftOutlined,
	MenuUnfoldOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import LoginLink from "../LoginLink";
import LogoutLink from "../LogoutLink";
import appLogo from "./appLogo.png";
import "./style.css";
import MenuItem from "antd/lib/menu/MenuItem";

const { SubMenu } = Menu;

const LogoLink = () => {
	return (
		<Link to="/" style={{ float: "left" }}>
			<Image src={appLogo} width={200} preview={false} />
		</Link>
	);
};

const createMenuItem = (key, icon, children) => {
	return (
		<Menu.Item key={key} icon={icon} style={{ padding: "7px" }}>
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
			<MenuItem>
				<LogoLink />
			</MenuItem>
			<SubMenu
				key="SubMenu"
				icon={
					<MenuUnfoldOutlined style={{ fontSize: "20px", color: "#2c6e49" }} />
				}
				style={{ float: "right" }}
			>
				<Menu.ItemGroup>{items}</Menu.ItemGroup>
			</SubMenu>
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
