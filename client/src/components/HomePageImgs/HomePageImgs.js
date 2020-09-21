import React from "react";
import { Col, Row, Card } from "antd";
import friends from "./imgs/friends.jpg";
import gifts2 from "./imgs/gifts2.jpg";
import gifts3 from "./imgs/gifts3.jpg";
import "./style.css";
const { Meta } = Card;

function HomePageImgs() {
    return (
        <div>
            <Row justify="space-around" gutter={[16, 16]}>
                <Col span={8}>
                    <Card hoverable className="image-card" cover={<img alt="gifts3" src={gifts3} />}>
                        <Meta title="Create or join an event" description="You can create, invite and manage your event's guests, or join the party!" />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card hoverable className="image-card" cover={<img alt="gifts2" src={gifts2} />}>
                    <Meta title="Gift Selection" description="Access your Secret Santa's wish list and purchase via the app!" />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card hoverable className="image-card" cover={<img alt="friends" src={friends} />} bordered={false}>
                        <Meta title="Secret Santa Participants" description="See who else is participating and who your Secret Santa might be!" />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default HomePageImgs;

