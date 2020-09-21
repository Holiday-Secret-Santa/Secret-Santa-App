import React, { useState } from "react";
import { Row, notification } from "antd";
import ResponsiveColumn from "../../components/ResponsiveColumn";
import DetailCard from "../../components/DetailCard/DetailCard";
import Button from "../../components/Button";
import "./style.css";

const processStatusAction = (status, setStatusCallBack) => {
	if (status === "going") {
		notification.success({
			message: "Going",
			description: "You Have been added to the event list",
		});
	} else if (status === "not going") {
		notification.warn({
			message: "Not Going",
			description: "No worries, we will notify the event host",
		});
	}
	setStatusCallBack(status);
};

const RsvpEvent = () => {
	const [status, setStatus] = useState(null);
	return (
		<>
			<Row gutter={[30, 30]} justify="center">
				<ResponsiveColumn style={{ padding: 40 }} lg={9} md={9}>
					<DetailCard
						title="You are invited"
						date="date"
						startTime="9:00 am"
						location="My House"
						participants="12 people"
						actions={[
							<Button
								testid="going-btn"
								text="Going"
								disabled={status === "going"}
								action={() => processStatusAction("going", setStatus)}
							/>,
							<Button
								testid="not-going-btn"
								text="Not Going"
								disabled={status === "not going"}
								bgColor="#D62828"
								action={() => processStatusAction("not going", setStatus)}
							/>,
						]}
					/>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default RsvpEvent;
