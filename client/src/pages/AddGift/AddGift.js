import React from "react";
import { Row, Form, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import FormInputText from "./../../components/FormInputText";
import FormInputNumber from "./../../components/FormInputNumber";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import "./style.css";

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
						<FormInputText
							name="description"
							label="Description"
							rules={[
								{ required: true, message: "please enter gift description" },
							]}
						/>
						{/* Input link to gift*/}
						<FormInputText
							name="url"
							label="Link"
							rules={[{ required: true, message: "please enter link to gift" }]}
						/>
						{/* Input gift price */}
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
						{/* Submit Button */}
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
					</Form>
				</ResponsiveColumn>
			</Row>
		</div>
	);
};

export default AddGift;
