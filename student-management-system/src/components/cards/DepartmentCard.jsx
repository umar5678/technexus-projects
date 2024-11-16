import React from "react";
import ViewFacilityModal from "../modals/ViewFacilityModal";

const DepartmentCard = ({ department }) => {
    console.log(department)
  return (
    <div className="max-w-4xl mx-auto py-6  flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ">
      {/* Image Section */}
      <div className="w-full md:w-1/3">
        <img
          src={department.image}
          alt={department.title}
          className="w-full h-56  object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full md:w-2/3">
        <h2 className="text-2xl font-semibold text-gray-800">
          {department.title}
        </h2>
        <p className="mt-2 text-gray-600 text-sm">{department.description}</p>

        {/* Button Section */}
        <div className="mt-4">
          <button className="bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300">
           
            <ViewFacilityModal teachers={ department.teachers} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
