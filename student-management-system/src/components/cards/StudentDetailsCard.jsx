import React from 'react'
import ViewStudentModal from '../modals/ViewStudentModel'

const StudentDetailsCard = ({student}) => {
  return (
    <div className="flex items-center justify-between  max-w-sm rounded overflow-hidden shadow-sm border">
      <img
        className=" h-40 w-40 object-fi rounded-full"
        src={student.image}
        alt={`${student.name}'s image`}
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{student.name}</h3>
        <p className="text-gray-700 text-base">
          <strong>Grade:</strong> {student.grade}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Department:</strong> {student.department}
        </p>
        <ViewStudentModal extras = {student.extras} student = {student} />  
      </div>
      <div className="px-6 py-4">
       
      </div>
    </div>
  )
}

export default StudentDetailsCard