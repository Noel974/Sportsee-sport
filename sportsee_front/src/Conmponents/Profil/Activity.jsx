import React from "react";
// import Hooks Activity Data
import MyActivity from "../../Outils/Activitydata";
import PropTypes from 'prop-types';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const CustomTooltip = ({ active, payload }) => {
    //La Fonction prend deux parmetres active et payload
    if (active) {
        return (
            <div className="tooltip">
                <p>{payload[0].value}Kg</p>
                <p>{payload[1].value}Kcal</p>
            </div>
        );
    }
    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};

function Activity() {
    const data = MyActivity();
    // Si les donnés ne sont pas encore recuperés, on retourne null
    if (!data) return null;

    return (   
    <div className="wrapper">
    <div className="head">
        <h2 className="titlea-activity">Activité quotidienne</h2>
        <div className="legend">
            <div className="info">
                <div className="icon kg"></div>
                <p>Poids (kg)</p>
            </div>
            <div className="info">
                <div className="icon kcal"></div>
                <p>Calories brûlées (kCal)</p>
            </div>
        </div>
    </div>
        <ResponsiveContainer>
            <BarChart data={data} barGap={8} barCategoryGap={1}>
                <CartesianGrid vertical={false} strokeDasharray="1 1" />
                <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} />
                <YAxis yAxisId="kilogram" dataKey="kilogram" type="number" domain={['dataMin - 2', 'dataMax + 1']} tickCount={3} axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: 14 }} dx={15} />
                <YAxis yAxisId="calories" dataKey="calories" type="number" domain={['dataMin - 20', 'dataMax + 10']} hide />
                <Tooltip content={<CustomTooltip />} />
                <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
                <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
            </BarChart>
        </ResponsiveContainer>
</div>
    );
}
export default Activity;