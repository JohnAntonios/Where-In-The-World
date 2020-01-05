import React from "react";
import "./FilterRegion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterRegion = ({ countries, parentCallback }) => {
	const regionSelect = e => {
		let resultCountries = countries.filter(
			country =>
				country.region.toLowerCase() === e.target.value.toLowerCase()
		);

		if (e.target.value === " " || null || undefined) {
			resultCountries = countries;
		}

		parentCallback(resultCountries);
	};

	return (
		<div className="filter-region-wrapper">
			<select
				name="filterRegion"
				id="filterRegion"
				onChange={regionSelect}
			>
				<option value=" ">Filter By Region</option>
				<option value="Africa">Africa</option>
				<option value="Americas">Americas</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
			<div className="filter-icon-wrapper">
				<FontAwesomeIcon icon={faChevronDown} />
			</div>
		</div>
	);
};

export default FilterRegion;
