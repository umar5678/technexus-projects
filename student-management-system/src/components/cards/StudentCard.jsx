import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className=" overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col items-center p-4">
        <img
          src={student.image}
          alt={student.name}
          className="w-40 h-40 rounded-full object-cover border-2 border-blue-500"
        />
        <div className="ml-4">
          <h3 className="text-xl pt-4 font-bold text-gray-800">{student.name}</h3>
          <p className="text-gray-600 text-sm">{student.department}</p>
        </div>
      </div>
      <div className="p-4">
       
      </div>
    </div>
  );
};

export default StudentCard;
