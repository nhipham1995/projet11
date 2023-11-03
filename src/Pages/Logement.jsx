import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../data/logements.json";

function Logement() {
	const params = useParams();
	const index = data.findIndex((v) => v.id === params.id);
	if (index === -1) return <Navigate to="/404" />;

	return <div>{data[index].title}</div>;
}

export default Logement;
