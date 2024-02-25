import React from 'react';
import sportsee from '../../Assets/sportsee.png';
import {NavLink} from 'react-router-dom'; 


function Navi() {
    return (
        <head className="header">
  <img src={sportsee} alt="logo" />
  <nav>

          <NavLink href='/'>Accueil</NavLink>
          <NavLink href='#'>Profil</NavLink>
          <NavLink href='#'>Réglages</NavLink>
          <NavLink href='#'>Communauté</NavLink>

  </nav>
        </head>

    );
}

export default Navi;