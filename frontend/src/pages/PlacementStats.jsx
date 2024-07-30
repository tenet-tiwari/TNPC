






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave } from 'react-icons/fa';
import axios from 'axios';

const PlacementStats = () => {
  const navigate = useNavigate();
  const [year, setYear] = useState('');
  const [numBranches, setNumBranches] = useState('');
  const [branches, setBranches] = useState([]);

  // Handle year input change
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  // Handle number of branches input change
  const handleNumBranchesChange = (e) => {
    const num = parseInt(e.target.value) || 0;
    setNumBranches(num);

    // Create a new array with separate objects for each branch
    setBranches(Array.from({ length: num }, () => ({
      branchName: '',
      studentsEligible: '',
      offersMade: '',
      studentsPlaced: ''
    })));
  };

  // Handle individual branch input change
  const handleBranchChange = (index, e) => {
    const { name, value } = e.target;
    setBranches(prevBranches => {
      const newBranches = [...prevBranches];
      newBranches[index] = { ...newBranches[index], [name]: value };
      return newBranches;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('authToken'); // Obtain the token from local storage or wherever it is stored
    if (!token) {
      window.alert('No token found. Please log in.');
      return;
    }

    const dataToSend = {
      year,
      branches
    };

    try {
      const response = await axios.post('http://localhost:5000/api/placementStats/add-update-placement-stat', dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      if (response.status === 201) {
        window.alert('Placement stats added successfully!');
        navigate('/admin-dashboard');
      } else {
        window.alert('Failed to add placement stats. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error.response ? error.response.data : error.message);
      window.alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <div className="flex justify-center w-full mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold mt-4 text-center bg-blue-950 text-white p-3 rounded-xl">Change Placement Stats</h1>
      </div>

      <div className="min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-gradient-x flex items-center justify-center p-4">
        <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-lg w-full max-w-3xl transition duration-500 ease-in-out transform flex flex-col">
          <div className="flex items-center mb-4">
            <button
              onClick={() => navigate('/admin-dashboard')}
              className="flex items-center text-gray-600 hover:text-gray-900 transition duration-200"
            >
              <FaArrowLeft className="mr-2" />
              Back to Dashboard
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
                Year
              </label>
              <input
                type="text"
                id="year"
                name="year"
                value={year}
                onChange={handleYearChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numBranches">
                Number of Branches
              </label>
              <input
                type="number"
                id="numBranches"
                name="numBranches"
                value={numBranches}
                onChange={handleNumBranchesChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                min="1"
              />
            </div>
            {branches.map((branch, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-700">Branch {index + 1}</h2>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`branchName-${index}`}>
                    Branch Name
                  </label>
                  <input
                    type="text"
                    id={`branchName-${index}`}
                    name="branchName"
                    value={branch.branchName}
                    onChange={(e) => handleBranchChange(index, e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`studentsEligible-${index}`}>
                    Students Eligible
                  </label>
                  <input
                    type="number"
                    id={`studentsEligible-${index}`}
                    name="studentsEligible"
                    value={branch.studentsEligible}
                    onChange={(e) => handleBranchChange(index, e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`offersMade-${index}`}>
                    Offers Made
                  </label>
                  <input
                    type="number"
                    id={`offersMade-${index}`}
                    name="offersMade"
                    value={branch.offersMade}
                    onChange={(e) => handleBranchChange(index, e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`studentsPlaced-${index}`}>
                    Students Placed
                  </label>
                  <input
                    type="number"
                    id={`studentsPlaced-${index}`}
                    name="studentsPlaced"
                    value={branch.studentsPlaced}
                    onChange={(e) => handleBranchChange(index, e)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 flex items-center"
              >
                <FaSave className="mr-2" />
                Save Placement Stats
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PlacementStats;
