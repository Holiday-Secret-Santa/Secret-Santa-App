import React from "react";
import { Table, Pagination } from "antd";

const TableComp = ({ dataSource, columns }) => {
	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			pagination={{ pageSize: 5 }}
		/>
	);
};

export default TableComp;
