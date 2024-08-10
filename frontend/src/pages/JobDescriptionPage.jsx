
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const JobDescriptionPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('https://tnpc.onrender.com/api/jobs/all-jobs');
        const allJobs = response.data;
        const selectedJob = allJobs.find(job => job._id === id);
        setJob(selectedJob);
      } catch (error) {
        console.error('Error fetching job details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">{job.jobRole} at {job.companyName}</h1>
        <p className="text-lg text-gray-700 mb-4">{job.jobDescription}</p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Skills Required:</h2>
        <p className="text-gray-700 mb-4">{job.skillsRequired}</p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">CTC Offered:</h2>
        <p className="text-gray-700 mb-4">{job.ctcOffered}</p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Job Location:</h2>
        <p className="text-gray-700 mb-4">{job.jobLocation}</p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Eligible Branches:</h2>
        <p className="text-gray-700 mb-4">{job.eligibleBranches}</p>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Eligibility Criteria:</h2>
        <p className="text-gray-700 mb-4">{job.eligibilityCriteria}</p>
        <Link to={`/job-description/${id}/apply`}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Apply Now
          </button>
        </Link>
      </div>

      {/* Timeline Section */}
      <div className="flex justify-center">
        <div className="max-w-4xl mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Application Timeline</h2>
          <div className="relative border-l border-gray-300">
            <div className="absolute top-0 left-[-9px]">
              <div className="w-4 h-[50px] bg-blue-500 rounded-3xl"></div>
            </div>
            <div className="pl-4">
              <div className="mb-4 flex items-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Resume Shortlisting</h3>
                  <p className="text-gray-700">Your resume will be reviewed by our HR team.</p>
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Online Assessment</h3>
                  <p className="text-gray-700">Complete an online assessment to test your skills.</p>
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Coding Interview</h3>
                  <p className="text-gray-700">Participate in a coding interview with our technical team.</p>
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">HR Interview</h3>
                  <p className="text-gray-700">Discuss your experience and fit for the role with our HR team.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Final Selection</h3>
                  <p className="text-gray-700">Receive your offer letter and join us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescriptionPage;


