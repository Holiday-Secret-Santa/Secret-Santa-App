import React, { Component } from "react";
import { Row, Card } from "antd";
import ResponsiveColumn from "../ResponsiveColumn/index";
import images from "./imageData.json";
import "./style.css";

const { Meta } = Card;

const CardHome = ({ title, description, image, id, alt }) => {
	return (
		<Card
			className="image-card"
			hoverable
			key={id}
			cover={<img alt={alt} src={image} />}
		>
			<Meta title={title} description={description} />
		</Card>
	);
};

class HomePageImgs extends Component {
	state = {
		images,
	};

	render() {
		return (
			<div>
				<Row gutter={[30, 30]} style={{ padding: 40 }}>
					{this.state.images.map((image) => (
						<ResponsiveColumn lg={8}>
							<CardHome
								style={{ textAlign: "center" }}
								id={image.id}
								alt={image.alt}
								title={image.title}
								description={image.description}
								image={image.photo}
							/>
						</ResponsiveColumn>
					))}
				</Row>
			</div>
		);
	}
}

export default HomePageImgs;
