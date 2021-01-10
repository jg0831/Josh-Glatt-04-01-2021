import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Favorites from './components/Favorites'
import { useSelector } from "react-redux";
import { CssBaseline } from "@material-ui/core/";
function App() {
  const state = useSelector((state) => state.root);
  return (
    <div className="App">
      <CssBaseline />
      <Header lg={12} />
      {state.display === "home" ? <Home /> : <Favorites favorites={state.favoriteLocations} />}
    </div>
  );
}

export default App;

//'215854' tel aviv key
