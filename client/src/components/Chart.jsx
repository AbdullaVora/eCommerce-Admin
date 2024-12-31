// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';

// const uData = [3, 2, 1, 1.5, 0.5, 1, 2.5]; // Values mapped to indices of yLabels
// const pData = [2, 1.5, 4, 1.2, 3, 2.7, 2.9];
// const xLabels = [
//     'MONDAY',
//     'TUESDAY',
//     'WEDNESDAY',
//     'THURSDAY',
//     'FRIDAY',
//     'SATURDAY',
//     'SUNDAY',
// ];
// const yLabels = [120, 90, 60, 30, 0]; // Custom Y-axis values

// const SimpleLineChart = () => {
//     return (
//         <LineChart
//             width={800}
//             height={400}
//             series={[
//                 { data: pData, label: 'pv' },
//                 { data: uData, label: 'uv' },
//             ]}
//             xAxis={[
//                 {
//                     scaleType: 'point',
//                     data: xLabels,
//                     label: 'Days of the Week', // Add x-axis label
//                 },
//             ]}
//             yAxis={[
//                 {
//                     scaleType: 'linear',
//                     data: yLabels,
//                     label: 'Values', // Add y-axis label
//                 },
//             ]}
//             sx={{
//                 '--Charts-axisLabel-color': 'white', // Set axis label color to white
//                 '--Charts-tickLabel-color': 'white', // Set tick label color to white
//                 // Optional: Uncomment for a dark background
//                 // backgroundColor: '#333',
//             }}
//         />
//     );
// };

// export default SimpleLineChart;
import React from 'react';
import { CChartLine } from '@coreui/react-chartjs';
import { RxBorderDashed } from 'react-icons/rx';

const StyledLineChart = () => {
    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
            {
                label: 'Stock',
                backgroundColor: 'rgba(0, 123, 255, 0.2)', // Light blue background for the area
                borderColor: 'rgba(0, 123, 255, 1)', // Solid blue border
                pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                data: [40, 28, 99, 42, 30, 100],
                fill: true,
                tension: 0.4, // Smooth line curve
                pointRadius: 0, // Hide points
            },
            {
                label: 'Order',
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white for second dataset
                borderColor: 'rgba(255, 255, 255, 0.8)', // White border
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                data: [32, 45, 32, 34, 60, 40],
                fill: true,
                tension: 0.4, // Smooth curve
                pointRadius: 0, // Hide points
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow custom height
        plugins: {
            legend: {
                position: 'bottom', // Position legend at the bottom
                labels: {
                    color: 'rgba(255, 255, 255, 0.8)', // White legend text
                },
            },
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)',
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)', // White x-axis labels
                },
            },
            y: {
                ticks: {
                    callback: (value) => {
                        if (value === 0) return 'Low';
                        if (value === 50) return 'Medium';
                        if (value === 100) return 'High';
                        return ''; // Hide other tick values
                    },
                },
                min: 0, // Ensure the y-axis starts from 0
                max: 120,
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)', // Faint white horizontal gridlines
                },
                ticks: {
                    color: 'rgba(255, 255, 255, 0.8)', // White y-axis labels
                },
            },
        },
    };

    return (
        <div
        >
            <h3 style={{ color: 'white', textAlign: 'center' }}>Sales Analytics</h3>
            <CChartLine data={data} options={options} width={300} height={350} />
        </div>
    );
};

export default StyledLineChart;
