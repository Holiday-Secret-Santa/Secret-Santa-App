import React from "react";
import { Menu, Image, Tooltip } from "antd";
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

const color = "rgba(90, 136, 110, 0.7)";

const LogoLink = () => {
  return (
    <Link to="/" style={{ float: "left" }}>
      <Image src={appLogo} width={190} preview={false} />
    </Link>
  );
};

const AuthenticatedMenu = () => {
  return (
    <Menu mode="horizontal" className="custom-nav-style">
      <LogoLink />

      <Menu.Item
        key="4"
        icon={<LogoutOutlined style={{ fontSize: "20px" }} />}
        className="icon-custom-style"
      >
        <Tooltip title="Logout" color={color} key={color} placement="left">
          <LogoutLink />
        </Tooltip>
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<UserOutlined style={{ fontSize: "20px" }} />}
        className="icon-custom-style"
      >
        <Tooltip title="Profile" color={color} key={color} placement="left">
          <Link to="/profile"></Link>
        </Tooltip>
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<GiftOutlined style={{ fontSize: "20px" }} />}
        className="icon-custom-style"
      >
        <Tooltip title="Events" color={color} key={color} placement="left">
          <Link to="/events"></Link>
        </Tooltip>
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
