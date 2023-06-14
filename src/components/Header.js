import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ darkMode, setDarkMode }) => {

	const handleClick = () => {
		setDarkMode(!darkMode)
	}

	return(
		<header className="header shadow-box element">
			<h1 className="header__title">Where in the world?</h1>
			<a className="header__button" onClick={handleClick} href="#">
				<span className="header__icon icon"></span>
                Dark Mode
			</a>
		</header>
	)
}

Header.propTypes = {
	darkMode: PropTypes.bool.isRequired,
	setDarkMode: PropTypes.func.isRequired
}

export default Header