const apiKey = "oFh6GbJs6rAnteHmljA4wDC1nqUh8utB";

export const getCurrentConditions = (locationKey) => {
  return fetch(
    `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`
  ).then((data) => data.json());
};

export const getFiveDayForecast = (locationKey) => {
  return fetch(
    `http://dataservice.accuweather.com/forecasts/v1//daily/5day/${locationKey}?apikey=${apiKey}`
  ).then((data) => data.json());
};

export const getLocationByGeo = (lat, long) => {
  return fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat},${long}`
  ).then((data) =>  data.json());
};

export const getLocationByTerm = (term) => {
  return fetch(
    `http://dataservice.accuweather.com/locations/v1/search?apikey=${apiKey}&q=${term}`
  ).then((data) =>  data.json());
};

export const autoComplete = (term) => {
  return fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${term}`
  ).then((data) => data.json());
};
