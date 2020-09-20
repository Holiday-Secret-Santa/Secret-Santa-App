import React from "react";
import { Form } from "antd";

// Creating form input component for text entries
const FormInput = (props) => {
	return (
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
			{props.children}
		</Form.Item>
	);
};

// Exporting component
export default FormInput;
