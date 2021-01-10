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
    favoriteLocations:favorites

},
  reducers: {
    setLocation:(state, action) =>{
      // console.log(action.payload);
      state.location = action.payload;
    },
    setCurrent: (state, action) => {
      state.currentWeather = action.payload;
    },
    setFiveDay: (state, action) => {
      // console.log(action.payload);
      state.fiveDay = action.payload;
    },
    setOptionList: (state, action) => {
      // console.log(action.payload);
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

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// export const asyncDispatch = (payload) => dispatch => {
//   setTimeout(() => {
//     dispatch(setLocation(payload));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const select = state => state.rootReducer.value;



export default rootSlice.reducer;
