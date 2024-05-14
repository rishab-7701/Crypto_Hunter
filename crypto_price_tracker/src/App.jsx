import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";
import {makeStyles} from "@material-ui/core";
// import CryptoContext from "./context/CryptoContext";

function App() {

   const useStyles = makeStyles(() => ({
    App:{
      backgroundColor : "#0a0909",
      color : "white",
      minHeight: "100vh" ,
    },
   }));

   const classes = useStyles();
   
  return (
    <BrowserRouter>
    {/* <CryptoContext> */}
      <div className={classes.App}>
        <Header/>
          <Routes>
            <Route path="/" Component={HomePage}/>
            <Route path="coins/:id" Component={CoinPage}/>
          </Routes>
      </div>
      {/* </CryptoContext> */}
    </BrowserRouter>
  )
}

export default App
