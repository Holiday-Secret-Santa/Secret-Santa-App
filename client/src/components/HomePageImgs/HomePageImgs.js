import React from "react";
import { Row, Card } from "antd";
import ResponsiveColumn from "../ResponsiveColumn/index";
import friends from "./imgs/friends.jpg";
import gifts2 from "./imgs/gifts2.jpg";
import gifts3 from "./imgs/gifts3.jpg";
import "./style.css";
const { Meta } = Card;

function HomePageImgs() {
  return (
    <div>
      <Row gutter={[30, 30]} style={{ padding: 20 }}>
        <ResponsiveColumn lg={8}>
          <Card hoverable className="image-card" cover={<img alt="gifts3" src={gifts3} />}>
            <Meta title="Create or join an event" description="You can create, invite and manage your event's guests, or join the party!" />
          </Card>
        </ResponsiveColumn>
        <ResponsiveColumn lg={8}>
          <Card hoverable className="image-card" cover={<img alt="gifts2" src={gifts2} />}>
            <Meta title="Gift Selection" description="Access your Secret Santa's wish list and purchase via the app!" />
          </Card>
        </ResponsiveColumn>
        <ResponsiveColumn lg={8}>
          <Card hoverable className="image-card" cover={<img alt="friends" src={friends} />} bordered={false}>
            <Meta title="Secret Santa Participants" description="See who else is participating and who your Secret Santa might be!" />
          </Card>
        </ResponsiveColumn>
      </Row>
    </div>
  );
}

export default HomePageImgs;

