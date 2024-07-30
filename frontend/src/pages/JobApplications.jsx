




import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobApplications = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        window.alert('No token found. Please log in.');
        return;
      }
      try {
        const response = await axios.get('http://localhost:5000/api/jobs/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const allApplications = response.data;

        // Filter applications for the particular job
        const jobApplications = allApplications.filter(app => app.jobId === id);
        setApplications(jobApplications);
      } catch (error) {
        setError('Failed to fetch applications');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [id]);

  const handleReject = async (applicationId) => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.alert('No token found. Please log in.');
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/api/jobs/${applicationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedApplications = applications.filter(app => app._id !== applicationId);
      setApplications(updatedApplications);
    } catch (error) {
      window.alert('Failed to reject application');
    }
  };

  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading applications...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
  }

  return (
    <div className="p-4 md:p-8 h-screen bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 animate-gradient-x">
      <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center bg-blue-950 text-white p-3 rounded-xl">Job Applications</h1>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg overflow-x-auto">
        {applications.length === 0 ? (
          <p className="text-center text-gray-500">No applications found for this job.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scholar ID</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Branch</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((application) => (
                  <tr key={application._id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{application.fullName}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{application.scholarId}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{application.branch}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{application.email}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{application.phoneNumber}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-blue-500">
                      <a href={application.resume} target="_blank" rel="noopener noreferrer" className="hover:underline">View Resume</a>
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleReject(application._id)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobApplications;

