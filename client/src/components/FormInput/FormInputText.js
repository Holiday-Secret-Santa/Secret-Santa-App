import React from "react";
import FormInput from "./FormInput";
import { Input } from "antd";

// Creating form input component for text entries
const FormInputText = (props) => {
	return (
		<FormInput {...props}>
			<Input
				aria-label={props.label}
				placeholder={props.placeholder}
				onChange={props.onChange}
				type="text"
			/>
		</FormInput>
	);
};

// Exporting component
export default FormInputText;
