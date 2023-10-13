import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
	const location = useLocation();

	return (
		<header>
			<nav className="navbar">
				<img
					src="/assets/logos/logo.png"
					alt="Logo of company"
					height={45}
				></img>
				<ul className="link-list-menu">
					<Link
						to="/home"
						className={
							location.pathname === "/home"
								? "link-item link-item-active"
								: "link-item"
						}
					>
						Accueil
					</Link>
					<Link
						to="/list"
						className={
							location.pathname === "/list"
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
