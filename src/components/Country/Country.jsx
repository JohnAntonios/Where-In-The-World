import React, { useState, useEffect } from "react";
import "./Country.css";

const Country = props => {
	const [country, setCountry] = useState([]);

	useEffect(() => {
		fetchCountry(props.match.params.code);
	}, [props]);

	const fetchCountry = async code => {
		const data = await fetch(
			`https://restcountries.eu/rest/v2/alpha/${code}`
		);
		const countryData = await data.json();

		console.log(countryData);
		setCountry(countryData);
	};
	/*
		JSON SCHEMA FOR COUNTRY API CALL:
		country.
				name = Name of the country in a string.
	*/

	return (
		<div>
			<p>{country.name}</p>
		</div>
	);
};

export default Country;
