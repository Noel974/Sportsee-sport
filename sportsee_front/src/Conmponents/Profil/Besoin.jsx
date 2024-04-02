import React from "react";
import PropTypes from "prop-types";
import caloriesIcon from "../../Assets/Logo/caloriesIcon.svg";
import proteinsIcon from "../../Assets/Logo/proteinIcon.svg";
import carbsIcon from "../../Assets/Logo/carbsIcon.svg";
import fatIcon from "../../Assets/Logo/fatIcon.svg";

const KeyData = ({ icon, info, text }) => {
    return (
        <div className="keydata">
            <img src={icon} alt="calories icon"/>
            <div className="infos">
                <p className="infosData">{info}</p>
                <p className="infosText">{text}</p>
            </div>
        </div>
    );
};

KeyData.propTypes = {
    icon: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

function Nutrition({ data }) {
    console.log("Data passed to Nutrition component:", data);
    
    if (!data || !data.keyData) {
        console.log("Data or keyData is missing.");
        return null; // Or display some fallback UI
    }

    console.log("Calorie count:", data.keyData.calorieCount);
    console.log("Protein count:", data.keyData.proteinCount);
    console.log("Carbohydrate count:", data.keyData.carbohydrateCount);
    console.log("Lipid count:", data.keyData.lipidCount);

    return (
        <aside className="aside">
            <KeyData icon={caloriesIcon} info={`${data.keyData.calorieCount}kCal`} text='Calories' />
            <KeyData icon={proteinsIcon} info={`${data.keyData.proteinCount}g`} text='Proteines' />
            <KeyData icon={carbsIcon} info={`${data.keyData.carbohydrateCount}g`} text='Glucides' />
            <KeyData icon={fatIcon} info={`${data.keyData.lipidCount}g`} text='Lipides' />
        </aside>
    );
}

export default Nutrition;

Nutrition.propTypes = {
    data: PropTypes.object.isRequired,
};
