import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Home from './components/Home'
import CountryDetails from './components/CountryDetails'


function App() {

	const [darkMode, setDarkMode] = useState(false)
	const [countries, setCountries] = useState([])

	useEffect(() => {
		axios
			.get('https://restcountries.com/v3.1/all?fields=flags,name,population,region,subregion,capital,tld,currencies,languages,borders,cca3')
			.then(response => {
				const {data} = response
				setCountries(data)
			})
	},[])

	return (
		<div className={`App${darkMode ? ' dark' : ''} background`}>
			<Header darkMode={darkMode} setDarkMode={setDarkMode}/>

			<Router>
				<Routes>
					<Route path='/' element={<Home countries={countries} />}/>
					<Route path='/country/:name' element={<CountryDetails countries={countries}/>}/>
				</Routes>
			</Router>
		</div>
	)
}

export default App
