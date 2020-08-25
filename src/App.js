import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Country from './componants/Country/Country';
import Calculation from './componants/Calculation/Calculation';

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries]= useState([]);
  const firstTen = countries.slice (0,10);
  useEffect (() => {

    fetch ("https://restcountries.eu/rest/v2/all")
    .then (response => response.json())
    .then (data => setCountries(data))
    .catch (error => console.log(error))
  }, [])

  const addCountries = (countryName) => {
    const selected = [...selectedCountries, countryName];
    setSelectedCountries(selected);
  
  };

  return (
    <div className = "App">
      <p>this is{firstTen.length}</p>
      <p>Total country added: {selectedCountries.length}</p>
      <Calculation selectedCountries = {selectedCountries}></Calculation>
      {firstTen.map(country => <Country countryName = {country} addCountries = {addCountries}></Country>)}
    </div>
  );
}

export default App;
