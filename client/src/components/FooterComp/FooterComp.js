import React from "react";
import "antd/dist/antd.css";
import "./style.css";

const FooterComp = (props) => {
	return (
		<footer className="footer-div center-align">&copy; {props.text}</footer>
	);
};

export default FooterComp;
