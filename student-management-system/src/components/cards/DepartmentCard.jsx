import React from "react";
import ViewFacilityModal from "../modals/ViewFacilityModal";

const DepartmentCard = ({ department }) => {
    console.log(department)
  return (
    <div className="max-w-5xl mx-auto py-6 max-h-full  flex flex-col justify-between md:gap-10  md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 ">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={department.image}
          alt={department.title}
          className="max-w-full   object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="flex max-w-full flex-col w-full md:w-2/3  space-y-4">
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
