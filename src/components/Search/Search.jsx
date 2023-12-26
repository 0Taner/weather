import { filterByLocation } from "../../services/weather";
import "./Search.css";
import React, { useState, useEffect } from "react";


function Search({ setSearchText, setWeatherData, searchText }) {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText.length !== 0) {
        filterByLocation(searchText)
          .then((data) => {
            setWeatherData(data);
            setErrorMessage('');
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
            setErrorMessage('Lütfen geçerli bir konum giriniz');
            setWeatherData(null); // Veri gelmediğinde weatherData'yi null yapıyoruz
          });
      } else {
        filterByLocation('Turkey')
          .then((data) => {
            setWeatherData(data);
            setErrorMessage('');
          })
          .catch((error) => {
            console.error('Error fetching weather data:', error);
            setErrorMessage('Lütfen geçerli bir konum giriniz');
            setWeatherData(null); 
          });
      }
    }, 700);

    return () => clearTimeout(timer);
  }, [searchText, setWeatherData, setSearchText]);

  return (
    <div className="search-container">
      <input
        id="searchInput"
        className="searchInput"
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          setErrorMessage(''); // Her input değiştiğinde hata mesajını temizle
        }}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Search;