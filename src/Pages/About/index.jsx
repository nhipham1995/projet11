import React from "react";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import data from "../../data/about.json";

function About() {
	return (
		<div>
			<Banner
				image={"assets/images/banner.png"}
				title={"Chez vous, partout et ailleurs"}
				hidden={true}
			/>
			<div className="collapse-list">
				{data.map((item, index) => (
					<Collapse
						key={index}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</div>
	);
}

export default About;
