import React from "react";
import "./FilterRegion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterRegion = () => {
	return (
		<div className="filter-region-wrapper">
			<select name="filterRegion" id="filterRegion">
				<option value=" ">Filter By Region</option>
				<option value="Test">Test</option>
				<option value="Test">Test</option>
			</select>
			<div className="filter-icon-wrapper">
				<FontAwesomeIcon icon={faChevronDown} />
			</div>
		</div>
	);
};

export default FilterRegion;
