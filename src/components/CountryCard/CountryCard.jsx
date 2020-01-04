import React from "react";
import "./CountryCard.css";

const CountryCard = props => {
	return (
		<div className="country-card">
			<div className="country-flag-wrapper">
				<img src={props.countryFlagUrl} className="country-flag"></img>
			</div>

			{props.countryName}
		</div>
	);
};

export default CountryCard;
