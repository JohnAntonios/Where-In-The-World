import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

const Navbar = () => {
	return (
		<nav className="main-nav">
			<div className="home-link">
				<Link to="/">
					<h3>Where in the world?</h3>
				</Link>
			</div>
			<ThemeSwitch />
		</nav>
	);
};

export default Navbar;
