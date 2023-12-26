import "./Card.css";

function Card({ weatherData }) {
 
  return (
    
    <div className="weather-container">
      {weatherData && weatherData.days && (
        <ul className="weather-list">
          {weatherData.days.map((day, index) => (
            <li key={index} className="weather-item">
              <p> {new Date(day.datetime).toLocaleDateString("tr-TR", { weekday: "long" })} </p>
              <img
                src={`/icons/${day.conditions}.png`}
                alt={day.conditions}
                width="50"
                height="50"
              />
              <p> {day.conditions} </p>
              <p> {Math.round((day.tempmin - 32) * 5/9)}°C /  {Math.round((day.tempmax - 32) * 5/9)}°C</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;

