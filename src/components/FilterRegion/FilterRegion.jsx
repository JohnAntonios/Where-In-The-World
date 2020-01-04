import React from "react";
import "./FilterRegion.css";

const FilterRegion = () => {
	return (
		<div className="filter-region-wrapper">
			<select name="filterRegion" id="filterRegion">
				<option value=" ">Filter By Region</option>
				<option value="Test">Test</option>
				<option value="Test">Test</option>
			</select>
			<div className="filter-icon-wrapper">Down</div>
		</div>
	);
};

export default FilterRegion;
