import {
  AppBar,
  Box,
  Button,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  autoComplete,
  getFiveDayForecast,
  getCurrentConditions,
  getLocationByTerm,
} from "../api.js";
import { setOptionList, setLocation, setFiveDay, setCurrent, swapView } from "../redux/rootSlice";
import { optionCheck } from "../utils";
import SwapPageButton from "./SwapPageButton.js";
export default function Header() {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    if (e) {
      setSearchTerm(e.target.value);
    }
  };
  const dropDownSelect = (e) => {
    if (e) {
      setSearchTerm(e.target.textContent);
    }
  };
  const handleFormField = async (location) => {
    const res = await autoComplete(location);
    await dispatch(dispatch(setOptionList(res)));
  };

  const submitSearch = async () => {
    let location = await optionCheck(state.optionList, searchTerm);
    if (!location) {
       location = await getLocationByTerm(searchTerm);
    }
    await console.log(location)
    const fiveDay = await getFiveDayForecast(location.Key);
    const currentConditions = await getCurrentConditions(location.Key);
    await dispatch(dispatch(setLocation(location)));
    await dispatch(dispatch(setFiveDay(fiveDay)));
    await dispatch(dispatch(setCurrent(currentConditions)));
    await dispatch(swapView("home"));
  };

  useEffect(() => {
    if (searchTerm.length >= 2) {
      handleFormField(searchTerm);
    }
  }, [searchTerm]);
  const displayDesktop = () => {
    return (
      <Toolbar>
        <Box mr={1}>
          {" "}
          <Typography variant={"h5"}> Weather App</Typography>
        </Box>
        <Box mr={1}>
        <Autocomplete
          id="combo-box-demo"
          options={state.optionList.map((option) => option.LocalizedName)}
          onChange={dropDownSelect}
          // getOptionLabel={(option) => option.LocalizedName}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              value={searchTerm}
              onChange={handleChange}
              label="Enter Location"
              variant="outlined"
            />
          )}
        />
        </Box>
        <Button
          onClick={() => submitSearch()}
          variant="contained"
          color="default"
        >
          Submit
        </Button>
        <SwapPageButton />
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar position="relative">{displayDesktop()}</AppBar>
    </header>
  );
}
