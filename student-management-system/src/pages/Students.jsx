import React from 'react'
import Container from '../components/container/Container'
import StudentDetailsCard from '../components/cards/StudentDetailsCard';
import students from "../json-data/allStudents.json"

const Students = () => {
  return (
    <Container>
      {" "}
      <div>
        <h1>Our Students</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {students.map((student, index) => (
            <StudentDetailsCard key={index} student={student} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Students
