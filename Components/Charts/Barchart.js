
// import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// const BarChartComponent = ({ data }) => {
//     return (
//         <BarChart width={600} height={400} data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value" fill="#8884d8" />
//         </BarChart>
//     );
// };

// export default BarChartComponent;
// components/BarChart.js

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => {
    return (

        <ResponsiveContainer width="100%" height={400}>
        <BarChart width={1024}data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Agent A" fill="#FF85C0" />
            <Bar dataKey="Agent B" fill="#B37FEB" />
        </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
