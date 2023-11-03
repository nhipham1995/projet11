import React from "react";
import "./banner.css";
function Banner(props) {
	const { image, title, hidden } = props;
	return (
		<div className="banner">
			<img
				src={image}
				alt="Illustration for banner"
				className="banner-image"
			></img>
			<h2
				className={
					hidden === true
						? "banner-title banner-title-hidden"
						: "banner-title"
				}
			>
				{title}
			</h2>
		</div>
	);
}

export default Banner;
