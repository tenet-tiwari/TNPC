
import React from 'react';
import logo1 from '../../assets/members/logo1.png';
import logo2 from '../../assets/members/logo2.png';
import logo3 from '../../assets/members/logo3.png';

const members = [
  { name: "Member 1", role: "Role 1", logo: logo1 },
  { name: "Member 3", role: "Role 3", logo: logo3 },
  { name: "Member 2", role: "Role 2", logo: logo2 },

  // Add more members as needed
];

const Members = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-purple-100 via-pink-50 to-red-50 animate-gradient-x">
      <h2 className="text-3xl font-bold text-center mb-6">Our Organizing Members</h2>
      <div className={`grid grid-cols-1 sm:grid-cols-${Math.min(2, members.length)} lg:grid-cols-${Math.min(3, members.length)} xl:grid-cols-${Math.min(4, members.length)} gap-6 justify-items-center`}>
        {members.map((member, index) => (
          <div key={index} className="text-center max-w-[250px]">
            <img
              src={member.logo}
              alt={member.name}
              className="w-full rounded-full mb-2 hover:scale-110 transition-transform duration-300"
            />
            <p className="font-semibold">{member.name}</p>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
