import React from "react";
import { PieChart, ResponsiveContainer, Pie, Cell } from "recharts";

import PropTypes from 'prop-types'; 

function ScoreProfil({ data }) {
    const score = [
        { value: data.todayScore || data.score },
        { value: 1 - data.todayScore || data.score },
    ];
    return (
        <div className="score">
            <h2 className="score-title">Score</h2>
            <ResponsiveContainer>
                <PieChart>
                    <Pie data={score} dataKey="value" nameKey="name" innerRadius={70} outerRadius={85} startAngle={80}fill="#8884d8">
                    {score.map((_, index) => (
                    index === 0 
                     ?  <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000"/>
                     :  <Cell key={`cell-${index}`} fill="#ffffff"/>
                ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <p className="score-text"><span className="icon icon-pourcent">{score[0].value * 100 }%<br /></span>de votre<br />objectif</p>
        </div>
    );
}
export default ScoreProfil;

ScoreProfil.propTypes = {
    data: PropTypes.object,
};