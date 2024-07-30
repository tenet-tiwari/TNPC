

import React from 'react';
import logo1 from '../../assets/members/logo1.png';

const members = [
  { name: "Member 1", role: "Role 1", logo: logo1},
  { name: "Member 2", role: "Role 2", logo:  logo1},
  { name: "Member 3", role: "Role 3", logo:  logo1},
  { name: "Member 4", role: "Role 4", logo:  logo1},
  
  // Add more members as needed
];

const Members = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-purple-100 via-pink-50 to-red-50 animate-gradient-x">
      <h2 className="text-3xl font-bold text-center mb-6">Our Organizing Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {members.map((member, index) => (
          <div key={index} className="text-center">
            <img src={member.logo} alt={member.name} className="w-[250px] rounded-full mb-2 hover:scale-110 transition-transform duration-300" />
            <p className="font-semibold">{member.name}</p>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;

