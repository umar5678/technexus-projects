import React from 'react'
import Container from '../components/container/Container'
import DepartmentCard from '../components/cards/DepartmentCard';
import departmentData from "../json-data/departments.json"

const Departments = () => {
  return (
    <Container>
      {" "}
      <div>
        <h1 className='text-blue-700 text-3xl font-bold'>Department</h1>
      </div>
      <div className="flex flex-col gap-3">
        {departmentData.map((department, index) => (
          <DepartmentCard key={index} department={department} />
        ))}
      </div>
    </Container>
  );
}

export default Departments