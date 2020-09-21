import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image, Descriptions, Row } from "antd";
import ResponsiveColumn from "../../components/ResponsiveColumn";
import DescriptionItem from "../../components/DescriptionItem";

const ProfilePage = () => {
	const { user } = useAuth0();
	const { name, picture, email } = user ? user : {};

	return (
		<div>
			<Row style={{ padding: 15 }}>
				<ResponsiveColumn lg={20}>
					<h3>Profile</h3>
				</ResponsiveColumn>
			</Row>
			<Row gutter={[30, 30]} style={{ padding: 15 }}>
				<ResponsiveColumn lg={20}>
					<Image src={picture} />
				</ResponsiveColumn>
			</Row>
			<Row>
				<ResponsiveColumn gutter={[30, 30]} style={{ padding: 15 }} lg={20}>
					<DescriptionItem title="User Info" label="Name" data={name} />
					<DescriptionItem label="Email" data={email} />
				</ResponsiveColumn>
			</Row>
		</div>
	);
};

export default ProfilePage;
