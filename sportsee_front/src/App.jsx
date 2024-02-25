import React from 'react';
import './Styles/Styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Navi from "./Conmponents/Navbar/Navi.jsx";
import Routeindex from"./Route/Routes.jsx";

function App() {
  return (
    <div className="App">
      <Router>

      <Routeindex /> 
      <Navi/>
      <Home/>
      </Router>
    </div>
  );
}

export default App;
