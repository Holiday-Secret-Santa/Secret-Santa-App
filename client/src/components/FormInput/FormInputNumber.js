import React from "react";
import FormInput from "./FormInput";
import { InputNumber } from "antd";

// Creating form input component for text entries
const FormInputNumber = (props) => {
	return (
		<FormInput {...props}>
			<InputNumber />
		</FormInput>
	);
};

// Exporting component
export default FormInputNumber;
