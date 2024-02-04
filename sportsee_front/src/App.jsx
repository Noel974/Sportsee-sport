import React from 'react';
import './Styles/Styles.css';

import { BrowserRouter } from "react-router-dom";

import Navi from './Conmponents/Navbar/Navi.jsx';
import Slide from './Conmponents/SlideNav/Slide.jsx'
import Profil from"./Pages/Profil.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navi />
     <Profil /> 
     <Slide />
      </BrowserRouter>
    </div>
  );
}

export default App;
