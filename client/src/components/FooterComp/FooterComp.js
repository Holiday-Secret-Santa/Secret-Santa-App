import React from "react";
import "antd/dist/antd.css";
import "./style.css";

const FooterComp = ({ text }) => {
	return <footer className="footer-div center-align">&copy; {text}</footer>;
};

export default FooterComp;
