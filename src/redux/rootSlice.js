import {createSlice} from '@reduxjs/toolkit';
import favorites from '../favoritesData'
export const rootSlice = createSlice({
  name: 'rootReducer',
  initialState: {
    display:'home',
    location:{},
    currentWeather:{},
    fiveDay:[],
    optionList:[],
    favoriteLocations:favorites,
    locationSet:false 

},
  reducers: {
    setLocation:(state, action) =>{
      state.location = action.payload;
      state.locationSet = true;
    },
    setCurrent: (state, action) => {
      state.currentWeather = action.payload;
    },
    setFiveDay: (state, action) => {
      state.fiveDay = action.payload;
    },
    setOptionList: (state, action) => {
      state.optionList = action.payload;
    },
    addFavorite: (state, action) => {
      state.favoriteLocations.push(action.payload);
    },
    swapView: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { addFavorite, setLocation, setOptionList, setCurrent, setFiveDay,swapView } = rootSlice.actions;

export default rootSlice.reducer;
