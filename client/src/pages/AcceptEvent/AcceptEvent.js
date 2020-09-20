import React from "react";
import { Row } from "antd";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import DetailCard from "./../../components/DetailCard/DetailCard";
import Button from "./../../components/Button/Button";
import "./style.css";

import "./style.css";

const AcceptEvent = () => {
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
						actions={[<Button text="Accept" />, <Button text="Not Going" />]}
					/>
				</ResponsiveColumn>
			</Row>
		</>
	);
};

export default AcceptEvent;
