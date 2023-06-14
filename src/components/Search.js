import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ searchFilter, setSearchFilter, setDropdownFilter }) => {

	const handleChangeSearch = (event) => {
		setSearchFilter(event.target.value)
		setDropdownFilter('')
	}

	return(
		<div className="search shadow-box element">
			<span className="search__icon icon"></span>
			<input className="search__input" onChange={handleChangeSearch} value={searchFilter} placeholder="Search for a country"></input>
		</div>
	)
}

Search.propTypes = {
	searchFilter: PropTypes.string.isRequired,
	setSearchFilter: PropTypes.func.isRequired,
	setDropdownFilter: PropTypes.func.isRequired
}

export default Search