import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Row } from "antd";
import ResponsiveColumn from "../../components/ResponsiveColumn";
import "./style.css";

const ProfilePage = () => {
	const { user } = useAuth0();
	const { name, picture, email } = user ? user : {};

	return (
		<div className="center">
			<Row style={{ padding: 15 }}>
				<ResponsiveColumn lg={24}>
					<h3 className="font-style-title">Profile</h3>
				</ResponsiveColumn>
			</Row>
			<Row gutter={[30, 30]} style={{ padding: 15 }}>
				<ResponsiveColumn lg={24}>
					<img src={picture} alt="profile" className="profile" />
				</ResponsiveColumn>
			</Row>
			<Row gutter={[30, 30]} style={{ padding: 15 }}>
				<ResponsiveColumn lg={24}>
					<p className="font-style-header">User Info</p>
					<div className="font-style-text">
						<p>Name: {name}</p>
						<p>Email: {email}</p>
					</div>
				</ResponsiveColumn>
			</Row>
		</div>
	);
};

export default ProfilePage;
