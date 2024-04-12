import React from "react";
import {Radar,RadarChart,PolarGrid,PolarAngleAxis,ResponsiveContainer} from "recharts";

function Performance({data}) {
    return (
        <div className="performance">
            <ResponsiveContainer width="100%" height="100%">
				<RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
						<PolarGrid gridType="polygon" />
						<PolarAngleAxis	dataKey="kind" stroke='white' tickLine={false} axisLine={false}  tick={{ fontSize: 10 }}/>
						<Radar dataKey='value' stroke='#FF0101'	fill='#FF0101' fillOpacity={0.7} />
				</RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
export default Performance;