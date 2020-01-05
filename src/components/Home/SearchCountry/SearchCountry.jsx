import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchCountry.css";

const SearchCountry = ({ countries, parentCallback }) => {
	const search = e => {
		let resultCountries = countries.filter(
			country =>
				country.name
					.toLowerCase()
					.indexOf(e.target.value.toLowerCase()) > -1
		);

		parentCallback(resultCountries);
	};

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
				onChange={search}
			/>
		</label>
	);
};

export default SearchCountry;
