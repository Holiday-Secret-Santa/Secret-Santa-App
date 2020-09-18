import React from "react";
import { Table } from "antd";

const TableComp = ({ dataSource, columns }) => {
	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			pagination={{ pageSize: 50 }}
			scroll={{ y: 240 }}
		/>
	);
};

export default TableComp;
