
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import axios from 'axios';
import logo3 from '../assets/Job/logo3.svg';

const NewEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: '',
    eventSpeaker: '',
    description: '',
    link: ''
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

    const token = localStorage.getItem('authToken'); // Obtain the token from local storage or wherever it is stored
    if (!token) {
      window.alert('No token found. Please log in.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('eventName', formData.eventName);
    formDataToSend.append('speaker', formData.eventSpeaker);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('link', formData.link);

    try {
      const response = await axios.post('https://tnpc.onrender.com/api/event/add-event', formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      if (response.status === 201) {
        window.alert('Event added successfully!');
        navigate('/admin-dashboard');
      } else {
        window.alert('Failed to add event. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error.response ? error.response.data : error.message);
      window.alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <h1 className="text-3xl font-semibold mb-4 mt-2 text-center text-white bg-blue-950 p-3 rounded-xl">Add New Event</h1>
      </div>
        
      <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-gradient-x flex items-start justify-center p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row">
          {/* Form Section */}
          <div className="w-full md:w-1/2 md:pr-8">
            <button
              onClick={() => navigate('/admin-dashboard')}
              className="flex items-center mb-4 text-gray-600 hover:text-gray-900 transition duration-200"
            >
              <FaArrowLeft className="mr-2" />
              Back to Dashboard
            </button>
            <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Add New Event</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventName">
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventSpeaker">
                  Speaker
                </label>
                <input
                  type="text"
                  id="eventSpeaker"
                  name="eventSpeaker"
                  value={formData.eventSpeaker}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="link">
                  Link to Attend
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
                >
                  <FaSave className="mr-2 inline-block" />
                  Save Event
                </button>
              </div>
            </form>
          </div>
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
            <img
              src={logo3}
              alt="Event"
              className="rounded-lg shadow-lg w-full h-auto max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewEvent;


