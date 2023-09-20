import React from "react";

function CountryInfo({data}) {
    return (
      <div className = "RightPanenel">
          
        <CountryInfo data = {data[5]}/>
        <CountryInfo data = {data[6]}/>
        <CountryInfo data = {data[7]}/>
        <CountryInfo data = {data[8]}/>
        <CountryInfo data = {data[9]}/>
        <CountryInfo data = {data[10]}/>
        <CountryInfo data = {data[11]}/>
        <CountryInfo data = {data[12]}/>
        <CountryInfo data = {data[13]}/>
        <CountryInfo data = {data[14]}/>
      </div>
    )
  }
  
  export default CountryInfo