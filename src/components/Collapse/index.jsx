import React, { useState, useRef, useEffect } from "react";
import "./collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse(props) {
	const { title, description } = props;

	const [height, setHeight] = useState(0);
	const [trueHeight, setTrueHeight] = useState(0);
	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		setTrueHeight(ref?.current?.offsetHeight);
	}, [open]);

	const clickHandler = () => {
		console.log(trueHeight);

		if (open === true) {
			setHeight(0);
			setTimeout(() => setOpen(!open), 300);
		} else {
			setTimeout(() => setHeight(trueHeight), 50);
			setOpen(!open);
		}
	};

	return (
		<div className="collapse">
			<div className="collapse-title">
				<h3>{title}</h3>
				<div onClick={clickHandler} className="clickable-zone">
					{open ? (
						<FontAwesomeIcon icon={faChevronDown} />
					) : (
						<FontAwesomeIcon icon={faChevronUp} />
					)}
				</div>
			</div>
			{/* this div isn't displayed on web, juste to define the original height of description */}
			<div className="collapse-description inactive-element" ref={ref}>
				<p style={{ padding: "30px" }}>{description}</p>
			</div>

			{/* this div is displayed */}
			{open && (
				<div
					className="collapse-description"
					style={{ height: height }}
				>
					<p>{description}</p>
				</div>
			)}
		</div>
	);
}

export default Collapse;
