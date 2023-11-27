
// import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// const StackedBarChart = ({ data }) => {
//     return (
//         <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="value1" stackId="a" fill="#8884d8" />
//             <Bar dataKey="value2" stackId="a" fill="#82ca9d" />
//         </BarChart>
//     );
// };

// export default StackedBarChart;
// components/StackedBarChart.js

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const StackedBarChart = ({ data }) => {
    return (
        <ResponsiveContainer width="80%" height={400}>
            <BarChart width={1024} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value1" stackId="a" fill="#006D75" barSize={45} />
                <Bar dataKey="value2" stackId="a" fill="#13C2C2" barSize={45} />
                <Bar dataKey="value2" stackId="a" fill="#87E8DE" barSize={45} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedBarChart;
