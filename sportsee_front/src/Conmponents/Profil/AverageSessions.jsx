import React from "react";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import PropTypes from 'prop-types';

const SessionsDate = ({ active, payload }) => {
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

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

function AverageSessions({data}) {
    return (
        <div className="average">
            <h2 className="entete">Durée moyenne des sessions</h2>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={data}>
                    <XAxis type="category" dataKey="day" tickFormatter={(tickItem) => days[parseInt(tickItem.split(' ')[1]) - 1]} tick={{ fontSize: 14, stroke: 'rgba(255, 255, 255, 0.7)' }} padding={{ left: 5 ,right: 5}}/>
                    <YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true} />
                    <Tooltip content={<SessionsDate />} />
                    <Line type="monotone" padding={{ left: 10 }} dataKey="sessionLength" stroke="rgba(255, 255, 255, 0.7)" strokeWidth={2} dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
export default AverageSessions;
