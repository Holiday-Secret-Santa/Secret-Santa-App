// Added Loading component using when the page is loading
import React from "react";
const loading =
	"https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg";

const Loading = () => (
	<div className="spinner" style={{ textAlign: "center" }}>
		<img src={loading} alt="Loading" />
	</div>
);

export default Loading;
