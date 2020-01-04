import React from "react";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="main-nav">
			<div className="home-link">
				<h3>Where in the world?</h3>
			</div>
			<div className="colour-mode-wrapper">
				<input
					type="checkbox"
					name="colourModeToggle"
					id="colourModeToggle"
				/>
				<label htmlFor="colourModeToggle">Dark Mode</label>
			</div>
		</nav>
	);
};

export default Navbar;
