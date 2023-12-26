import Header from "./components/Header/Header";
import "./App.css";
import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import React,  { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // searchText ve weatherData'nın güncellenmesi için gerekli işlemleri burada yapabilirsiniz

  return (
    <div className="wrapper">
      <Header searchText={searchText} />
      <Search setSearchText={setSearchText} searchText={searchText} setWeatherData={setWeatherData}/>
      <Card weatherData={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
