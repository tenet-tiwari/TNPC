import React from 'react';
import logo3 from '../assets/Extra/logo3.jpg';

const NotAuthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 animate-gradient-x">
      <div className="relative w-96 h-96">
        <img 
          src={logo3}
          alt="Access Denied" 
          className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-blue-300"
        />
      </div>
      <div className="text-center text-black p-8 mt-4 rounded-lg bg-opacity-80 max-w-lg mx-auto bg-gradient-to-r from-purple-200 via-pink-100 to-red-200 animate-gradient-x">
        <h1 className="text-4xl font-bold mb-4 animate-pulse">Access Denied</h1>
        <p className="text-lg mb-6">You do not have permission to view this page.</p>
      </div>
      <div className="mt-4">
        <a href="/" className="text-black hover:text-gray-950 hover:underline text-lg font-semibold">Return to Home</a>
      </div>
    </div>
  );
};

export default NotAuthorized;
