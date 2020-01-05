import React, { useState } from "react";
import "./ThemeSwitch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as lightMode } from "@fortawesome/free-regular-svg-icons";
import { faMoon as darkMode } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitch = () => {
	const [theme, setTheme] = useState("");

	const switchTheme = e => {
		if (e.target.checked) {
			document.documentElement.setAttribute("data-theme", "dark");
			setTheme("dark");
		} else {
			document.documentElement.setAttribute("data-theme", "light");
			setTheme("light");
		}
	};

	return (
		<div className="theme-mode-wrapper">
			<input
				type="checkbox"
				name="themeModeToggle"
				id="themeModeToggle"
				onChange={switchTheme}
			/>
			<label
				htmlFor="themeModeToggle"
				className="stronger-font theme-label-wrapper"
			>
				<span className="theme-icon-wrapper">
					<FontAwesomeIcon
						icon={theme === "dark" ? darkMode : lightMode}
					/>
				</span>
				{theme === "dark" ? `Light Mode` : `Dark Mode`}
			</label>
		</div>
	);
};

export default ThemeSwitch;
