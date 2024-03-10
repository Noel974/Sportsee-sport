import React from 'react';
import './Styles/Styles.css';
import { BrowserRouter as Router } from "react-router-dom";
import Navi from "./Conmponents/Navbar/Navi.jsx";
import Slide from './Conmponents/SlideNav/Slide.jsx';
import Routeindex from"./Route/Routes.jsx";

function App() {
  return (
    <div className="App">
      <Router>
      <Navi/>
      <Routeindex /> 
      <Slide/>
      </Router>
    </div>
  );
}

export default App;
