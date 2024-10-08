import React from 'react';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import Recruiters from '../components/home/Recruiters';
import Charts from '../components/home/Charts';
import Members from '../components/home/Members';
import Footer from '../components/home/Footer';
import ContactUs from '../components/home/ContactUs';

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Recruiters />
      <Charts />
      <Members />
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default Home;
