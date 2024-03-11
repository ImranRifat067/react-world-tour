import { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    const {name,flags,population,area} = country;
    const [visited,setVisited] = useState(false);
    const handleVisited = ()=>{
        setVisited(!visited);
    }
    return (
        <div className="country">
            <h3>name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <button onClick={handleVisited}>{visited? 'visited' : 'visit'}</button>
            <p>{visited? 'i have visited' : 'want to visit'}</p>
        </div>
    );
};

export default Country;