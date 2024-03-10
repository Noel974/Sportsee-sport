import React from "react";
import yoga from '../../Assets/yoga.svg';
import vtt from '../../Assets/vtt.svg';
import poids from '../../Assets/poids.svg';
import natation from '../../Assets/natation.svg';
import { NavLink } from 'react-router-dom';


function Slide() {
    return ( 
        <div className="slide">
            <div className="SlideNav">
                <div className="SlideNavList">
                    <NavLink to='#'><img src={yoga} alt="yoga" /></NavLink>
                    <NavLink to='#'><img src={natation} alt="Natation" /></NavLink>
                    <NavLink to='#'><img src={vtt} alt="velo" /></NavLink>
                    <NavLink to='#'><img src={poids} alt="Musculation" /></NavLink>
                </div>
                <div className="NavText">Copiryght, SportSee 2020</div>
            </div>
        </div>
     );
}

export default Slide;