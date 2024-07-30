import React from 'react';
import logo1 from '../../assets/Hero/logo1.jpg'

const Hero = () => {
  return (
    <section className="relative bg-cover bg-no-repeat bg-center h-screen bg-hero-pattern">
      <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Training and Placement Cell</h1>
          <p className="mb-4">Your future starts here. Explore opportunities and kickstart your career with us.</p>
          <a href="http://www.nits.ac.in/" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Visit College Website</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;



