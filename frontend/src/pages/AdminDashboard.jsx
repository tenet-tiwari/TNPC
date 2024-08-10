// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Bar, Doughnut, Line } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { FaUserPlus, FaChalkboardTeacher, FaCalendarAlt, FaChartBar, FaSignOutAlt,FaBriefcase } from 'react-icons/fa';
// import logo1 from '../assets/members/logo1.png'

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [selectedYear, setSelectedYear] = useState('2023');

//   const handleLogout = () => {
//     // Perform any logout logic here
//     localStorage.removeItem('authToken');
//     navigate('/');
//   };

//   const handleYearChange = (event) => {
//     setSelectedYear(event.target.value);
//   };

//   // Dummy data for charts (replace with actual data)
//   const getBarData = (year) => {
//     const data = {
//       '2023': {
//         labels: ['CSE', 'ECE', 'EEE', 'ME', 'CE'],
//         datasets: [
//           {
//             label: 'Male Students',
//             backgroundColor: 'rgba(54, 162, 235, 0.5)',
//             borderColor: 'rgba(54, 162, 235, 1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'rgba(54, 162, 235, 0.7)',
//             hoverBorderColor: 'rgba(54, 162, 235, 1)',
//             data: [65, 59, 80, 81, 56]
//           },
//           {
//             label: 'Female Students',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
//             hoverBorderColor: 'rgba(255, 99, 132, 1)',
//             data: [35, 40, 60, 47, 30]
//           }
//         ]
//       },
//       '2022': {
//         labels: ['CSE', 'ECE', 'EEE', 'ME', 'CE'],
//         datasets: [
//           {
//             label: 'Male Students',
//             backgroundColor: 'rgba(54, 162, 235, 0.5)',
//             borderColor: 'rgba(54, 162, 235, 1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'rgba(54, 162, 235, 0.7)',
//             hoverBorderColor: 'rgba(54, 162, 235, 1)',
//             data: [60, 53, 75, 65, 80]
//           },
//           {
//             label: 'Female Students',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             borderColor: 'rgba(255, 99, 132, 1)',
//             borderWidth: 1,
//             hoverBackgroundColor: 'rgba(255, 99, 132, 0.7)',
//             hoverBorderColor: 'rgba(255, 99, 132, 1)',
//             data: [42, 39, 56, 43, 55]
//           }
//         ]
//       },
//       // Add more data for other years
//     };

//     return data[year] || data['2023'];
//   };

//   const getDoughnutData = (year) => {
//     const data = {
//       '2023': {
//         labels: ['CSE', 'ECE', 'EEE', 'ME', 'CE'],
//         datasets: [
//           {
//             data: [300, 50, 100, 40, 120],
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//             hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
//           }
//         ]
//       },
//       '2022': {
//         labels: ['CSE', 'ECE', 'EEE', 'ME', 'CE'],
//         datasets: [
//           {
//             data: [190, 60, 96, 56, 110],
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
//             hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
//           }
//         ]
//       },
//       // Add more data for other years
//     };

//     return data[year] || data['2023'];
//   };

//   const lineData = {
//     labels: ['2019', '2020', '2021', '2022', '2023'],
//     datasets: [
//       {
//         label: 'Placement Statistics',
//         fill: false,
//         lineTension: 0.1,
//         backgroundColor: 'rgba(75,192,192,0.4)',
//         borderColor: 'rgba(75,192,192,1)',
//         borderCapStyle: 'butt',
//         borderDash: [],
//         borderDashOffset: 0.0,
//         borderJoinStyle: 'miter',
//         pointBorderColor: 'rgba(75,192,192,1)',
//         pointBackgroundColor: '#fff',
//         pointBorderWidth: 1,
//         pointHoverRadius: 5,
//         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//         pointHoverBorderColor: 'rgba(220,220,220,1)',
//         pointHoverBorderWidth: 2,
//         pointRadius: 1,
//         pointHitRadius: 10,
//         data: [65, 59, 80, 81, 56]
//       }
//     ]
//   };

