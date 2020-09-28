import React from "react";
import FormInput from "./FormInput";
import { DatePicker } from "antd";

// Creating form input component for text entries
const FormInputDate = (props) => {
	const dateFormat = "DD/MM/YYYY";
	return (
		<FormInput {...props}>
			<DatePicker format={dateFormat} />
		</FormInput>
	);
};

// Exporting component
export default FormInputDate;
