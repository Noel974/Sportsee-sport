import React from "react";
import MyAverageSessions from "../../Outils/AverageSessionssata";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import PropTypes from 'prop-types';


const SessionsDate = ({ active, payload }) => {
    //La Fonction prend deux parmetres active et payload
    if (active) {
        return (
            <div className="date">
                <p className="value">{payload[0].value}min</p>
            </div>
        );
    }
    return null;
};

SessionsDate.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};

function AverageSsession() {
    const data = MyAverageSessions();
    // Si les donnés ne sont pas encore recuperés, on retourne null
    if (!data) return null;

    return (
        <div className="average">
            <h2 className="entete">Durée moyenne des sessions</h2>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={data} >
                    <XAxis type="category" dataKey="day" tickLine={false} tick={{ fontSize: 14, stroke: 'rgba(255, 255, 255, 0.7)' }} />
                    <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true} />
                    <Tooltip content={<SessionsDate />} />
                    <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default AverageSsession;