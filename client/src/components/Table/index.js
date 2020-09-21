import React from "react";
import { Table } from "antd";

const TableComp = ({ title, dataSource, columns }) => {
	return (
		<Table
			title={title}
			dataSource={dataSource}
			columns={columns}
			pagination={{ pageSize: 5 }}
			className="custom-table-style"
		/>
	);
};

export default TableComp;