//   return (
//     <div className="flex min-h-screen  bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-gradient-x">
//       <div className="w-64 shadow-lg transition duration-500 ease-in-out transform  bg-blue-950 text-slate-50">
//         <div className="p-4 border-b">
//           <img src={logo1} alt="Admin Logo" className="w-32 mx-auto" />
//         </div>
//         <nav className="mt-4 space-y-2">
//           <Link to="/admin/add-job-posting" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
//             <FaUserPlus className="mr-2" />
//             Add New Job Posting
//           </Link>
//           <Link to="/admin/add-training-course" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
//             <FaChalkboardTeacher className="mr-2" />
//             Add New Training Course
//           </Link>
//           <Link to="/admin/add-session-event" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
//             <FaCalendarAlt className="mr-2" />
//             Add New Session/Event
//           </Link>
//           <Link to="/admin/job-posting" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
//             <FaBriefcase className="mr-2" />
//              Job Posting
//           </Link>
//           <Link to="/admin/change-placement-stats" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
//             <FaChartBar className="mr-2" />
//             Change Placement Stats
//           </Link>
//           <button onClick={handleLogout} className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700 w-full text-left">
//             <FaSignOutAlt className="mr-2" />
//             Logout
//           </button>
//         </nav>
//       </div>
//       <div className="flex-1 p-8">
//         <div className="flex justify-between items-center mb-8">
//         <div className="flex justify-center w-full">
//         <h1 className="text-3xl font-semibold text-black">Placement Statistics</h1>
//         </div>
          
//           <select
//             className="p-2 rounded-lg shadow-lg transition duration-200 bg-white text-black"
//             value={selectedYear}
//             onChange={handleYearChange}
//           >
//             <option value="2023">2023</option>
//             <option value="2022">2022</option>
//             <option value="2021">2021</option>
//             <option value="2020">2020</option>
//             <option value="2019">2019</option>
//           </select>
//         </div>
//         <div className="flex">
//           <div className="w-1/2 pr-4">
//             <h2 className="text-2xl font-semibold mb-4 text-black flex justify-center">Number of Male vs Female Students Registered</h2>
//             <div className="bg-white p-6 rounded-lg shadow-lg transition duration-500 ease-in-out transform  hover:scale-105 h-[447px] flex items-center">
//               <Bar data={getBarData(selectedYear)} />
//             </div>
//           </div>
//           <div className="w-1/2 pl-4">
//             <h2 className="text-2xl font-semibold mb-4 text-black flex justify-center">Number of Students Placed </h2>
//             <div className="bg-white p-6 rounded-lg shadow-lg transition duration-500 ease-in-out transform  hover:scale-105 h-[447px] items-center flex-col flex">
//               <Doughnut data={getDoughnutData(selectedYear)} />
//             </div>
//           </div>
//         </div>
//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold mb-4 text-black">Placement Comparison</h2>
//           <div className="bg-white p-6 rounded-lg shadow-lg transition duration-500 ease-in-out transform ">
//             <Line data={lineData} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { FaUserPlus, FaChalkboardTeacher, FaCalendarAlt, FaChartBar, FaSignOutAlt, FaBriefcase } from 'react-icons/fa';
import logo1 from '../assets/members/logo1.png';



