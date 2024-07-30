


import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../assets/home/logo1.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <nav className="bg-gray-800 p-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="text-white text-xl font-bold mb-4 sm:mb-0">
        <img src={logo1} alt="Logo" className="rounded-full inline h-8 mr-2 animate-bounce" />
        Training and Placement Cell
      </div>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 transition duration-300 mb-2 sm:mb-0"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

