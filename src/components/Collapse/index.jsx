import React, { useState, useRef, useEffect } from "react";
import "./collapse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function Collapse(props) {
	const { title, description, size } = props;

	const [height, setHeight] = useState(0);
	const [trueHeight, setTrueHeight] = useState(0);
	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	window.addEventListener("resize", () => {
		console.log("resize", ref?.current?.offsetHeight, height);
		if (height !== ref?.current?.offsetHeight)
			setTrueHeight(ref?.current?.offsetHeight);
	});

	useEffect(() => {
		setTrueHeight(ref?.current?.offsetHeight);
	}, [open]);

	const clickHandler = () => {
		if (open === true) {
			setHeight(0);
			setTimeout(() => setOpen(!open), 300);
		} else {
			setTimeout(() => setHeight(trueHeight), 50);
			setOpen(!open);
		}
	};

	return (
		<div
			className={
				size === "small"
					? "collapse collapse-sm"
					: "collapse collapse-default"
			}
		>
			<div
				className={
					size === "small"
						? "collapse-title collapse-title-sm"
						: "collapse-title collapse-title-default"
				}
				onClick={clickHandler}
			>
				<h3>{title}</h3>
				<div className="icon-zone">
					{open ? (
						<FontAwesomeIcon
							icon={faChevronDown}
							className="spread-icon"
						/>
					) : (
						<FontAwesomeIcon
							icon={faChevronUp}
							className="spread-icon"
						/>
					)}
				</div>
			</div>
			{/* this div isn't displayed on web, juste to define the original height of description */}
			<div className="collapse-description inactive-element" ref={ref}>
				<p>{description}</p>
			</div>

			{/* this div is displayed */}
			{open && (
				<div
					className="collapse-description"
					style={{
						height: height + 30,
					}}
				>
					<p>{description}</p>
				</div>
			)}
		</div>
	);
}

export default Collapse;
