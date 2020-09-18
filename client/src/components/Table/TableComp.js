import React from "react";
import { Table } from "antd";

const TableComp = ({ dataSource, columns }) => {
	return (
		<Table
			title={() => "You are the Secret Santa for ... "}
			dataSource={dataSource}
			columns={columns}
			pagination={{ pageSize: 5 }}
			className="custom-table-style"
		/>
	);
};

export default TableComp;
