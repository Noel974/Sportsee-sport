import React from "react";
import { NavLink } from "react-router-dom";

function Slide() {
    return(
        <div className="SlideNav">
            <div className="SlideNavList">
            <li><NavLink href='#'>fdf</NavLink></li>
                <li><NavLink href='#'>s</NavLink></li>
                <li><NavLink href='#'>fgf</NavLink></li>
                <li><NavLink href='#'>gfd</NavLink></li>
        </div>
        <div className="fotter">Copyright, SportSee 2024</div>
        </div>
    );
} 
export default Slide;
