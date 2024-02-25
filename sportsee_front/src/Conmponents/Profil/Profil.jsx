import React from "react";
import PropTypes from 'prop-types'; 

function Profil ({name}) {
    return(
<div className="profil">
    <div className="Bienvenu">Bienvenu <name>{name}</name></div>
    <div className="textencours">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
</div>
    );
}
Profil.propTypes = {
	name: PropTypes.string,
};
export default Profil;
