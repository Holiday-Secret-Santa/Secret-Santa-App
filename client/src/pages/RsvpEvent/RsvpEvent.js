import React, { useState } from "react";
import { Row, notification } from "antd";
import ResponsiveColumn from "../../components/ResponsiveColumn";
import DetailCard from "../../components/DetailCard/DetailCard";
import Button from "../../components/Button";
import "./style.css";

const processStatusAction = (status, setStatusCallBack) => {
	if (status === "Accepted") {
		notification.success({
			message: "Going",
			description: "You Have been added to the event list",
		});
	} else if (status === "Rejected") {
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
								disabled={status === "Accepted"}
								action={() => processStatusAction("Accepted", setStatus)}
							/>,
							<Button
								testid="not-going-btn"
								text="Not Going"
								disabled={status === "Rejected"}
								bgColor="#D62828"
								action={() => processStatusAction("Rejected", setStatus)}
							/>,
						]}
					/>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default RsvpEvent;
