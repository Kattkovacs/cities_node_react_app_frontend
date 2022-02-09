import React, { useState, useEffect } from "react";
import Axios from "axios";
import CityCard from "./CityCard";
import CountrySelect from "./CountrySelect";
import {
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  const handleClick = (megyeid) => {
    setSelectedCountry(megyeid);
  };

  const handleSelect = (countryId) => {
    navigate(`${window.location.pathname}?megye=${countryId}`);
    Axios.get(`http://localhost:4000/cities?megye=${countryId}`).then((res) =>
      setCities(res.data)
    );
  };

  const handleSelectAll = () => {
    navigate(`${window.location.pathname}`);
    Axios.get("http://localhost:4000/cities").then((res) =>
      setCities(res.data)
    );
  };

  useEffect(() => {
    Axios.get("http://localhost:4000/cities").then((res) =>
      setCities(res.data)
    );

    Axios.get("http://localhost:4000/countries").then((res) =>
      setCountries(res.data)
    );
  }, []);

  useEffect(() => {
    Axios.get("http://localhost:4000/cities").then((res) =>
      setCities(res.data)
    );
  }, [selectedCountry]);

  if (!cities.length) return <h2 className="mb-4">Loading...</h2>;
  return (
    <div>
      <h2 className="mb-4">Cities, Settlements</h2>
      <div className="row">
        <div className="col-sm-6">
          <CountrySelect
            countries={countries}
            handleSelect={(selectedOption) => handleSelect(selectedOption)}
          />
        </div>
        <div className="col-sm-1">
          <button
            type="button"
            className="btn-sm btn-info mt-3"
            onClick={() => handleSelectAll()}
          >
            Show All
          </button>
        </div>
      </div>
      <div className="row">
        {cities.map((city, i) => (
          <CityCard
            city={city}
            key={i}
            selectedCountry={selectedCountry}
            handleClick={() => handleClick(city.megyeid)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cities;
