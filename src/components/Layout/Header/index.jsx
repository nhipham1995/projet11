import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = ({ innerHeight }) => {
	const location = useLocation();

	return (
		<header>
			<nav className="navbar">
				<img
					src="/assets/logos/logo.png"
					alt="Logo of company"
					className="logo"
				></img>
				<ul className="link-list-menu">
					<Link
						to="/"
						className={
							location.pathname === "/"
								? "link-item link-item-active"
								: "link-item"
						}
					>
						Accueil
					</Link>
					<Link
						to="/about"
						className={
							location.pathname === "/about"
								? "link-item link-item-active"
								: "link-item"
						}
					>
						A Propos
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
