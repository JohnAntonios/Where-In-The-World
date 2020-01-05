import React, { useState, useEffect } from "react";
import "./Country.css";
import BackButton from "./BackButton/BackButton";
import CountryDetails from "./CountryDetails/CountryDetails";

const Country = props => {
	const [country, setCountry] = useState({});

	useEffect(() => {
		fetchCountry(props.match.params.code);
	}, [props]);

	const fetchCountry = async code => {
		const data = await fetch(
			`https://restcountries.eu/rest/v2/alpha/${code}`
		);
		const countryData = await data.json();

		setCountry(countryData);
	};
	/*
		JSON SCHEMA FOR COUNTRY API CALL:
		country.
				name = Name of the country in a string.
				nativeName = Name of the country in its native language.
				population = Population of the country.
				region = Name of the region the country belongs to.
				subregion (yes not camelcase lol) = Name of the sub region the country belongs to.
				capital = Name of the capital of the Country.
				topLevelDomain = [], Name of the ending domain website.
				currencies = [{}].
					code = Abbreviated name of the currency.
					name = Name of the currency.
					symbol = Symbol of the currency.
				languages = [{}].
					iso639_1 = 2 code name of the language.
					iso639_2 = 3 code name of the language.
					name = Name of the language.
					nativeName = Name of the language in its native langauge.
				borders = [], name of the call codes for each border country.
				flag = SVG Url of the flag.
	*/

	return (
		<div className="align">
			<BackButton />
			<CountryDetails country={country} />
		</div>
	);
};

export default Country;
