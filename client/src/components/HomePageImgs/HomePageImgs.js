import React, {Component} from "react";
import { Row, Card } from "antd";
import ResponsiveColumn from "../ResponsiveColumn/index";
import images from "./imageData.json";
import "./style.css";

const { Meta } = Card;

const CardHome = (props) => {
  return (
    <Card className="image-card" hoverable key={props.id} cover={<img alt={props.alt} src={props.image} />}>
      <Meta title={props.title} description={props.description} />
    </Card>);
};

class HomePageImgs extends Component {
    state = {
      images
    };

    render () {
      return (
        <div>
          <Row gutter={[30, 30]} style={{ padding: 20 }}>
            {this.state.images.map(image => (
              <ResponsiveColumn lg={8}>
                <CardHome 
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

