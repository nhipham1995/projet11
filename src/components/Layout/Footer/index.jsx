import React from "react";
import "./Footer.css";

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<img
					src="/assets/logos/logo-in-white.png"
					alt="Logo of company"
					height={35}
					className="logo-img"
				></img>
				<p>@2020 Kasa. All rights reserved</p>
			</footer>
		);
	}
}

export default Footer;
