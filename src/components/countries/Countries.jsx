import { useEffect } from "react";
import { useState } from "react";
import Country from "../land/Country";
import './countryes.css'



const Countries = () => {
   const[countries,setCountries] = useState([]);

   useEffect(() =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
   },[])
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
           <div className='country-container'>
           {
                countries.map(country =>{
                    console.log(country) ;
                    return <Country key={country.name.common} country={country}></Country>   
                }   
                )
            }
           </div>
        </div>
    );
};

export default Countries;