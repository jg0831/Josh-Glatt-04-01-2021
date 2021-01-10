import React from "react";
import {
  Box,
  createMuiTheme,
  responsiveFontSizes,
  Link,
  Paper,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { swapView } from "../redux/rootSlice";
import { setLocation, setFiveDay, setCurrent } from "../redux/rootSlice";
import { getFiveDayForecast, getCurrentConditions } from "../api.js";
const FavoriteItem = ({ favorite, listNumber }) => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);
  const dispatch = useDispatch();
  const selectFavorite = async (event) => {
    const fiveDay = await getFiveDayForecast(favorite.Key);
    const currentConditions = await getCurrentConditions(favorite.Key);
    await dispatch(dispatch(setLocation(favorite)));
    await dispatch(dispatch(setFiveDay(fiveDay)));
    await dispatch(dispatch(setCurrent(currentConditions)));
    await dispatch(swapView("home"));
    event.preventDefault();
  };

  return (
    <Box m={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <Box p={3} display="flex" direction="row">
            <Typography variant="h5">{listNumber}.</Typography>
            <Link href="#" onClick={selectFavorite}>
              <Typography variant="h5">
                {favorite.LocalizedName}, {favorite.Country.LocalizedName}
              </Typography>
            </Link>
          </Box>
        </Paper>
      </ThemeProvider>
    </Box>
  );
};

export default FavoriteItem;
