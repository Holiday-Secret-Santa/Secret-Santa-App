import React from "react";
import { Row, Col, Form, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import FormInputText from "../../components/FormInputText";
import FormInputNumber from "../../components/FormInputNumber";
import "./style.css";

// Variable to for responsive columns
const ResponsiveColumn = ({ children, lg, offset, span, flex, style }) => {
	return (
		<Col
			xs={24}
			sm={24}
			md={24}
			lg={20}
			xl={20}
			offset={offset}
			span={span}
			flex={flex}
			style={style}
		>
			{children}
		</Col>
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
