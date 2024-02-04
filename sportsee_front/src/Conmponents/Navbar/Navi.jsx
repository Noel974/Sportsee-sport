import React from 'react';
import {NavLink} from 'react-router-dom'; 


const Navi = () =>{
    return (
        <div className='Navbar'>
            <div className='NavbarLogo'></div>
            <div className='NavbarList'>
                <li><NavLink href='#'>Accueil</NavLink></li>
                <li><NavLink href='#'>Profil</NavLink></li>
                <li><NavLink href='#'>Réglages</NavLink></li>
                <li><NavLink href='#'>Communauté</NavLink></li>
            </div>
        </div>
    );
}

export default Navi;