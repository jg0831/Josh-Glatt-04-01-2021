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
import { dateConverter, formatIconNumber } from "../utils";
const WeatherCard = ({ forecast }) => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const dayImage = `https://developer.accuweather.com/sites/default/files/${formatIconNumber(
    forecast.Day.Icon
  )}-s.png`;
  const nightImage = `https://developer.accuweather.com/sites/default/files/${formatIconNumber(
    forecast.Night.Icon
  )}-s.png`;

  return (
    <Paper elevation={3}>
      <Box p={5}>
        <ThemeProvider theme={theme}>
          <Box p={0.5}>
            <Typography variant="h4">{dateConverter(forecast.Date)}</Typography>
          </Box>
          <Box p={0.5}>
            <Typography>
              Min Temp: {forecast.Temperature.Minimum.Value}
            </Typography>
          </Box>
          <Box p={0.5}>
            <Typography>
              Max Temp: {forecast.Temperature.Maximum.Value}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={0.5}
          >
            <Typography variant="h5">Day</Typography>
            <Avatar alt="weather icon" src={dayImage} />
            <Typography>Conditions: {forecast.Day.IconPhrase} </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p={0.5}
          >
            <Typography variant="h5">Night</Typography>
            <img alt="weather icon" src={nightImage} />
            <Typography>Conditions: {forecast.Night.IconPhrase} </Typography>
          </Box>
        </ThemeProvider>
      </Box>
    </Paper>
  );
};

export default WeatherCard;
