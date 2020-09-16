import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "antd";

const ProfilePage = () => {
	const { user } = useAuth0();
	const { name, picture, email } = user ? user : {};

	return (
		<div>
			<h3>Profile</h3>
			<Image src={picture} />
			<p>{name}</p>
			<p>{email}</p>
		</div>
	);
};

export default ProfilePage;
