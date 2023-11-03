import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../Pages/Home";
import Logement from "../Pages/Logement";
import About from "../Pages/About";
import PageNotFound from "../Pages/404";

function RoutersComponent() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route exact path="/logement/:id" element={<Logement />} />
			<Route path="/about" element={<About />} />
			<Route path="/404" element={<PageNotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
}
export default RoutersComponent;
