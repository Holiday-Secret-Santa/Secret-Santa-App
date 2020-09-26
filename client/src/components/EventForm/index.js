import React from "react";
import { Form, Row } from "antd";
import Button from "./../Button";
import ResponsiveColumn from "./../ResponsiveColumn";
import { FormInputText, FormInputDate, FormInputTime } from "./../FormInput";
import "antd/dist/antd.css";
import "./style.css";

const TitleInput = () => {
	return (
		<ResponsiveColumn lg={24}>
			<FormInputText
				name="title"
				label="Title"
				placeholder="Event title"
				rules={[{ required: true, message: "Please enter a title" }]}
			/>
		</ResponsiveColumn>
	);
};

const DateInput = () => {
	return (
		<ResponsiveColumn lg={24}>
			<Row justify="space-between" gutter={[10, 10]}>
				<ResponsiveColumn lg={12}>
					<FormInputDate
						name="date"
						label="Date"
						rules={[{ required: true, message: "Please enter a date" }]}
					/>
				</ResponsiveColumn>
				<ResponsiveColumn lg={12}>
					<FormInputTime
						name="time"
						label="Time"
						rules={[{ required: true, message: "Please enter a time" }]}
					/>
				</ResponsiveColumn>
			</Row>
		</ResponsiveColumn>
	);
};

const LocationInput = () => {
	return (
		<ResponsiveColumn lg={24}>
			<FormInputText
				name="location"
				label="Location"
				placeholder="Enter address or virtual meeting link"
				rules={[{ required: true, message: "Please enter a location" }]}
			/>
		</ResponsiveColumn>
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
