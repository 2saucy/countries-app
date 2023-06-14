import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Dropdown = ({ setDropdownFilter, setSearchFilter }) => {

	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const handleClick = (event) => {
		setDropdownFilter(event.target.textContent)
		setSearchFilter('')
		toggleDropdown()
	}

	return(
		<div className="select shadow-box element">
			<a onClick={toggleDropdown} className="select__toggle-dropdown">
            Filter by Region
				<span className={`select__icon ${isOpen ? 'arrow-up' : 'arrow-down'} icon`}></span>
			</a>
			{
				isOpen && (
					<ul className="select__dropdown shadow-box element">
						<li>
							<a onClick={handleClick} href="#">Africa</a>
						</li>
						<li>
							<a onClick={handleClick} href="#">Americas</a>
						</li>
						<li>
							<a onClick={handleClick} href="#">Asia</a>
						</li>
						<li>
							<a onClick={handleClick} href="#">Europe</a>
						</li>
						<li>
							<a onClick={handleClick} href="#">Oceania</a>
						</li>
					</ul>
				)
			}
		</div>
	)
}

Dropdown.propTypes = {
	setDropdownFilter: PropTypes.func.isRequired,
	setSearchFilter: PropTypes.func.isRequired
}

export default Dropdown