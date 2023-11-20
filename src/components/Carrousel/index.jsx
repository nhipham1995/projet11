import React, { useState } from "react";
import "./carrousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export const Carrousel = ({ pictures }) => {
	const [index, setIndex] = useState(1);

	const prevPic = () => {
		if (index - 1 > 0) {
			setIndex(index - 1);
		}
	};

	const nextPic = () => {
		if (index < pictures.length) {
			setIndex(index + 1);
		}
	};

	return (
		<div className="carrousel">
			<div className="carrousel-image-cover">
				<img alt="check" src={pictures[index - 1]}></img>
				<div onClick={prevPic} className="icon-cover">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="icon left-icon"
					/>
				</div>

				<div onClick={nextPic}>
					<FontAwesomeIcon
						icon={faChevronRight}
						className="icon right-icon"
					/>
				</div>
				<p>
					{index}/{pictures.length}
				</p>
			</div>
		</div>
	);
};
