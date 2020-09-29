import React, { useState } from "react";
import { Modal, Form } from "antd";
import AntButton from "../Button/Button";
import { UserAddOutlined } from "@ant-design/icons";
import FormInputText from "../FormInput/FormInputText";

const ModalPopUp = (props) => {
	const [visible, setvisible] = useState(false);
	// const [firstName, setFirstName] = useState("");
	// const [lastName, setLastName] = useState("");
	// const [email, setEmail] = useState("");
	const [form] = Form.useForm();

	const showModal = () => {
		form.resetFields();
		setvisible(true);
	};

	const handleOk = (values) => {
		props.handleLogic(values.firstName, values.lastName, values.email);
		setvisible(false);
	};

	const handleCancel = (e) => {
		setvisible(false);
	};

	return (
		<div>
			<AntButton
				icon={<UserAddOutlined />}
				action={showModal}
				text={"Add Participants"}
			/>
			<Modal
				title={
					<label
						style={{ color: "#2c6e49", fontSize: "22px", fontWeight: "bold" }}
					>
						Add Participants
					</label>
				}
				visible={visible}
				onOk={form.submit}
				onCancel={handleCancel}
				style={{ padding: 20 }}
			>
				<Form form={form} onFinish={handleOk}>
					<FormInputText label={"First Name"} name="firstName" />
					<FormInputText label={"Last Name"} name="lastName" />
					<FormInputText label={"Email"} name="email" />
				</Form>
			</Modal>
		</div>
	);
};

export default ModalPopUp;
