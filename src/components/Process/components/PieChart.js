import React from 'react';
import { PieChart, Pie, Cell, Sector, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 200 },
    { name: 'Group B', value: 200 },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 200 },
    { name: 'Group D', value: 200 },
    { name: 'Group D', value: 200 },
    { name: 'Group D', value: 200 },
    { name: 'Group D', value: 200 },
    { name: 'Group D', value: 200 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, data }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
 const x  = cx + radius * Math.cos(-midAngle * RADIAN);
 const y = cy  + radius * Math.sin(-midAngle * RADIAN);

 return (
   <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
       sometext
   </text>
 );
};


const EpigeneticChart = () => {

    return(
        <ResponsiveContainer width='100%' height="100%">
        <PieChart>
            <Pie
                data={data}
                cx={250}
                cy={180}
                innerRadius={75}
                outerRadius={160}
                fill="#8884d8"
                paddingAngle={1}
                labelLine={false}
                label={renderCustomizedLabel}
            >
                {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                }
            </Pie>

        </PieChart>
    </ResponsiveContainer>
    )
};

export default EpigeneticChart;