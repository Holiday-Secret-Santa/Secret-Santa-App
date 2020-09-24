import React, { useState } from "react";
import { Modal, Form } from "antd";
import AntButton from "../Button/Button";
import { UserAddOutlined } from "@ant-design/icons";
import FormInputText from "../FormInput/FormInputText";

const ModalPopUp = ({ children, state }) => {
	state = { visible: false };

	const [visible, setvisible] = useState(false);

	const showModal = () => {
		setvisible(true);
	};

	const handleOk = (e) => {
		console.log(e);
		setvisible(false);
	};

	const handleCancel = (e) => {
		console.log(e);
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
				onOk={handleOk}
				onCancel={handleCancel}
				style={{ padding: 20 }}
			>
				<Form>
					<FormInputText label={"First Name"} />
					<FormInputText label={"Last Name"} />
					<FormInputText label={"Email"} />
				</Form>
			</Modal>
		</div>
	);
};

export default ModalPopUp;
