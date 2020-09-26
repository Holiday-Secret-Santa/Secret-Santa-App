import React from "react";
import { Form, Row } from "antd";
import Button from "./../Button";
import ResponsiveColumn from "./../ResponsiveColumn";
import { FormInputText, FormInputDate, FormInputTime } from "./../FormInput";
import "antd/dist/antd.css";
import "./style.css";

const getRule = (message) => [{ required: true, message: message }];

const TextColumnField = ({ name, label, placeholder, message }) => {
	return (
		<ResponsiveColumn lg={24}>
			<FormInputText
				name={name}
				label={label}
				placeholder={placeholder}
				rules={getRule(message)}
			/>
		</ResponsiveColumn>
	);
};

const TitleInput = () => {
	return (
		<TextColumnField
			name="title"
			label="Title"
			placeholder="Event title"
			message="Please enter a title"
		/>
	);
};

const DateSubField = ({ name, label, message, isDate, isTime }) => {
	return (
		<ResponsiveColumn lg={12}>
			{isDate && (
				<FormInputDate
					name={name}
					label={label}
					rules={getRule("Please enter a " + name)}
				/>
			)}
			{isTime && (
				<FormInputTime
					name={name}
					label={label}
					rules={getRule("Please enter a " + name)}
				/>
			)}
		</ResponsiveColumn>
	);
};

const DateInput = () => {
	return (
		<ResponsiveColumn lg={24}>
			<Row justify="space-between" gutter={[10, 10]}>
				<DateSubField isDate name="date" label="Date" />
				<DateSubField isTime name="time" label="Time" />
			</Row>
		</ResponsiveColumn>
	);
};

const LocationInput = () => {
	return (
		<TextColumnField
			name="location"
			label="Location"
			placeholder="Enter address or virtual meeting link"
			message="Please enter a location"
		/>
	);
};

const ButtonInput = ({ action }) => {
	return (
		<ResponsiveColumn lg={24}>
			<Form.Item className="submitBtn">
				<Button testid="create-btn" text="Create Event" action={action} />
			</Form.Item>
		</ResponsiveColumn>
	);
};

const EventForm = ({ action }) => {
	const [form] = Form.useForm();
	return (
		<Row justify="center" style={{ padding: "40px" }}>
			<ResponsiveColumn lg={16}>
				<Form
					form={form}
					onFinish={action}
					name="newEventForm"
					className="newEventForm"
				>
					<Row>
						<TitleInput />
						<DateInput />
						<LocationInput />
						<ButtonInput action={form.submit} />
					</Row>
				</Form>
			</ResponsiveColumn>
		</Row>
	);
};

export default EventForm;
