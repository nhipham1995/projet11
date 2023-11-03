import React from "react";
import "./404.css";

function PageNotFound() {
	return (
		<div>
			<h1>404</h1>
			<p>Oups! La page que vous demandez n'ewiste pas.</p>
			<a href="/">Retournez sur la page d'accueil</a>
		</div>
	);
}

export default PageNotFound;
