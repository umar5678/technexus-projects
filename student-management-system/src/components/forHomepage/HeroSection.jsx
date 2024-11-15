import React from "react";
import studentImg from "../../assets/images/student.avif"


const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-blue-50 p-8 lg:p-16 rounded-3xl mb-4">
      <div className="lg:w-1/2 space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
          A <span className="text-blue-700">unique</span> approach to learning for all <br /> Students<span className="text-blue-700">.</span>
        </h1>
        <p className="text-lg text-gray-700 ">
          Our goal is to make online education work for everyone
        </p>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
        src={studentImg}
          alt="Hero"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default HeroSection;
