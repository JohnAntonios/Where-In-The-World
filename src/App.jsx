import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchCountry from "./components/SearchCountry/SearchCountry";
import FilterRegion from "./components/FilterRegion/FilterRegion";
import CountryCard from "./components/CountryCard/CountryCard";

const App = () => {
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		fetchCountries();
	}, []);

	const fetchCountries = async () => {
		const data = await fetch("https://restcountries.eu/rest/v2/all");

		const countries = await data.json();

		console.log(countries);
		setCountries(countries);
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
			<Navbar />
			<section className="filters align">
				<SearchCountry />
				<FilterRegion />
			</section>

			<section className="align countries">
				{countries.map(country => (
					<CountryCard
						key={country.alpha2Code}
						name={country.name}
						flag={country.flag}
						population={country.population}
						region={country.region}
						capital={country.capital}
					/>
				))}
			</section>
		</div>
	);
};

export default App;
