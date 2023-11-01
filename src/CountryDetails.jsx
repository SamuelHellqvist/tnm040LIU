import React from 'react'
import './App.css';
import { Link, useParams } from "react-router-dom";
import countries from 'world-countries'
import CountryInfo from './CountryInfo'



function CountryDetails() {

    function getCountryByCca3(CurrentCca3) {
        let CurrentCountry = countries.find(country => country.cca3 == CurrentCca3);
        return CurrentCountry;
    }

    const FifteenBiggest = countries.sort((a, b) => b.area - a.area).slice(0, 16).filter((country) => country.name.common != "Antarctica"); {/*Sorting all the countries in order of area */ }

    let { cca3 } = useParams();

    let myCountry = getCountryByCca3(cca3);

    let CountryName = myCountry.name.common;

    let countryBoardersCca3 = myCountry.borders;

    const BoarderingCountries = [];

    countryBoardersCca3.forEach((cca3) => {
        BoarderingCountries.push(getCountryByCca3(cca3));
    })

    return (
        <>
            <Link to={"/"}>Home</Link>
            <article>
                <h1>{CountryName}</h1>
                <h2>Boardering countries:</h2>
                <section id="myContent">
                    {BoarderingCountries.map((c) => (

                        <CountryInfo data={c} maxArea={FifteenBiggest[0].area} key={c.cca3} />
                    ))}

                </section>
            </article>
        </>
    )
}

export default CountryDetails /**Must export for it to show on the page */