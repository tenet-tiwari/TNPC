
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserEdit, FaBriefcase, FaBook, FaCalendarAlt, FaSignOutAlt, FaGithub, FaLink, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';
//import logo1 from '../assets/members/logo1.png'; // Replace with your logo path

const StudentDashboard = () => {
  const navigate = useNavigate();

  const [studentDetails, setStudentDetails] = useState({});
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        window.alert('No token found. Please log in.');
        navigate('/'); // Redirect to login page
        return;
      }
      try {
        const [studentResponse, skillsResponse] = await Promise.all([
          axios.get('http://localhost:5000/api/profile/basic', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          axios.get('http://localhost:5000/api/profile/details', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);
        setStudentDetails(studentResponse.data);
        setSkills(skillsResponse.data);
      } catch (error) {
        setError('Failed to fetch student data');
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-red-200 animate-gradient-x">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-700 text-white flex flex-col items-center py-8 relative">
        <img src={studentDetails.image} alt="Logo" className="w-24 h-24 mb-8 animate-bounce-slow" />
        <nav className="flex flex-col space-y-8 text-justify text-2xl">
          <Link to="/edit-profile" className="hover:text-gray-400 flex items-center space-x-2 ">
            <FaUserEdit />
            <span>Edit Profile</span>
          </Link>
          <Link to="/job-postings" className="hover:text-gray-400 flex items-center space-x-2">
            <FaBriefcase />
            <span>Job Postings</span>
          </Link>
          <Link to="/training-courses" className="hover:text-gray-400 flex items-center space-x-2 ">
            <FaBook />
            <span>Training Courses</span>
          </Link>
          <Link to="/events-sessions" className="hover:text-gray-400 flex items-center space-x-2 ">
            <FaCalendarAlt />
            <span>Events/Sessions</span>
          </Link>
          <button onClick={handleLogout} className="hover:text-gray-400 flex items-center space-x-2 focus:outline-none ">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg m-8 shadow-xl">
        <h1 className="flex justify-center text-4xl font-bold mb-4 text-gray-800 animate-fadeIn">Welcome back, {studentDetails.name}</h1>
        <div className="space-y-2 mb-8">
          <p className="text-lg"><strong>Scholar ID:</strong> {studentDetails.scholarId}</p>
          <p className="text-lg"><strong>Branch:</strong> {studentDetails.branch}</p>
          <p className="text-lg"><strong>Passing Year:</strong> {studentDetails.passingYear}</p>
        </div>
        <div className="mb-8">
          <h2 className="flex justify-center text-4xl font-semibold mb-7 text-gray-800">Skills</h2>
          <div className="flex flex-wrap space-x-9">
            {skills && skills.skills && skills.skills.map((skill, index) => (
              <div key={index} className="flex justify-center items-center space-x-4 bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform hover:animate-bounce mb-7">
                <img src={skill.imageUrl} alt={skill.name} className="w-8 h-8" />
                <span className="text-white">{skill.
                  skillName}</span>
              </div>
            ))}
          </div>
          <div className="absolute bottom-8 flex justify-center space-x-20 mt-8 w-full animate-bounce">
            <a href={skills && skills.
githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition-colors">
              <FaGithub size={35} />
              <span>Github</span>
            </a>
            <a href={skills && skills.
portfolioUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition-colors">
              <FaLink size={35} />
              <span>Portfolio</span>
            </a>
            <a href={skills && skills.
linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition-colors">
              <FaLinkedin size={35} />
              <span>LinkedIn</span>
            </a>
            <a href={skills && skills.
resumeUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-500 transition-colors">
              <FaFilePdf size={35} />
              <span className="flex text-center">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;


// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUserEdit, FaBriefcase, FaBook, FaCalendarAlt, FaSignOutAlt, FaGithub, FaLink, FaLinkedin, FaFilePdf } from 'react-icons/fa';
// import axios from 'axios';

// const StudentDashboard = () => {
//   const navigate = useNavigate();

//   const [studentDetails, setStudentDetails] = useState({});
//   const [skills, setSkills] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         window.alert('No token found. Please log in.');
//         navigate('/'); // Redirect to login page
//         return;
//       }
//       try {
//         const [studentResponse, skillsResponse] = await Promise.all([
//           axios.get('http://localhost:5000/api/profile/basic', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }),
//           axios.get('http://localhost:5000/api/profile/details', {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }),
//         ]);
//         setStudentDetails(studentResponse.data);
//         setSkills(skillsResponse.data);
//       } catch (error) {
//         setError('Failed to fetch student data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudentData();
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('authToken');
//     navigate('/');
//   };

//   if (loading) {
//     return <div className="text-center text-xl font-semibold">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
//   }

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-red-200 animate-gradient-x">
//       {/* Sidebar */}
//       <div className="w-full lg:w-1/4 bg-gray-700 text-white flex flex-col items-center py-8 relative">
//         <img src={studentDetails.image} alt="Profile" className="w-24 h-24 mb-8 rounded-full object-cover animate-bounce-slow" />
//         <nav className="flex flex-col space-y-4 lg:space-y-6 text-lg lg:text-xl text-center lg:text-left">
//           <Link to="/edit-profile" className="hover:text-gray-400 flex items-center space-x-2">
//             <FaUserEdit />
//             <span>Edit Profile</span>
//           </Link>
//           <Link to="/job-postings" className="hover:text-gray-400 flex items-center space-x-2">
//             <FaBriefcase />
//             <span>Job Postings</span>
//           </Link>
//           <Link to="/training-courses" className="hover:text-gray-400 flex items-center space-x-2">
//             <FaBook />
//             <span>Training Courses</span>
//           </Link>
//           <Link to="/events-sessions" className="hover:text-gray-400 flex items-center space-x-2">
//             <FaCalendarAlt />
//             <span>Events/Sessions</span>
//           </Link>
//           <button onClick={handleLogout} className="hover:text-gray-400 flex items-center space-x-2 focus:outline-none">
//             <FaSignOutAlt />
//             <span>Logout</span>
//           </button>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="w-full lg:w-3/4 p-4 lg:p-8 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg m-4 lg:m-8 shadow-xl">
//         <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-gray-800 text-center lg:text-left animate-fadeIn">Welcome back, {studentDetails.name}</h1>
//         <div className="space-y-2 mb-8 text-center lg:text-left">
//           <p className="text-base lg:text-lg"><strong>Scholar ID:</strong> {studentDetails.scholarId}</p>
//           <p className="text-base lg:text-lg"><strong>Branch:</strong> {studentDetails.branch}</p>
//           <p className="text-base lg:text-lg"><strong>Passing Year:</strong> {studentDetails.passingYear}</p>
//         </div>
//         <div className="mb-8 relative">
//           <h2 className="text-2xl lg:text-4xl font-semibold mb-4 text-gray-800 text-center">Skills</h2>
//           <div className="flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6">
//             {skills && skills.skills && skills.skills.map((skill, index) => (
//               <div key={index} className="flex items-center space-x-4 bg-gradient-to-r from-green-200 via-blue-300 to-purple-400 p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform hover:animate-bounce mb-4 lg:mb-6">
//                 <img src={skill.imageUrl} alt={skill.name} className="w-8 h-8" />
//                 <span className="text-white">{skill.skillName}</span>
//               </div>
//             ))}
//           </div>
//           <div className="absolute bottom-4 lg:bottom-8 flex flex-col lg:flex-row justify-center lg:justify-start space-y-4 lg:space-y-0 lg:space-x-6 mt-8 w-full">
//             <a href={skills && skills.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-blue-500 transition-colors">
//               <FaGithub size={30} />
//               <span>Github</span>
//             </a>
//             <a href={skills && skills.portfolioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-blue-500 transition-colors">
//               <FaLink size={30} />
//               <span>Portfolio</span>
//             </a>
//             <a href={skills && skills.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-blue-500 transition-colors">
//               <FaLinkedin size={30} />
//               <span>LinkedIn</span>
//             </a>
//             <a href={skills && skills.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-800 hover:text-blue-500 transition-colors">
//               <FaFilePdf size={30} />
//               <span>Resume</span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;










