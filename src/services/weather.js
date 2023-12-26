import axios from "axios";

function filterByLocation(locationName) {
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?key=2ECTAKHEJ2KETPVDJ32JRR9R9`;
  return axios.get(apiUrl)
    .then((response) => {
       return response.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export {  filterByLocation };
