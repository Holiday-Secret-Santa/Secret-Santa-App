import React from "react";
import { Form, Input } from "antd";
import Button from "./../Button";
import DateTimeIinput from "../DateTimeInput/index";
import "antd/dist/antd.css";
import "./style.css";

const createFormItem = (key, name, label, children) => {
	return (
		<Form.Item key={key} name={name} label={label} rules={[{ required: true }]}>
			{children}
		</Form.Item>
	);
};

const EventForm = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log(values);
	};

	return (
		<Form
			form={form}
			onFinish={onFinish}
			name="newEventForm"
			className="newEventForm"
		>
			<h1 className="new-event-title">Create New Event</h1>

			{createFormItem(
				2,
				"Event Title",
				"Your Event Title",
				<Input placeholder="Enter Title Here"></Input>
			)}
			<DateTimeIinput className="dateTimeInput" />

			{createFormItem(
				3,
				"Location",
				"Location",
				<Input placeholder="Enter address or virtual meeting link"></Input>
			)}
			<Form.Item className="submitBtn">
				<Button text="Create Event" />
			</Form.Item>
		</Form>
	);
};

export default EventForm;
