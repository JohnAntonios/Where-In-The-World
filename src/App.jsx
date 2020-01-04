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
						countryName={country.name}
					/>
				))}
			</section>
		</div>
	);
};

export default App;
