import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchCountry.css";

const SearchCountry = () => {
	return (
		<label htmlFor="searchCountry" className="search-wrapper">
			<div className="search-icon-wrapper">
				<FontAwesomeIcon icon={faSearch} />
			</div>
			<input
				type="search"
				name="searchCountry"
				id="searchCountry"
				placeholder="Search for a country..."
			/>
		</label>
	);
};

export default SearchCountry;
