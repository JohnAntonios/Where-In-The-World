import React from "react";
import "./CountryCard.css";

const CountryCard = props => {
	return (
		<div className="country-card">
			<div className="country-flag-wrapper">
				<img src={props.flag} className="country-flag"></img>
			</div>

			<div className="country-content">
				<h3 className="country-name">{props.name}</h3>
				<ul className="country-details">
					<li>
						<strong>Population: </strong>
						{props.population.toLocaleString()}
					</li>
					<li>
						<strong>Region: </strong>
						{props.region}
					</li>
					<li>
						<strong>Capital: </strong>
						{props.capital}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CountryCard;
