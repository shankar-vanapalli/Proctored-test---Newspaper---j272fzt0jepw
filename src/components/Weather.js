import React from "react";

const Weather = ({ data }) => {
  const date = new Date();

  return (
    <>
      <input type="text" />
      <div>
        <h2>Temperature: {Math.round(data.main.temp - 273.15)}&#8451;</h2>
        <h2>Location: {data.name}</h2>
        <h2>Country: {data.sys.country}</h2>
        <h2>Weather Type: {data.weather.map((w) => w.main)}</h2>
        <h2>
          Date:{" "}
          {date.getDate() +
            " " +
            date.toLocaleString("default", { month: "long" }) +
            " " +
            date.getFullYear() +
            " " +
            date.toLocaleDateString("en-us", { weekday: "long" })}
        </h2>
      </div>
    </>
  );
};

export default Weather;
