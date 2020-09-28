import React from "react";
import { Row, Form, notification } from "antd";
import { FormInputText, FormInputNumber } from "./../../components/FormInput";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import { AddButton } from "./../../components/Button";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";
import { createGift } from "../../actions/graphql.api";

const descriptionFieldRules = [
	{ required: true, message: "please enter gift description" },
];

const giftLinkRules = [
	{ required: true, message: "please enter link to gift" },
];

const giftPriceRules = [
	{
		required: true,
		type: "number",
		min: 1,
		max: 100,
		message: "please enter price between $1 and $100",
	},
];

const success = () => {
	notification.success({
		message: "Gift Added",
		description: "Gift has been added to your wish list",
	});
};

const showError = (error) => {
	notification.error({
		message: "Error",
		description: "Unable to add your gift due to error: " + error,
	});
};

// Creates the Add Gift Pages
const AddGift = (props) => {
	const { getAccessTokenSilently } = useAuth0();
	const [form] = Form.useForm();
	const participantId = props.match.params.participantid;

	const onFinish = (values) => {
		createGift(
			values.description,
			values.url,
			values.price,
			getAccessTokenSilently(),
			parseInt(participantId),
			success,
			showError
		);

		form.resetFields();
	};

	return (
		<Row gutter={[30, 30]} style={{ padding: 20 }} className="addGiftForm">
			<ResponsiveColumn lg={24}>
				<Form form={form} onFinish={onFinish} name="nest-messages">
					<h1>Add Gift Ideas</h1>
					{/* Input for gift description*/}
					<FormInputText
						name="description"
						label="Description"
						rules={descriptionFieldRules}
					/>
					<FormInputText name="url" label="Link" rules={giftLinkRules} />
					<FormInputNumber name="price" label="Price" rules={giftPriceRules} />
					<AddButton htmlType="submit" text="Add Gift" />
				</Form>
			</ResponsiveColumn>
		</Row>
	);
};

export default AddGift;
