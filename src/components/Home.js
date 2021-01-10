import React, { useEffect } from "react";
import CurrentWeatherCard from "./CurrentWeatherCard";
import Frame from "./Frame";
import { getLocation } from "../utils";
import {
  getCurrentConditions,
  getFiveDayForecast,
  getLocationByGeo,
} from "../api.js";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  setCurrent,
  setFiveDay,
  setLocation,
} from "../redux/rootSlice";
import { Box, Button, Grid, Typography } from "@material-ui/core/";
function App() {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const initalLoad = async () => {
    const geo = await getLocation();
    const location = await getLocationByGeo(
      geo.coords.latitude,
      geo.coords.longitude
    );
    const fiveDay = await getFiveDayForecast(location.Key);
    const currentConditions = await getCurrentConditions(location.Key);
    await dispatch(dispatch(setLocation(location)));
    await dispatch(dispatch(setFiveDay(fiveDay)));
    await dispatch(dispatch(setCurrent(currentConditions)));
  };
  const handleAddFavorite = () => {
    let included = false;
    state.favoriteLocations.forEach((favorite) => {
      if (state.location.Key === favorite.Key) {
        included = true;
        alert("Location already saved to Favorites");
      }
    });
    if (!included) {
      dispatch(addFavorite(state.location));
      alert("Location saved to Favorites");
    }
  };
  useEffect(() => {
    if (!state.locationSet) {
      initalLoad();
    }
  }, []);

  return (
    <div className="App">
      <Grid
        container
        spacing={5}
        display="grid"
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          {state.location.LocalizedName && (
            <Box pt={1}>
              <Typography variant="h4">
                {" "}
                {"Weather for " +
                  state.location.LocalizedName +
                  ", " +
                  state.location.Country.LocalizedName}
              </Typography>
              <Button
                onClick={() => handleAddFavorite()}
                variant="contained"
                color="default"
              >
                Add Location to Favorites
              </Button>
            </Box>
          )}
        </Grid>
        {state.currentWeather[0] && (
          <Grid item lg={3}>
            <CurrentWeatherCard forecast={state.currentWeather[0]} />
          </Grid>
        )}
        <Grid item lg={12}>
          <Frame />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
