import React, { useState } from "react";
import "../App.css";

const WeatherApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] =useState('Kolkata');
  return (
    <>
      <div className="box">
        <div className="inputData">
          <h1> Weather App </h1>
          <input type="search" className="inputFields" onChange={() => {}} />
        </div>

        <div className="info">
          <h2 className="location">{city}</h2>
          <h1 className="temp">5.23 cel</h1>
          <h3 className="temp-min">Min:5.23 cel | max: 5.25 cel</h3>
        </div>
      </div>
    </>
  );
};
export default WeatherApp;
