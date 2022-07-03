import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";
import Weather from "./Weather";

const App = () => {
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLat(pos.coords.latitude);
        setLng(pos.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e357b8932d4e207fcd57ba79a76419fa`
      )
        .then((res) => res.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, lng]);

  return (
    <>
      Weather and News
      {typeof data.main != "undefined" ? <Weather data={data} /> : <div></div>}
    </>
  );
};

export default App;
