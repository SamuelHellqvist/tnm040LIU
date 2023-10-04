import './App.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo'

function App() {
  const FifteenBiggest = countries.sort((a, b) => b.area - a.area).slice(0, 16).filter((country) => country.name.common != "Antarctica"); {/*Sorting all the countries in order of area */ }

  const FiveBiggest = FifteenBiggest.slice(0, 5);
  const NextTen = FifteenBiggest.slice(5, 15);
  return (

    <section id="myContent">
      <aside>
        {FiveBiggest.map((c) => (

          <CountryInfo data={c} maxArea={FifteenBiggest[0].area} detailed={true} />
        ))}
      </aside>

      <aside>
        {NextTen.map((c) => (

          <CountryInfo data={c} maxArea={FifteenBiggest[0].area} detailed={false} />
        ))}
      </aside>
    </section>
  )
}

export default App
