import React from "react";
import FormInput from "./FormInput";
import { Input } from "antd";

// Creating form input component for text entries
const FormInputText = (props) => {
	return (
		<FormInput {...props}>
			<Input placeholder={props.placeholder} />
		</FormInput>
	);
};

// Exporting component
export default FormInputText;
