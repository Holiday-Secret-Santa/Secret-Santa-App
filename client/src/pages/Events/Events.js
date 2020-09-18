import React from "react";
import { Row, Col, Button, Layout } from "antd";
import CardComp from "../../components/CardComp";
import { PlusCircleOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";
import "./style.css";

const { Content, Footer } = Layout;

const EventsPage = () => {
	return (
		<>
			<Layout>
				<Content className="white">
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
						<Col className="gutter-row">
							<h1>Events Page</h1>
						</Col>
					</Row>
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
						<Col className="gutter-row">
							<CardComp description="Frosty the Snow Man" />
						</Col>
						<Col className="gutter-row">
							<CardComp description="Feeling the Holiday Spirit" />
						</Col>
					</Row>
					<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
						<Col className="gutter-row">
							<Button
								type="primary"
								shape="round"
								icon={<PlusCircleOutlined />}
								size="large"
								style={{ backgroundColor: "#2c6e49", borderColor: "#2c6e49" }}
							>
								Create New Event
							</Button>
						</Col>
					</Row>
				</Content>
			</Layout>
		</>
	);
};

export default EventsPage;
