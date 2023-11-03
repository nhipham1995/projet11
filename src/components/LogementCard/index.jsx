import { Link } from "react-router-dom";
import "./logement.css";

function LogementCard(props) {
	const { title, id, image } = props;

	return (
		<Link to={`/logement/${id}`} className="logement-card">
			<img
				src={image}
				alt="Demonstration"
				className="logement-card-image"
			/>
			<h4 className="logement-card-title">{title}</h4>
		</Link>
	);
}

export default LogementCard;
