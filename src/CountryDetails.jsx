import React from 'react'
import './App.css';
import { Link } from "react-router-dom";
import CountryList from './CountryList';


function CountryDetails(){
    return(
        <>
        <p>hello world</p>
        <Link to={"/"}>Home</Link>
        </>
    )
}

export default CountryDetails /**Must export for it to show on the page */