
import React, { useState, useEffect } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import axios from 'axios';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Charts = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [yearWiseData, setYearWiseData] = useState({});
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchYearWiseData = async () => {
      try {
        const response = await axios.get('https://tnpc.onrender.com/api/placementStats/');
        const data = response.data;

        const yearsAvailable = Object.keys(data).sort().reverse();
        const latestFiveYears = yearsAvailable.slice(0, 5);

        setYearWiseData(data);
        setYears(latestFiveYears);
        setSelectedYear(latestFiveYears[0]);
      } catch (error) {
        console.error('Error fetching placement data:', error);
      }
    };

    fetchYearWiseData();
  }, []);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const branchWiseData = {
    labels: yearWiseData[selectedYear]?.map(branch => branch.name) || [],
    datasets: [
      {
        label: 'Eligible Students',
        data: yearWiseData[selectedYear]?.map(branch => branch.eligible) || [],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Offers Made',
        data: yearWiseData[selectedYear]?.map(branch => branch.offers) || [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  const doughnutData = {
    labels: yearWiseData[selectedYear]?.map(branch => branch.name) || [],
    datasets: [
      {
        label: 'Students Placed',
        data: yearWiseData[selectedYear]?.map(branch => branch.placed) || [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Placement Statistics',
      },
    },
  };

  return (
    <section className="py-8 bg-gradient-to-r from-blue-100 via-green-50 to-purple-100 animate-gradient-x">
      <h2 className="text-3xl font-bold text-center mb-6">Placement Statistics</h2>
      <div className="text-center mb-4">
        <label htmlFor="year-select" className="mr-2 font-semibold">Select Year:</label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          className="p-2 border rounded"
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col lg:flex-row justify-around">
        <div className="w-full lg:w-1/2 h-96 p-4">
          <h3 className="text-xl font-semibold mb-2">Branch-wise Placement Data</h3>
          <Bar data={branchWiseData} options={chartOptions} />
        </div>
        <div className="w-full lg:w-1/2 h-96 p-4">
          <h3 className="text-xl font-semibold mb-2">Students Placed</h3>
          <Doughnut data={doughnutData} options={chartOptions} />
        </div>
      </div>
    </section>
  );
};

export default Charts;





