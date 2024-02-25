import React from "react";
import yoga from '../../Assets/yoga.svg';
import vtt from '../../Assets/vtt.svg';
import poids from '../../Assets/poids.svg';
import natation from '../../Assets/natation.svg';


function Slide() {
    return (
        <div className="SlideNav">
            <div className="SlideNavList">
                <ul>
                    <li><img src={yoga} alt="yoga" /></li>
                    <li><img src={natation} alt="yoga" /></li>
                    <li><img src={vtt} alt="yoga" /></li>
                    <li><img src={poids} alt="yoga" /></li>
                </ul>
            </div>
            <div className="fotter">Copyright, SportSee 2024</div>
        </div>
    );
}
export default Slide;
