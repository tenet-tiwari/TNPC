


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import axios from 'axios';
import logo1 from '../assets/Job/logo1.jpg';

const NewJobPosting = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    jobRole: '',
    companyName: '',
    jobDescription: '',
    skillsRequired: '',
    ctcOffered: '',
    jobLocation: '',
    eligibleBranches: '',
    eligibilityCriteria: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('authToken');
    if (!token) {
      window.alert('No token found. Please log in.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/jobs/add-job', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      if (response.status === 201) {
        window.alert('Job added successfully!');
        navigate('/admin-dashboard');
      } else {
        window.alert('Failed to add job. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error.response ? error.response.data : error.message);
      window.alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <h1 className="text-3xl font-semibold mb-4 mt-2 text-center text-white bg-blue-950 p-3 rounded-xl">Add New Job Posting</h1>
      </div>
      <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-gradient-x flex items-center justify-center p-4">
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 md:pr-8">
            <button
              onClick={() => navigate('/admin-dashboard')}
              className="flex items-center mb-4 text-gray-600 hover:text-gray-900 transition duration-200"
            >
              <FaArrowLeft className="mr-2" />
              Back to Dashboard
            </button>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobRole">
                  Job Role
                </label>
                <input
                  type="text"
                  id="jobRole"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobDescription">
                  Job Description
                </label>
                <textarea
                  id="jobDescription"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skillsRequired">
                  Skills Required
                </label>
                <input
                  type="text"
                  id="skillsRequired"
                  name="skillsRequired"
                  value={formData.skillsRequired}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ctcOffered">
                  CTC Offered
                </label>
                <input
                  type="text"
                  id="ctcOffered"
                  name="ctcOffered"
                  value={formData.ctcOffered}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="jobLocation">
                  Job Location
                </label>
                <input
                  type="text"
                  id="jobLocation"
                  name="jobLocation"
                  value={formData.jobLocation}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eligibleBranches">
                  Eligible Branches
                </label>
                <input
                  type="text"
                  id="eligibleBranches"
                  name="eligibleBranches"
                  value={formData.eligibleBranches}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eligibilityCriteria">
                  Eligibility Criteria
                </label>
                <textarea
                  id="eligibilityCriteria"
                  name="eligibilityCriteria"
                  value={formData.eligibilityCriteria}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                >
                  <FaSave className="mr-2 inline-block" />
                  Save Job Posting
                </button>
              </div>
            </form>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <img
              src={logo1}
              alt="Job Posting"
              className="rounded-lg shadow-lg w-full h-auto max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewJobPosting;


