import React from "react";
import { Row, Card } from "antd";
import ResponsiveColumn from "../ResponsiveColumn/index";
import friends from "./imgs/friends.jpg";
import gifts2 from "./imgs/gifts2.jpg";
import gifts3 from "./imgs/gifts3.jpg";
import "./style.css";
const { Meta } = Card;

const CardHome = (props) => {
  return (
    <Card hoverable className="image-card" cover={<img alt={props.alt} src={props.src} />}>
      <Meta title={props.title} description={props.description} />
    </Card>);
};

function HomePageImgs() {
  return (
    <div>
      <Row gutter={[30, 30]} style={{ padding: 20 }}>
        <ResponsiveColumn lg={8}>
          {<CardHome alt="gifts3" src={gifts3} title="Create or join an event" description="You can create, invite and manage your event's guests, or join the party!" />}
        </ResponsiveColumn>
        <ResponsiveColumn lg={8}>
          {<CardHome alt="gifts2" src={gifts2} title="Gift Selection" description="Access your Secret Santa's wish list and purchase via the app!" />}
        </ResponsiveColumn>
        <ResponsiveColumn lg={8}>
          {<CardHome alt="friends" src={friends} title="Secret Santa Participants" description="See who else is participating and who your Secret Santa might be!" />}
        </ResponsiveColumn>
      </Row>
    </div>
  );
}

export default HomePageImgs;

