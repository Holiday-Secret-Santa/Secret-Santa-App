import React from "react";
import { Form, Row } from "antd";
import Button from "./../Button";
import ResponsiveColumn from "./../ResponsiveColumn";
import { FormInputText, FormInputDate, FormInputTime } from "./../FormInput";
import { GraphQLClient, gql } from "graphql-request";
import "antd/dist/antd.css";
import "./style.css";

const EventForm = () => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log(values);
	};

	return (
		<Row justify="center" style={{ padding: "40px" }}>
			<ResponsiveColumn lg={16}>
				<Form
					form={form}
					onFinish={onFinish}
					name="newEventForm"
					className="newEventForm"
				>
					<Row>
						<ResponsiveColumn lg={24}>
							<FormInputText
								name="title"
								label="Title"
								placeholder="Event title"
								rules={[{ required: true, message: "Please enter a title" }]}
							/>
						</ResponsiveColumn>
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
						<ResponsiveColumn lg={24}>
							<FormInputText
								name="location"
								label="Location"
								placeholder="Enter address or virtual meeting link"
								rules={[{ required: true, message: "Please enter a location" }]}
							/>
						</ResponsiveColumn>
						<ResponsiveColumn lg={24}>
							<Form.Item className="submitBtn">
								<Button text="Create Event" action={form.submit} />
							</Form.Item>
						</ResponsiveColumn>
					</Row>
				</Form>
			</ResponsiveColumn>
		</Row>
	);
};

export default EventForm;
