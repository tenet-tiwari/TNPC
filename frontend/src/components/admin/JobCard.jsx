// JobCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({job}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
      <h1 className="flex justify-center text-2xl font-bold mb-2 text-gray-800">{job.jobRole}</h1>
      <h2 className="text-lg text-gray-600 mb-2">{job.companyName}</h2>
      <p className="text-gray-700 mb-4">{job.jobDescription}</p>
      <div className="flex justify-center">
      <Link to={`/admin/job-description/${job._id}`}>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Apply
        </button>
      </Link>
      </div>
    </div>
  );
};

export default JobCard;
