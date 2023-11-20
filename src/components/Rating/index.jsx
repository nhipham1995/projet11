import "./rating.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating(props) {
	const { rate } = props;
	const ratingCounter = () => {
		let stars = [];
		for (let i = 0; i < rate; i++) {
			stars.push(
				<FontAwesomeIcon
					icon={faStar}
					className="active-star star"
					key={i}
				/>
			);
		}
		if (rate < 5) {
			for (let i = 0; i < 5 - rate; i++) {
				stars.push(
					<FontAwesomeIcon
						key={5 - i}
						icon={faStar}
						className="default-star star"
					/>
				);
			}
		}
		return stars;
	};
	return (
		<div>
			<ul className="stars-list">{ratingCounter()}</ul>
		</div>
	);
}

export default Rating;
