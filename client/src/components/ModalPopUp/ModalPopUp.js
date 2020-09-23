import { Modal } from "antd";
import AntButton from "../Button/Button";

const ModalPopUp = ({ children }) => {
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
			<AntButton text="Add Guests" />
			<Modal
				title="Add Guests"
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
