import React from "react";
import {Col, Row, Layout} from "antd";
import CarouselPage from "../../components/Carousel/CarouselPage";
import WelcomeMsg from "../../components/WelcomeMessage/WelcomeMsg";
import HomePageImgs from "../../components/HomePageImgs/HomePageImgs";

const HomePage = () => {
	return (
    <Layout fluid className="p-0">
      <Row>
        <Col className="col-12">
          <CarouselPage />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <WelcomeMsg className="col-12" />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <HomePageImgs />
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
