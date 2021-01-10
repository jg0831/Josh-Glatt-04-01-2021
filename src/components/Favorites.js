import React from "react";
import {
    Box,
  Grid,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import FavoriteItem from "./FavoriteItem";
const Favorites = ({ favorites }) => {
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Box mt={2} mb={5}>
          <Typography variant="h3">Favorites</Typography>
        </Box>
        <Grid
          spacing={3}
          container
          display="grid"
          direction="column"
          justify="center"
          alignItems="center"
          className="container"
        >
          {favorites.map((favorite, index) => (
            <FavoriteItem
              key={favorite.Key}
              listNumber={index + 1}
              favorite={favorite}
            />
          ))}
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Favorites;
