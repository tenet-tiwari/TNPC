
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaLink, FaFilePdf } from 'react-icons/fa';
import axios from 'axios';

const EditProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    githubUrl: '',
    linkedinUrl: '',
    portfolioUrl: '',
    resumeUrl: '',
    skills: [],
    skillName: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct skills array with skillName and imageUrl if provided
    const skills = formData.skillName && formData.imageUrl ? [{ skillName: formData.skillName, imageUrl: formData.imageUrl }] : [];

    const formDataToSubmit = {
      githubUrl: formData.githubUrl,
      linkedinUrl: formData.linkedinUrl,
      portfolioUrl: formData.portfolioUrl,
      resumeUrl: formData.resumeUrl,
      skills: skills,
    };

    const token = localStorage.getItem('authToken');
    if (!token) {
      window.alert('No token found. Please log in.');
      return;
    }

    try {
      await axios.post('https://tnpc.onrender.com/api/profile/edit', formDataToSubmit, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      window.alert('Profile updated successfully!');
      navigate('/student-dashboard');
    } catch (error) {
      window.alert('Error updating profile:', error);
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 animate-gradient-x justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-700">GitHub</label>
            <div className="flex items-center space-x-2">
              <FaGithub className="text-gray-500" />
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                placeholder="GitHub URL"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-700">LinkedIn</label>
            <div className="flex items-center space-x-2">
              <FaLinkedin className="text-blue-500" />
              <input
                type="url"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                placeholder="LinkedIn URL"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-700">Portfolio</label>
            <div className="flex items-center space-x-2">
              <FaLink className="text-gray-500" />
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                placeholder="Portfolio URL"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-700">Resume</label>
            <div className="flex items-center space-x-2">
              <FaFilePdf className="text-red-500" />
              <input
                type="url"
                name="resumeUrl"
                value={formData.resumeUrl}
                onChange={handleChange}
                placeholder="Resume URL"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-lg font-semibold text-gray-700">Skills</label>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  name="skillName"
                  value={formData.skillName}
                  onChange={handleChange}
                  placeholder="Skill Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Skill Logo URL"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* <div className="flex flex-wrap space-x-2">
                {formData.skills?.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-green-500 text-white p-2 rounded-md mt-2 animate-bounce"
                  >
                    <img src={skill.logo} alt={skill.name} className="w-8 h-8" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-transform transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;







