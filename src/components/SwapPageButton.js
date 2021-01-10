import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Box } from "@material-ui/core";
import { swapView } from "../redux/rootSlice";
const SwapPageButton = () => {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const swapPage = () => {
    if (state.display === "home") {
      dispatch(swapView("favorites"));
    } else {
      dispatch(swapView("home"));
    }
  };

  return (
    <React.Fragment>
      <Box ml={3}>
        <Button onClick={() => swapPage()} variant="contained" color="default">
          {state.display === "home" ? "Favorites" : "Home"}
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default SwapPageButton;
