import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import TopPage from './pages/TopPage';
import WorldPage from "./pages/WorldPage";
import countriesJson from "./countries.json";
import './App.css';

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => {
        setCountryData({
          date: data[data.length -1].Date,
          newConfirmed: data[data.length -1].Confirmed - data[data.length -2].Confirmed,
          totalConfirmed: data[data.length -1].Confirmed,
          newRecovered: data[data.length -1].Recovered - data[data.length -2].Recovered,
          totalRecovered: data[data.length -1].Recovered,
        });
      });
  };

  useEffect(() => {
    fetch("https://reactbook-corona-tracker-api.herokuapp.com/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <TopPage
            countriesJson={countriesJson}
            setCountry={setCountry}
            getCountryData={getCountryData}
            countryData={countryData}
          />
        }/>

        <Route exact path="/world" element={
          <WorldPage
            allCountriesData={allCountriesData}
          />
        }/>
      </Routes>
    </Router>
  );
}

export default App;
