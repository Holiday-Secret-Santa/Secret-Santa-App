import React from "react";
import { Col } from "antd";

const ResponsiveColumn = ({ children, lg, offset, span, flex, style }) => {
  return (
    <Col
      xs={24}
      sm={24}
      md={24}
      lg={lg}
      offset={offset}
      span={span}
      flex={flex}
      style={style}
    >
      {children}
    </Col>
  );
};

export default ResponsiveColumn;
