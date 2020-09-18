import React from "react";
import { Table } from "antd";

const TableComp = ({ dataSource, columns }) => {
	return <Table dataSource={dataSource} columns={columns} />;
};

export default TableComp;
