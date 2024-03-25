import React from 'react';
import sportsee from '../../Assets/Logo/sportsee.png';
import { NavLink } from 'react-router-dom';


function Navi() {
    return (
        <div className="header">
            <img src={sportsee} alt="logo" />
            <nav>
                <NavLink to='/'>Accueil</NavLink>
                <NavLink href='#'>Profil</NavLink>
                <NavLink href='#'>Réglages</NavLink>
                <NavLink href='#'>Communauté</NavLink>
            </nav>
        </div>

    );
}

export default Navi;