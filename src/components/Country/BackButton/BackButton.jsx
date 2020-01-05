import React from "react";
import "./BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BackButton = () => {
	return (
		<div className="back-button-wrapper">
			<Link to="/">
				<button className="back-btn">
					<FontAwesomeIcon icon={faLongArrowAltLeft} />
					Back
				</button>
			</Link>
		</div>
	);
};

export default BackButton;
