import React from "react";
import "./SearchCountry.css";

const SearchCountry = () => {
	return (
		<label htmlFor="searchCountry" className="search-wrapper">
			<div className="search-icon-wrapper">Search</div>
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
