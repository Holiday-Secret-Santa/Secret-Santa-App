import React from "react";
import { Row, Tooltip } from "antd";
import { SettingFilled, GiftFilled } from "@ant-design/icons";
import DetailCard from "./../../components/DetailCard/DetailCard";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import { AddButton } from "./../../components/Button";
import "./style.css";

const sampleData = [
  {
    role: "organizer",
    description: "Frosty the Snow Man",
    date: "12/24/2020",
    startTime: "7:30pm",
    location: "https://virtualremoteparty.com",
    participants: "12 participants confirmed",
  },
  {
    role: "participant",
    description: "Feliz Navidad",
    date: "12/25/2020",
    startTime: "7:30pm",
    location: "https://virtualremoteparty.com",
    participants: "15 participants confirmed",
  },
  {
    role: "organizer",
    description: "Ugly Sweater Exchange Party",
    date: "12/10/2020",
    startTime: "7:30pm",
    location: "https://virtualremoteparty.com",
    participants: "12 participants confirmed",
  },
];

const getActions = (data) => {
  return [
    // Icon buttons for future use
    <span>
      <Tooltip
        title={
          data.role === "organizer"
            ? "Manage Your Gift Exchange"
            : "Add Gifts for Secret Santa"
        }
      >
        {data.role === "organizer" ? (
          <SettingFilled style={{ fontSize: "24px", color: "#2c6e49" }} />
        ) : (
          <GiftFilled style={{ fontSize: "24px", color: "#2c6e49" }} />
        )}
      </Tooltip>
    </span>,
  ];
};

const partyList = (eventsData) =>
  eventsData.map((data, index) => (
    <ResponsiveColumn key={index} lg={8}>
      <DetailCard
        title={data.description}
        actions={getActions(data)}
        date={data.date}
        startTime={data.startTime}
        location={data.location}
        participants={data.participants}
      />
    </ResponsiveColumn>
  ));

const EventsPage = () => {
  return (
    <div>
      <Row style={{ padding: 20 }}>
        <ResponsiveColumn>
          <h1>Events Page</h1>
        </ResponsiveColumn>
      </Row>
      <Row gutter={[30, 30]} style={{ padding: 20 }}>
        {partyList(sampleData)}
      </Row>
      <Row style={{ padding: 20 }}>
        <ResponsiveColumn>
          <AddButton text="Create New Event" />
        </ResponsiveColumn>
      </Row>
    </div>
  );
};

export default EventsPage;
