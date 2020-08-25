import React from 'react';
import './Country.css';

const Country = (props) => {
    const { name, region, population, nativeName, flag } = props.countryName;
    const addCountries = props.addCountries;
    return (
        <div>
            <h1>country details : </h1>
            <p>Country Name : {name}</p>
            <p>Country Region : {region}</p>
            <p>Country Population : {population}</p>
            <p>Country Native name : {nativeName}</p>
            <img className="image" src={flag} alt="" />
            <br/>
            <button onClick = {() => addCountries(props.countryName)}>Add country</button>
        </div>
    );
};

export default Country;