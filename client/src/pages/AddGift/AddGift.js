import React from "react";
import { Row, Col, Form, Input, InputNumber, Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
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
						<Form.Item
							name="description"
							label="Gift Description"
							rules={[
								{
									required: true,
									message: "Please enter gift description.",
								},
							]}
						>
							<Input />
						</Form.Item>
						{/*Input for URL link to gift  */}
						<Form.Item
							name="urlLink"
							label="Link to Gift"
							rules={[
								{
									required: true,
									message: "Please enter link to gift.",
								},
							]}
						>
							<Input />
						</Form.Item>
						{/* Input for gift price */}
						<Form.Item
							name="price"
							label="Gift Price"
							rules={[
								{
									required: true,
									type: "number",
									min: 1,
									max: 100,
									message: "Please enter price between $1 and $100.",
								},
							]}
						>
							<InputNumber />
						</Form.Item>
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
