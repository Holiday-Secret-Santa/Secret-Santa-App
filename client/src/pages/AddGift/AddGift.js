import React from "react";
import { Row, Form, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import FormInputText from "./../../components/FormInputText";
import FormInputNumber from "./../../components/FormInputNumber";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import "./style.css";

const SubmitButton = () => {
	return (
		<Button
			type="primary"
			shape="round"
			icon={<PlusCircleOutlined />}
			size="large"
			style={{
				backgroundColor: "#2c6e49",
				borderColor: "#2c6e49",
			}}
		>
			Add Gift
		</Button>
	);
};

const DescriptionField = () => {
	return (
		<FormInputText
			name="description"
			label="Description"
			rules={[{ required: true, message: "please enter gift description" }]}
		/>
	);
};

const GiftLink = () => {
	return (
		<FormInputText
			name="url"
			label="Link"
			rules={[{ required: true, message: "please enter link to gift" }]}
		/>
	);
};

const GiftPrice = () => {
	return (
		<FormInputNumber
			name="price"
			label="Price"
			rules={[
				{
					required: true,
					type: "number",
					min: 1,
					max: 100,
					message: "please enter price between $1 and $100",
				},
			]}
		/>
	);
};

// Creates the Add Gift Pages
const AddGift = () => {
	return (
		<div>
			<Row style={{ padding: 15 }} className="addGiftForm">
				<ResponsiveColumn>
					{/* Gift Input Form */}
					<Form name="nest-messages">
						<h1>Add Gift Ideas</h1>
						{/* Input for gift description*/}
						<DescriptionField />
						{/* Input link to gift*/}
						<GiftLink />
						{/* Input gift price */}
						<GiftPrice />
						{/* Submit Button */}
						<SubmitButton />
					</Form>
				</ResponsiveColumn>
			</Row>
		</div>
	);
};

export default AddGift;
