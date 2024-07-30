


import React, { useState, useEffect } from 'react';
import JobCard from '../components/student/JobCard';
import axios from 'axios';

const JobPosting = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let response;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
         response = await axios.get('http://localhost:5000/api/jobs/all-jobs');
        setJobs(response.data);
        
      } catch (error) {
        setError('Failed to fetch job postings');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading job postings...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 via-pink-100 to-red-200 animate-gradient-x p-8">
     <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 bg-blue-950 text-white p-3 rounded-xl">Job Postings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobs.map((job, index) => (
  <JobCard key={index} job={job} />
))}

      </div>
    </div>
    </div>
  );
};

export default JobPosting;

