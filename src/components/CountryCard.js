import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CountryCard = ({ country }) => {

	const {flags, name, population, region, capital} = country
    
	return(
		<Link to={`/country/${country.name.common}`}>
			<div className="country-card shadow-box element">
				<img className="country-card__img" src={flags.png} alt="flag" />
				<div className="country-card__content">
					<h2>{name.common}</h2>
					<p><span>Population:</span> {population}</p>
					<p><span>Region:</span> {region}</p>
					<p><span>Capital:</span> {capital}</p>
				</div>
			</div>
		</Link> 
	)
}

CountryCard.propTypes = {
	country: PropTypes.object.isRequired
}

export default CountryCard