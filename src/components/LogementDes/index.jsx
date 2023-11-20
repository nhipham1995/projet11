import "./logementDes.css";
import Collapse from "../Collapse";
import Rating from "../Rating";

function LogementDes({ logement }) {
	console.log(logement);
	return (
		<div>
			<div className="container">
				<div className="logement-info">
					<h2 className="logement-name">{logement.title}</h2>
					<p className="location">{logement.location}</p>
					<ul className="tags">
						{logement.tags.map((tag, idx) => (
							<li className="tag-option" key={idx}>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<div className="host-info">
					<div className="host">
						<p>{logement.host.name}</p>
						<img
							alt={logement.host.name}
							src={logement.host.picture}
							className="avatar"
						></img>
					</div>
					<Rating rate={logement.rating} />
				</div>
			</div>
			<div className="collapse-part">
				<div className="">
					<Collapse
						title={"Description"}
						description={logement.description}
						size={"small"}
					/>
				</div>
				<div>
					<Collapse
						title={"Équipement"}
						description={logement.equipments}
						size={"small"}
					/>
				</div>
			</div>
		</div>
	);
}

export default LogementDes;
