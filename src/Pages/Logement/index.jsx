import React from "react";
import { Navigate, useParams } from "react-router-dom";
import data from "../../data/logements.json";
import { Carrousel } from "../../components/Carrousel";
import LogementDes from "../../components/LogementDes";

function Logement() {
	const params = useParams();
	const index = data.findIndex((v) => v.id === params.id);
	if (index === -1) return <Navigate to="/404" />;

	const logement = data[index];

	return (
		<div>
			<Carrousel pictures={logement.pictures} />
			<LogementDes logement={logement} />
		</div>
	);
}

export default Logement;