const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('');
  const [years, setYears] = useState([]);
  const [placementStats, setPlacementStats] = useState({});
  const [students, setStudents] = useState([]);
  const [adminDetails, setAdminDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all users
        const usersResponse = await axios.get('https://tnpc.onrender.com/api/auth', {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        });
        const allUsers = usersResponse.data;


        const adminResponse = await axios.get('https://tnpc.onrender.com/api/profile/admin', {
          headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
        });
        setAdminDetails(adminResponse.data);

        // Filter students and get passing years for dropdown
        const students = allUsers.filter(user => user.role === 'student');
        setStudents(students);

        const placementStatsResponse = await axios.get('https://tnpc.onrender.com/api/placementStats');
        const fetchedPlacementStats = placementStatsResponse.data;
        setPlacementStats(fetchedPlacementStats);

        const years = Object.keys(fetchedPlacementStats).sort((a, b) => b - a);
        setYears(years);

        if (years.length > 0) {
          setSelectedYear(years[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const getFilteredPlacementStats = (year) => {
    return placementStats[year] || [];
  };

  const getBarData = (year) => {
    const filteredStats = getFilteredPlacementStats(year);
    const labels = filteredStats.map(branch => branch.name);

    const maleData = labels.map((branch) => students.filter(stu => stu.passingYear === year && stu.gender === 'Male' && stu.branch === branch).length);
    const femaleData = labels.map((branch) => students.filter(stu => stu.passingYear === year && stu.gender === 'Female' && stu.branch === branch).length);

    return {
      labels,
      datasets: [
        {
          label: 'Male Students',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: maleData,
        },
        {
          label: 'Female Students',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: femaleData,
        },
      ],
    };
  };

  const getDoughnutData = (year) => {
    const filteredStats = getFilteredPlacementStats(year);
    const labels = filteredStats.map(branch => branch.name);
    const data = filteredStats.map((branch) => branch.placed || 0);

    return {
      labels,
      datasets: [
        {
          data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        },
      ],
    };
  };

  const getLineData = () => {
    const labels = [...years].reverse();
    const eligibleData = labels.map(year => {
      const filteredStats = getFilteredPlacementStats(year);
      return filteredStats.reduce((sum, branch) => sum + (branch.eligible || 0), 0);
    });
    
    const placedData = labels.map(year => {
      const filteredStats = getFilteredPlacementStats(year);
      return filteredStats.reduce((sum, branch) => sum + (branch.placed || 0), 0);
    });

    return {
      labels,
      datasets: [
        {
          label: 'Total Students Eligible',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          data: eligibleData,
        },
        {
          label: 'Total Students Placed',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,99,132,0.4)',
          borderColor: 'rgba(255,99,132,1)',
          data: placedData,
        },
      ],
    };
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-gradient-x">
      <div className="w-64 shadow-lg transition duration-500 ease-in-out transform bg-blue-950 text-slate-50">
        <div className="p-4 border-b">
          <img src={adminDetails.image} alt="Admin Logo" className="w-32 mx-auto" />
        </div>
        <nav className="mt-4 space-y-2">
          <Link to="/admin/add-job-posting" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
            <FaUserPlus className="mr-2" />
            Add New Job Posting
          </Link>
          <Link to="/admin/add-training-course" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
            <FaChalkboardTeacher className="mr-2" />
            Add New Training Course
          </Link>
          <Link to="/admin/add-session-event" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
            <FaCalendarAlt className="mr-2" />
            Add New Session/Event
          </Link>
          <Link to="/admin/job-posting" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
            <FaBriefcase className="mr-2" />
            Job Posting
          </Link>
          <Link to="/admin/change-placement-stats" className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700">
            <FaChartBar className="mr-2" />
            Change Placement Stats
          </Link>
          <button onClick={handleLogout} className="flex items-center py-2.5 px-4 rounded-lg transition duration-200 hover:bg-blue-200 hover:text-blue-700 w-full text-left">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex justify-center w-full">
            <h1 className="text-3xl font-semibold text-black">Placement Statistics</h1>
          </div>
          <select
            className="p-2 rounded-lg shadow-lg transition duration-200 bg-white text-black"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {years.map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <h2 className="text-2xl font-semibold mb-4 text-black flex justify-center">Number of Students by Gender</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 h-[447px] flex items-center">
              <Bar data={getBarData(selectedYear)} options={{ responsive: true }} />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h2 className="text-2xl font-semibold mb-4 text-black flex justify-center">Students Placed by Branch</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 h-[447px] items-center flex-col flex">
              <Doughnut data={getDoughnutData(selectedYear)} options={{ responsive: true }} />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-black text-center">Placement Stats Over the Years</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:scale-105 h-[447px] flex items-center">
            <Line data={getLineData()} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

