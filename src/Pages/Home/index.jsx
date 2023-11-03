import React from "react";
import Banner from "../../components/Banner";
import data from "../../data/logements.json";
import LogementCard from "../../components/LogementCard";
import "./home.css";

function Home() {
	return (
		<div>
			<Banner
				image={"assets/images/banner.png"}
				title={"Chez vous, partout et ailleurs"}
			/>
			<div className="logement-list">
				{data.map((logement) => (
					<LogementCard
						key={logement.id}
						id={logement.id}
						title={logement.title}
						image={logement.cover}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
