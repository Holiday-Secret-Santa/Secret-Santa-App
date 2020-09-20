import React from "react";
import { Row, Form } from "antd";
import { FormInputText, FormInputNumber } from "./../../components/FormInput";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import { AddButton } from "./../../components/Button";
import "./style.css";

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

// Creates the Add Gift Pages
const AddGift = () => {
	return (
		<Row gutter={[30, 30]} style={{ padding: 20 }} className="addGiftForm">
			<ResponsiveColumn lg={24}>
				<Form name="nest-messages">
					<h1>Add Gift Ideas</h1>
					{/* Input for gift description*/}
					<FormInputText
						name="description"
						label="Description"
						rules={descriptionFieldRules}
					/>
					<FormInputText name="url" label="Link" rules={giftLinkRules} />
					<FormInputNumber name="price" label="Price" rules={giftPriceRules} />
					<AddButton text="Add Gift" />
				</Form>
			</ResponsiveColumn>
		</Row>
	);
};

export default AddGift;
