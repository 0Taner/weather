import axios from "axios";

const apiUrl =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Turkey?key=2ECTAKHEJ2KETPVDJ32JRR9R9";

function fetchWeatherData() {
  axios
    .get(apiUrl)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

function filterByLocation(locationName) {
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?key=2ECTAKHEJ2KETPVDJ32JRR9R9`;
  axios
    .get(apiUrl)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export { fetchWeatherData };
