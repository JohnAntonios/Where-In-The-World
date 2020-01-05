import React from "react";
import "./CountryDetails.css";
import BorderCountryBtn from "../BorderCountryBtn/BorderCountryBtn";

const CountryDetails = ({ country }) => {
	return (
		<div className="country-details-wrapper">
			<div className="flag-wrapper">
				<img src={country.flag} alt={country.name} />
			</div>
			<div className="country-info-wrapper">
				<h2 className="country-info-name">{country.name}</h2>
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
									This country has no currencies or it is stil
									loading the data...
								</h3>
							) : (
								country.currencies.map((currency, index) => {
									if (
										country.currencies.length <= 1 ||
										index === country.currencies.length - 1
									) {
										return currency.name;
									} else {
										return `${currency.name}, `;
									}
								})
							)}
						</li>
						<li>
							<strong>Languages: </strong>
							{country.languages == null || undefined ? (
								<h3>
									This country has no languages or it is stil
									loading the data...
								</h3>
							) : (
								country.languages.map((language, index) => {
									if (
										country.languages.length <= 1 ||
										index === country.languages.length - 1
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
				<div className="border-countries-wrapper">
					<span className="border-countries-title">
						<strong>Border Countries:</strong>
					</span>
					<div className="border-countries-btn-list-wrapper">
						{country.borders == null || undefined ? (
							<h3>
								Country has no borders or data is still
								loading...
							</h3>
						) : (
							// Pass the border calling code as a prop to each BorderBUtton component and render properly.
							country.borders.map(border => (
								<BorderCountryBtn
									countryCode={border}
									key={border}
								/>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryDetails;
