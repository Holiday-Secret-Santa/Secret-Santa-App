import React from "react";
import { Modal } from "antd";
import AntButton from "../Button/Button";
import { UserAddOutlined } from "@ant-design/icons";

const ModalPopUp = ({ children, state }) => {
	state = { visible: false };

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	handleCancel = (e) => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	return (
		<div>
			<AntButton icon={<UserAddOutlined />} action={this.showModal} />
			Invite New Guests
			<Modal
				title="Basic Modal"
				visible={this.state.visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
			>
				{children}
			</Modal>
		</div>
	);
};

export default ModalPopUp;
