import React from 'react'


function CountryInfo({ data, maxArea }) {

  let ratio = data.area / maxArea * 100;

  return (
    <div className="CountryBox">
      <header>
        <p><b id="bold">{data.name.common}</b> {data.area} km<sup>2</sup></p>
      </header>
      <div style={{ width: ratio + "%" }} className="hBar">

      </div>
    </div>

  )
}

export default CountryInfo