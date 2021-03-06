import React, { useState, useEffect } from "react";
import "./Home.css";
import SearchCountry from "./SearchCountry/SearchCountry";
import FilterRegion from "./FilterRegion/FilterRegion";
import CountryCard from "./CountryCard/CountryCard";

import { Link } from "react-router-dom";

const Home = () => {
	const [countries, setCountries] = useState([]);
	const [resultCountries, setResultCountries] = useState([]);

	useEffect(() => {
		fetchCountries();
	}, []);

	const filterResults = countryResults => {
		setResultCountries(countryResults);
	};

	const fetchCountries = async () => {
		const data = await fetch("https://restcountries.eu/rest/v2/all");

		const countries = await data.json();

		setCountries(countries);
		setResultCountries(countries);
	};
	/*
		JSON SCHEMA FOR API CALL:
		country.
				name = Name of the country in a string.
				alpha2Code = Abbreviated name of the country.
				region = Name of the region the country belongs to.
				flag = SVG url of the flag to display.
				population = Population of the Country, a number.
				capital = Name of the capital of the country.
	*/
	return (
		<div>
			<section className="align filters">
				<SearchCountry
					countries={countries}
					parentCallback={filterResults}
				/>
				<FilterRegion
					countries={countries}
					parentCallback={filterResults}
				/>
			</section>

			<section className="align countries">
				{resultCountries.map(country => (
					<Link
						to={`/country/${country.alpha2Code}`}
						key={country.alpha2Code}
					>
						<CountryCard
							key={country.name}
							name={country.name}
							flag={country.flag}
							population={country.population}
							region={country.region}
							capital={country.capital}
						/>
					</Link>
				))}
			</section>
		</div>
	);
};

export default Home;
