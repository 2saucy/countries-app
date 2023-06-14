import React, { useState } from 'react'
import CountryCard from './CountryCard'
import Dropdown from './Dropdown'
import Search from './Search'
import PropTypes from 'prop-types'


const Home = ({ countries }) => {

	const [dropdownFilter, setDropdownFilter] = useState('')
	const [searchFilter, setSearchFilter] = useState('')

	const filteredCountries = countries.filter(country => {
		if(dropdownFilter && dropdownFilter === country.region){
			return true
		}
		else if(searchFilter && country.name.common.toLowerCase().includes(searchFilter.toLowerCase())){
			return true
		}
		else{
			return false
		}
	})

	return(
		<div className="home background">
			<div className="filters-container">
				<Search searchFilter={searchFilter} setSearchFilter={setSearchFilter} setDropdownFilter={setDropdownFilter}/>
				<Dropdown setDropdownFilter={setDropdownFilter} setSearchFilter={setSearchFilter}/>
			</div>
			<div className="cards-container">
				{
					filteredCountries.length !== 0 ? (
						filteredCountries.map(country => (
							<CountryCard key={country.name.common} country={country} />
						))
					):(
						countries.map(country => (
							<CountryCard key={country.name.common} country={country} />
						))
					)
				}
			</div>  
		</div>
	)   
}

Home.propTypes = {
	countries: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Home