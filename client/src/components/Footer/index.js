import React from "react";
import { Content } from "antd";
import "antd/dist/antd.css";
import "./style.css";

const Footer = () => {
	return (
		<Content>
			<Content>
				<div
					style={{
						background: "#cad2c5",
						borderColor: "#2c6e49",
						height: "calc(100vh - 55px)",
					}}
				>
					&copy; 2020 Secret Santa App
				</div>
			</Content>
		</Content>
	);
};

export default Footer;
