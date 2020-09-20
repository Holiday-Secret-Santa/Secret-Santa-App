import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image, Descriptions } from "antd";
import ResponsiveColumn from "../../components/ResponsiveColumn";

const ProfilePage = () => {
	const { user } = useAuth0();
	const { name, picture, email } = user ? user : {};

	return (
		<div>
			<Row style={{ padding: 20 }}>
				<ResponsiveColumn>
					<h3>Profile</h3>
				</ResponsiveColumn>
			</Row>
			<Row gutter={[30, 30]} style={{ padding: 20 }}>
				<ResponsiveColumn>
					<Image src={picture} />
					<Descriptions title="User Info">
						<Descriptions.Item label="UserName">{name}</Descriptions.Item>
						<Descriptions.Item label="Email">{email}</Descriptions.Item>
					</Descriptions>
				</ResponsiveColumn>
			</Row>
		</div>
	);
};

export default ProfilePage;
