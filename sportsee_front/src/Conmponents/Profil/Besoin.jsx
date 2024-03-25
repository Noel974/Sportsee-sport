import React from "react";
import PropTypes from "prop-types";
import caloriesIcon from "../../Assets/Logo/caloriesIcon.svg";
import proteinsIcon from "../../Assets/Logo/proteinIcon.svg";
import carbsIcon from "../../Assets/Logo/carbsIcon.svg";
import fatIcon from "../../Assets/Logo/fatIcon.svg";

const KeyData = ({ icon, info, text }) => {
    return (
        <div className="wrapper">
            <div className="icon">
                <img src={icon} alt="calories icon" />
            </div>
            <div className="infos">
                <div className="infos-data">{info}</div>
                <div className="infos-text">{text}</div>
            </div>
        </div>
    );
};

KeyData.propTypes = {
    icon: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

function Besoin({ data }) {
    return (
        <aside className="key-data-container">
            <KeyData
                icon={caloriesIcon} 
                info={`${data.keyData.calorieCount}kCal`}
                text="Calories"
            />
            <KeyData
                icon={proteinsIcon} 
                info={`${data.keyData.proteinCount}g`}
                text="Proteines"
            />
            <KeyData
                icon={carbsIcon} 
                info={`${data.keyData.carbohydrateCount}g`}
                text="Glucides"
            />
            <KeyData
                icon={fatIcon} 
                info={`${data.keyData.lipidCount}g`}
                text="Lipides"
            />
        </aside>
    );
}

Besoin.propTypes = {
    data: PropTypes.object.isRequired, 
};

export default Besoin;
