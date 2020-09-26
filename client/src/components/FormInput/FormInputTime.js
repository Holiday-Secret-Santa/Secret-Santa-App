import React from "react";
import FormInput from "./FormInput";
import { TimePicker } from "antd";

const { RangePicker } = TimePicker;
const timeFormat = "h:mm a";

// Creating form input component for time entries
const FormInputTime = (props) => {
	return (
		<FormInput {...props}>
			<RangePicker use12Hours format={timeFormat} />
		</FormInput>
	);
};

// Exporting component
export default FormInputTime;
