import React from "react";
import WeatherCard from "./WeatherCard";
import Grid from "@material-ui/core/Grid";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const Frame = () => {
  const state = useSelector((state) => state.root);
  return (
    <React.Fragment>
        
      {state.fiveDay.DailyForecasts && (
        <Grid
        spacing={3}
          container
          display="grid"
          direction="row"
          justify="center"
          alignItems="center"
          className="container"
        >
          {state.fiveDay.DailyForecasts.map((forecast) => (
            <Grid item xs={2}>
              <WeatherCard forecast={forecast} key={forecast.EpochDate} />
            </Grid>
          ))}
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Frame;
