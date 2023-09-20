import './App.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo'

function App() {

  const FifteenBiggest = countries.sort((a, b) => b.area - a.area).slice(0, 16).filter((country) => country.name.common != "Antarctica"); {/*Sorting all the countries in order of area */ }
  console.log(countries[0].name.common); {/*cosole.log writes out to the console */ }

  return (
    <>
      {FifteenBiggest.map((c) => (
        <CountryInfo data={c} maxArea={FifteenBiggest[0].area} />
      ))}

    </>
  )

}

export default App
