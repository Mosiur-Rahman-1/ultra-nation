import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Country from './componants/Country/Country';

function App() {

  const [countries, setCountries] = useState([]);
  const firstTen = countries.slice (0,10);
  useEffect (() => {

    fetch ("https://restcountries.eu/rest/v2/all")
    .then (response => response.json())
    .then (data => setCountries(data))
    .catch (error => console.log(error))
  }, [])
  const count = 0;
  const addNewCountry = () => console.log (count);
  return (
    <div className = "App">
      <p>this is{firstTen.length}</p>
      <p>Total country added: {count}</p>
      {firstTen.map(country => <Country name = {country} addNewCountry = {addNewCountry}></Country>)}
    </div>
  );
}

export default App;
