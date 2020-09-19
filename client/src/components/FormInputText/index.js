import React from "react";
import { Form, Input } from "antd";

// Creating form input component for text entries
const FormInputText = (props) => (
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
		<Input />
	</Form.Item>
);

// Exporting component
export default FormInputText;
