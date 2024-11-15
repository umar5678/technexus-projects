import React from "react";
import students from "../../assets/images/students.jpg"

const MissionSection = () => {
  return (
    <div className="flex flex-col gap-9 lg:flex-row-reverse items-center bg-gray-100 p-8 lg:p-16">
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-5xl font-bold text-blue-700 text-center">Our Mission</h2>
        <p className="text-gray-700 text-center">
          Our mission is to provide a well-rounded education that empowers
          students to reach their full potential and become global citizens. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo repellendus minima sapiente, optio tenetur aspernatur!
        </p>
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-blue-600">Our Values</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Inclusivity</li>
            <li>Curiosity</li>
          </ul>
        </div>
      </div>
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={students}
          alt="Mission"
          className="rounded-lg shadow-lg "
        />
      </div>
    </div>
  );
};

export default MissionSection;
