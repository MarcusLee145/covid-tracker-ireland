import React from "react";

export default function Stats(props) {

    console.log("COVID STATS FROM STATS:");
    console.log(props.covidStats);

    return (
        <div>
            <div className="location">
                <h1><span className="title">Location:</span> {props.covidStats.country}</h1>
            </div>
            <div className="activeCases">
                <h2><span className="title">Active Cases:</span> {props.covidStats.cases.active.toLocaleString()}</h2>
            </div>
            <div className="cases">
                <h2><span className="title">New Cases:</span> {props.covidStats.cases.new === null ? "Nothing to show" : props.covidStats.response.cases.new.toLocaleString()}</h2>
                <h2><span className="title">New Deaths:</span> {props.covidStats.deaths.new === null ? "Nothing to show" : props.covidStats.response.deaths.new.toLocaleString()}</h2>
            </div>
            <div className="cases">
                <h2><span className="title">Total Cases:</span> {props.covidStats.cases.total.toLocaleString()}</h2>
                <h2><span className="title">Total Deaths:</span> {props.covidStats.deaths.total.toLocaleString()}</h2>
                <h2><span className="title">Total Recovered:</span> {props.covidStats.cases.recovered.toLocaleString()}</h2>
            </div>
            <h2 className="tests"><span className="title">Total Tests:</span> {props.covidStats.tests.total.toLocaleString()}</h2>
        </div>
    )
}