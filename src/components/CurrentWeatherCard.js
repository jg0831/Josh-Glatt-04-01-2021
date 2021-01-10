import React from "react";
import {
  Avatar,
  Box,
  createMuiTheme,
  responsiveFontSizes,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { formatIconNumber } from "../utils";
const CurrentWeatherCard = ({ forecast }) => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const image = `https://developer.accuweather.com/sites/default/files/${formatIconNumber(
    forecast.WeatherIcon
  )}-s.png`;

  return (
    <Paper elevation={3}>
      <Box m={1} p={5}>
        <ThemeProvider theme={theme}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={0.5}
          >
            <Typography variant="h4">Current Conditions</Typography>
            <Avatar alt="weather icon" src={image} />
            <Typography>Conditions: {forecast.WeatherText} </Typography>

            <Box p={0.5}>
              <Typography>{forecast.Temperature.Imperial.Value}° F</Typography>
            </Box>
            <Box p={0.5}>
              <Typography>{forecast.Temperature.Metric.Value}° C</Typography>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    </Paper>
  );
};

export default CurrentWeatherCard;
