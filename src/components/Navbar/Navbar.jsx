import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="main-nav">
			<div className="home-link">
				<Link to="/">
					<h3>Where in the world?</h3>
				</Link>
			</div>
			<div className="colour-mode-wrapper">
				<input
					type="checkbox"
					name="colourModeToggle"
					id="colourModeToggle"
				/>
				<label htmlFor="colourModeToggle" className="stronger-font">
					Dark Mode
				</label>
			</div>
		</nav>
	);
};

export default Navbar;
