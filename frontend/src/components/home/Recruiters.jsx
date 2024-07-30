import React from "react";
import logo1 from "../../assets/recruiters/logo1.svg";
import logo2 from "../../assets/recruiters/logo2.svg";
import logo3 from "../../assets/recruiters/logo3.svg";
import logo5 from "../../assets/recruiters/logo5.svg";
import logo6 from "../../assets/recruiters/logo6.svg";
import logo7 from "../../assets/recruiters/logo7.svg";
import logo8 from "../../assets/recruiters/logo8.svg";
import logo9 from "../../assets/recruiters/logo9.svg";
import logo10 from "../../assets/recruiters/logo10.svg";
import logo11 from "../../assets/recruiters/logo11.svg";
import logo12 from "../../assets/recruiters/logo12.svg";
import logo13 from "../../assets/recruiters/logo13.svg";
import logo14 from "../../assets/recruiters/logo14.svg";
import logo15 from "../../assets/recruiters/logo15.svg";
import logo16 from "../../assets/recruiters/logo16.svg";
import logo17 from "../../assets/recruiters/logo17.svg";
import logo18 from "../../assets/recruiters/logo18.svg";
import logo19 from "../../assets/recruiters/logo19.svg";
import logo20 from "../../assets/recruiters/logo20.svg";
import logo21 from "../../assets/recruiters/logo21.svg";
import logo22 from "../../assets/recruiters/logo22.svg";
import logo23 from "../../assets/recruiters/logo23.svg";
import logo24 from "../../assets/recruiters/logo24.svg";
import logo25 from "../../assets/recruiters/logo25.svg";
import logo26 from "../../assets/recruiters/logo26.svg";
import logo27 from "../../assets/recruiters/logo27.svg";
import logo28 from "../../assets/recruiters/logo28.svg";
import logo29 from "../../assets/recruiters/logo29.svg";
import logo30 from "../../assets/recruiters/logo30.svg";
import logo31 from "../../assets/recruiters/logo31.svg";
import {motion} from "framer-motion";


const recruiters = [
  { name: "C1", logo: logo1 },
  { name: "C2", logo: logo2 },
  { name: "C3", logo: logo3 },
  { name: "C5", logo: logo5 },
  { name: "C6", logo: logo6 },
  { name: "C7", logo: logo7 },
  { name: "C8", logo: logo8 },
  { name: "C9", logo: logo9 },
  { name: "C10", logo: logo10 },
  { name: "C11", logo: logo11 },
  { name: "C12", logo: logo12 },
  { name: "C13", logo: logo13 },
  { name: "C14", logo: logo14 },
  { name: "C15", logo: logo15 },
  { name: "C16", logo: logo16 },
  { name: "C17", logo: logo17 },
  { name: "C18", logo: logo18 },
  { name: "C19", logo: logo19 },
  { name: "C20", logo: logo20 },
  { name: "C21", logo: logo21 },
  { name: "C22", logo: logo22 },
  { name: "C23", logo: logo23 },
  { name: "C24", logo: logo24 },
  { name: "C25", logo: logo25 },
  { name: "C26", logo: logo26 },
  { name: "C27", logo: logo27 },
  { name: "C28", logo: logo28 },
  { name: "C29", logo: logo29 },
  { name: "C30", logo: logo30 },
  { name: "C31", logo: logo31 }
];

const Recruiters = () => {
  return (
    <section className="py-8 bg-gray-100">
    <h2 className="text-3xl font-bold text-center mb-6">Our Recruiters</h2>
    <div className="overflow-hidden  flex">
      <motion.div 
        animate={{x:["0%","-160%"]}}
        transition={{
          repeat:Infinity,
          repeatType:"loop",
          duration:25,
          ease:"linear"
        }}
      className="whitespace-nowrap">
        {recruiters.map((recruiter, index) => (
          <div key={index} className="logo text-center inline-block mx-[2.49rem]">
            <img
              src={recruiter.logo}
              alt={`Logo ${index}`}
              className="h-24 mb-2" // Adjust height for medium size
            />
          </div>
        ))}
      </motion.div>
    </div>
  </section>
  );
};

export default Recruiters;
