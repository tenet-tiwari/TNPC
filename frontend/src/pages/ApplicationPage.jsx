


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ApplicationPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    scholarId: '',
    branch: '',
    year: '',
    email: '',
    phoneNumber: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken'); // Obtain the token from local storage or wherever it is stored
    if (!token) {
      window.alert('No token found. Please log in.');
      return;
    }

    // Create a FormData object
    const formDataToSend = new FormData();
    formDataToSend.append('fullName', formData.fullName);
    formDataToSend.append('scholarId', formData.scholarId);
    formDataToSend.append('branch', formData.branch);
    formDataToSend.append('year', formData.year);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phoneNumber', formData.phoneNumber);
    
    // Append file if exists
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    try {
      const response = await axios.post(`https://tnpc.onrender.com/api/jobs/apply/${id}`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      if (response.status === 201) {
        window.alert('Application submitted successfully!');
        // Reset the form
        setFormData({
          fullName: '',
          scholarId: '',
          branch: '',
          year: '',
          email: '',
          phoneNumber: '',
          resume: null,
        });
      } else {
        window.alert('Failed to submit application. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the application:', error.response ? error.response.data : error.message);
      window.alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-1">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-3 text-gray-800 flex justify-center">Apply for the Job</h1>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="scholarId" className="block text-gray-700 font-medium mb-1">Scholar ID</label>
            <input
              type="text"
              id="scholarId"
              name="scholarId"
              value={formData.scholarId}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="branch" className="block text-gray-700 font-medium mb-1">Branch</label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-gray-700 font-medium mb-1">Year</label>
            <input
              type="text"
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="resume" className="block text-gray-700 font-medium mb-1">Upload CV/Resume</label>
            <input
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationPage;

