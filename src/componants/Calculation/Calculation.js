import React from 'react';

const Calculation = (props) => {
    const people = props.selectedCountries;
    let totalPopulation = 0;
    for (let i = 0; i < people.length; i++) {
        const element = people[i];
        totalPopulation = totalPopulation + element.population;
    }
    return (
        <div>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Calculation;