import React from "react";
import "./CountryCard.css";

const CountryCard = props => {
	return <div className="country-card">{props.countryName}</div>;
};

export default CountryCard;
