import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const CountryBorders = ({ country, setCountry, countries }) => {

	const handleClick = (newCountry) => {
		setCountry(newCountry)
	}

	const borders = countries.filter(index => country.borders.includes(index.cca3))

	return(
		<div className="country-details__borders">
			<h3>Border Countries</h3>
			<ul>
				{
					borders.length === 0 ? (
						<li className="shadow-box element">None</li>
					) : (
						borders.map(border => (
							<Link onClick={() => handleClick(border)} to={`/country/${border.name.common}`} key={border.name.common}>
								<li className="shadow-box element">{border.name.common}</li>
							</Link>
						))
					)
				}
			</ul>
		</div>
	)
}

CountryBorders.propTypes = {
	country: PropTypes.object.isRequired,
	setCountry: PropTypes.func.isRequired,
	countries: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CountryBorders