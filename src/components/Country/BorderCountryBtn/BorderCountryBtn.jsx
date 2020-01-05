import React, { useState, useEffect } from "react";
import "./BorderCountryBtn.css";
import { Link } from "react-router-dom";

const BorderCountryBtn = ({ countryCode }) => {
	const [countryName, setCountryName] = useState("");

	useEffect(() => {
		getCountryName(countryCode);
	}, [countryCode]);

	const getCountryName = async countryCode => {
		const data = await fetch(
			`https://restcountries.eu/rest/v2/alpha/${countryCode}`
		);
		const countryData = await data.json();

		const countryName = countryData.name;

		console.log(countryName);
		setCountryName(countryName);
	};

	return (
		<Link to={`/country/${countryCode}`}>
			<button>{countryName}</button>
		</Link>
	);
};

export default BorderCountryBtn;
