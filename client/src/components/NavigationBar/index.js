import React from "react";
import { Layout, Menu, Image } from "antd";
import { Link } from "react-router-dom";
import {
	LoginOutlined,
	LogoutOutlined,
	UserOutlined,
	GiftOutlined,
} from "@ant-design/icons";
import { useAuth0 } from "@auth0/auth0-react";
import LoginLink from "./../LoginLink";
import LogoutLink from "./../LogoutLink";
import SignupLink from "./../SignupLink";
const logo = require("./logo.png");

const NavigationBar = () => {
	const { isAuthenticated } = useAuth0();
	const { Header } = Layout;
	return (
		<Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
			<Menu theme="dark" mode="horizontal">
				<Link to="/" style={{ paddingRight: 70 }}>
					<Image src={logo} width={200} preview={false} />
				</Link>
				{isAuthenticated ? (
					<>
						<Menu.Item key="2" icon={<GiftOutlined />}>
							<Link to="/events">Events</Link>
						</Menu.Item>
						<Menu.Item key="3" icon={<UserOutlined />}>
							<Link to="/profile">Profile</Link>
						</Menu.Item>
						<Menu.Item key="4" icon={<LogoutOutlined />}>
							<LogoutLink />
						</Menu.Item>
					</>
				) : (
					<>
						<Menu.Item key="5" icon={<LoginOutlined />}>
							<LoginLink />
						</Menu.Item>
						<Menu.Item key="6" icon={<LoginOutlined />}>
							<SignupLink />
						</Menu.Item>
					</>
				)}
			</Menu>
		</Header>
	);
};

export default NavigationBar;

// import React from "react";
// import { Nav, Navbar } from "react-bootstrap";
// import LoginLink from "../LoginLink";
// import SignupLink from "./../SignupLink";
// import LogoutLink from "../LogoutLink";
// import ProfileLink from "../ProfileLink";
// import { useAuth0 } from "@auth0/auth0-react";
// import "./style.css";

// //  Added nav bar component placeholder with Auth0 validations
// const NavigationBar = () => {
//   const { isAuthenticated } = useAuth0();

//   return (
//     <Navbar bg="light" shadow="lg" expand="lg">
//       {/* nav bar logo placeholder here */}
//       <Navbar.Toggle aria-controls="navbar-nav" />
//       <Navbar.Collapse>
//         {isAuthenticated ? (
//           <Nav className="ml-auto">
//             <ProfileLink />
//             <LogoutLink />
//           </Nav>
//         ) : (
//           <Nav className="ml-auto">
//             <LoginLink />
//             <SignupLink />
//           </Nav>
//         )}
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

// export default NavigationBar;
