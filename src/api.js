import { errorHandling } from "./utils";
const apiKey = "LYgqGvIdlOn6ARLt3MO7S9V8EF7oWX68";

export const getCurrentConditions = (locationKey) => {
  return fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
  )
    .then((data) => data.json())
    .catch((error) => {
      errorHandling();
      console.log(error);
    });
};

export const getFiveDayForecast = (locationKey) => {
  return fetch(
    `https://dataservice.accuweather.com/forecasts/v1//daily/5day/${locationKey}?apikey=${apiKey}`
  )
    .then((data) => data.json())
    .catch((error) => {
      errorHandling();
      console.log(error);
    });
};

export const getLocationByGeo = (lat, long) => {
  return fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${long}`
  )
    .then((data) => data.json())
    .catch((error) => {
      errorHandling();
      console.log(error);
    });
};

export const getLocationByTerm = (term) => {
  return fetch(
    `https://dataservice.accuweather.com/locations/v1/search?apikey=${apiKey}&q=${term}`
  )
    .then((data) => data.json())
    .catch((error) => {
      errorHandling();
      console.log(error);
    });
};

export const autoComplete = (term) => {
  return fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${term}`
  )
    .then((data) => data.json())
    .catch((error) => {
      errorHandling();
      console.log(error);
    });
};
