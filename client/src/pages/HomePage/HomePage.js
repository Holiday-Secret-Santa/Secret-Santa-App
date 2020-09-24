import React from "react";
import { Row, Layout } from "antd";
import CarouselPage from "../../components/Carousel/CarouselPage";
import WelcomeMsg from "../../components/WelcomeMessage/WelcomeMsg";
import HomePageImgs from "../../components/HomePageImgs/HomePageImgs";
import ResponsiveColumn from "../../components/ResponsiveColumn";

const HomePage = () => {
	return (
		<Layout fluid className="p-0">
			<Row>
				<ResponsiveColumn>
					<CarouselPage />
				</ResponsiveColumn>
			</Row>
			<Row justify="center">
				<WelcomeMsg />
			</Row>
			<Row justify="center">
				<ResponsiveColumn>
					<HomePageImgs />
				</ResponsiveColumn>
			</Row>
		</Layout>
	);
};

export default HomePage;
