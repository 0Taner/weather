import { fetchWeatherData } from "../../services/weather";
import "./Cards.css";

function Cards() {
  fetchWeatherData();
  return <div></div>;
}

export default Cards;
