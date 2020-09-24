import React, { useState } from "react";
import { Modal } from "antd";
import AntButton from "../Button/Button";
import { UserAddOutlined } from "@ant-design/icons";

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
				title="Add Participants"
				visible={visible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				{children}
			</Modal>
		</div>
	);
};

export default ModalPopUp;
