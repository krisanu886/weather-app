import React, { useState, useEffect } from "react";
import './style.css';

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Kolkata");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1e1840fd674677602856deed77597fd0`;
      const response = await fetch(url);

      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };

    fetchApi();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <h1> Weather App </h1>
          <input
            type="search"
            className="inputFields"
            placeholder="Kolkata"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p>Type your correct Location</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">{search}</h2>
              <h1 className="temp">{city.temp} °Cel</h1>
              <h3 className="temp-min">Min: {city.temp_min} °Cel | Max: {city.temp_max} °Cel</h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default WeatherApp;
