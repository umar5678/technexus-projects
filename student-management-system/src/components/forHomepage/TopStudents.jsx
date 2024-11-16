import React from "react";
import students from "../../json-data/topStudents.json";
import StudentCard from "../cards/StudentCard";

const TopStudents = () => {
  return (
    <div>
      <div className="pt-20">
        <h1 className="text-blue-700 text-3xl font-bold text-center pb-5" >Top Students</h1>
      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
    </div>
  );
};

export default TopStudents;
