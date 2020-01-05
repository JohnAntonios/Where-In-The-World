import React, { useState, useEffect } from "react";
import "./Country.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";

const Country = props => {
	const [country, setCountry] = useState({});
	const [borderCountries, setBorderCountries] = useState([]);

	useEffect(() => {
		fetchCountry(props.match.params.code);
	}, [props]);

	const fetchCountry = async code => {
		const data = await fetch(
			`https://restcountries.eu/rest/v2/alpha/${code}`
		);
		const countryData = await data.json();

		console.log(countryData);

		const borderCountriesCodes = countryData.borders;

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
			{/* Component: BackButton */}
			<section className="back-button-wrapper">
				<button className="back-btn">
					<FontAwesomeIcon icon={faLongArrowAltLeft} />
					Back
				</button>
			</section>

			{/* Component: CountryDetails */}
			<section className="country-details-wrapper">
				<div className="flag-wrapper">
					<img src={country.flag} alt={country.name} />
				</div>
				<div className="country-info-wrapper">
					<h2>{country.name}</h2>
					<div className="country-info-lists-wrapper">
						<ul className="country-info-left">
							<li>
								<strong>Native Name: </strong>
								{country.nativeName}
							</li>
							<li>
								<strong>Population: </strong>
								{country.population == null || undefined || ""
									? null
									: country.population.toLocaleString()}
							</li>
							<li>
								<strong>Region: </strong>
								{country.region}
							</li>
							<li>
								<strong>Sub Region: </strong>
								{country.subregion}
							</li>
							<li>
								<strong>Capital: </strong>
								{country.capital}
							</li>
						</ul>
						<ul className="country-info-right">
							<li>
								<strong>Top Level Domain: </strong>
								{country.topLevelDomain}
							</li>
							<li>
								<strong>Currencies: </strong>
								{country.currencies == null || undefined ? (
									<h3>
										This country has no currencies or it is
										stil loading the data...
									</h3>
								) : (
									country.currencies.map(
										(currency, index) => {
											if (
												country.currencies.length <=
													1 ||
												index ===
													country.currencies.length -
														1
											) {
												return currency.name;
											} else {
												return `${currency.name}, `;
											}
										}
									)
								)}
							</li>
							<li>
								<strong>Languages: </strong>
								{country.languages == null || undefined ? (
									<h3>
										This country has no languages or it is
										stil loading the data...
									</h3>
								) : (
									country.languages.map((language, index) => {
										if (
											country.languages.length <= 1 ||
											index ===
												country.languages.length - 1
										) {
											return language.name;
										} else {
											return `${language.name}, `;
										}
									})
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className="border-countries-wrapper">
					{country.borders == null || undefined ? (
						<h3>
							Country has no borders or data is still loading...
						</h3>
					) : (
						// Pass the border calling code as a prop to each BorderBUtton component and render properly.
						country.borders.map(border => (
							<button key={border}>{border}</button>
						))
					)}
				</div>
			</section>
		</div>
	);
};

export default Country;
