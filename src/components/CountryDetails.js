import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import CountryBorders from './CountryBorders'
import PropTypes from 'prop-types'

const CountryDetails = ({ countries }) => {

	const {name} = useParams()
	const [country, setCountry] = useState()

	useEffect(() => {
		axios
			.get(`https://restcountries.com/v3.1/name/${name}?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders,cca3`)
			.then(response => {
				const {data} = response
				setCountry(data[0])
			})
	},[])
    

	if(!country){
		return(
			<div className="country-details">
				<p>Loading...</p>
			</div>
		)
	}
	else{

		/* Making currencies a list */
		const currencies = []
		Object.values(country.currencies).forEach(currency => {
			currencies.push(currency.name)
		})

		/* Making languages a list */
		const languages = Object.values(country.languages)

		return(
			<div className="country-details background">
				<Link className="country-details__back-btn shadow-box element" to={'/'}> 
					<span className="back-icon icon"></span>
                    Back 
				</Link>
				<div className="country-details__content">
					<div className="country-details__img">
						<img src={country.flags.png} alt={`${country.name.common}-flag`} />
					</div>
					<div className="country-details__info-container">
						<h2 className="country-details__name">{country.name.common}</h2>
						<div className="country-details__info">
							<div>
								<p><span>Native name:</span> {country.name.official}</p>
								<p><span>Population:</span> {country.population}</p>
								<p><span>Region:</span> {country.region}</p>
								<p><span>Sub Region:</span> {country.subregion}</p>
								<p><span>Capital:</span> {country.capital}</p>
							</div>
							<div>
								<p><span>Top Level Domain:</span> {country.tld}</p>
								<p><span>Currencies:</span> {currencies}</p> 
								<p><span>Languages:</span> {languages}</p>
							</div>
						</div>
						<CountryBorders country={country} setCountry={setCountry} countries={countries}/>
					</div>
				</div>
			</div>
		)
	}
}

CountryDetails.propTypes = {
	countries: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CountryDetails