import React from "react";
import { Form, InputNumber } from "antd";

// Creating form input component for text entries
const FormInputNumber = (props) => (
	<Form.Item
		name={props.name}
		label={
			<label
				style={{
					color: "#2c6e49",
					fontSize: "16px",
					fontWeight: "bold",
				}}
			>
				{props.label}
			</label>
		}
		rules={props.rules}
	>
		<InputNumber />
	</Form.Item>
);

// Exporting component
export default FormInputNumber;
