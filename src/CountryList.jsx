import React, { useState } from "react";
import './App.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo'




function CountryList() {
  const FifteenBiggest = countries.sort((a, b) => b.area - a.area).slice(0, 16).filter((country) => country.name.common != "Antarctica"); {/*Sorting all the countries in order of area */ }

  const [searchString, setSearchString] = useState("");

  const matchSearch = country => {
    const lowerCaseWord = country.name.common.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();

    // What is the '0' representing? What happens if you change it to '1'?
    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  }

  const filteredCountries = countries.sort((a, b) => b.area - a.area).filter((country) => country.name.common != "Antarctica").filter(matchSearch).slice(0, 5);
  console.log(filteredCountries);


  function logInput(event) {
    setSearchString(event.target.value);
    console.log(searchString);
  }

  return (

    <>
      <input type="text" placeholder="Type here..." onChange={logInput} />


      <section id="myContent">
        {filteredCountries.map((c) => (

          <CountryInfo data={c} maxArea={FifteenBiggest[0].area} detailed={true} />
        ))}

      </section></>

  )
}

export default CountryList
