import React from "react";
import { Link } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function CountryInfo(props) {
  const { data, maxArea, detailed } = props;
  let ratio = (data.area / maxArea) * 100;

  return (
    <Link to={"/country/" + props.data.cca3}>
      <div className="CountryBox">
        <header>
          <p>
            <b id="bold">{data.name.common}</b> {data.area} km<sup>2</sup>
          </p>
        </header>
        <div style={{ width: ratio + "%" }} className="hBar"></div>
        <p>{detailed ? data.capital : ""}</p>
        <p>{detailed ? data.subregion : ""}</p>
      </div>
    </Link>
  );
}

export default CountryInfo;
