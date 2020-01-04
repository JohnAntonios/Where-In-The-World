import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchCountry from "./components/SearchCountry/SearchCountry";
import FilterRegion from "./components/FilterRegion/FilterRegion";
import CountryCard from "./components/CountryCard/CountryCard";

const App = () => {
	return (
		<div>
			<Navbar />
			<section className="filters align">
				<SearchCountry />
				<FilterRegion />
			</section>

			<section className="align countries">
				<CountryCard countryName="Australia" />
				<CountryCard countryName="Australia" />
				<CountryCard countryName="Australia" />
				<CountryCard countryName="Australia" />
				<CountryCard countryName="Australia" />
				<CountryCard countryName="Australia" />
				<CountryCard countryName="Australia" />
				<CountryCard countryName="Australia" />
				<CountryCard countryName="Australia" />
			</section>
		</div>
	);
};

export default App;
