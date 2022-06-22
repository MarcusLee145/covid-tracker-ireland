import React, { useEffect } from "react";
import Stats from "./components/Stats";
import Footer from "./components/Footer";


export default function App() {

    const [covidStats, setCovidStats] = React.useState([]);
    const [toggle, setToggle] = React.useState(false);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd47d3df3f6msh722e77875dbe4f4p1bfa8ajsna3ec5839996f',
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };

    function toggleStats() {
        setToggle(prevToggle => !prevToggle);
    }

    useEffect(async () => {    
        const res = await fetch(`https://covid-193.p.rapidapi.com/statistics?country=ireland`, options);
        const data = await res.json()
        setCovidStats(data.response[0])
    }, []); 

    return (
        <div>
            <div className="page">
                <div className="stats">
                    <h1>Covid-Tracker ({covidStats.country})</h1>

                    <button className="button" onClick={toggleStats}>
                        {toggle === false ? "Generate Statistics!" : "Hide Statistics!"}
                    </button>
                    {toggle === true &&
                    <Stats 
                        covidStats={covidStats}
                    />}
                    
                </div>
            </div>
            {toggle && 
            <Footer />}
        </div>
    )
}

//Get the select working, Get it to change location.
//Style