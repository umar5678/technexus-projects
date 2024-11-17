import React from "react";
import Container from "../components/container/Container";
import awards from "../json-data/awards.json";

const Achievements = () => {
  return (
    <Container>
      {" "}
      <h1 className="text-blue-700 text-3xl font-bold py-4">Our Achievements</h1>
      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-7">
        {awards.map((achievement) => (
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <img
              className="w-64  mx-auto object-cover"
              src={achievement.image}
              alt={achievement.title}
            />
            <div className="p-5">
              <h5 className="text-lg font-bold tracking-tight text-gray-900">
                {achievement.title}
              </h5>
              <p className="text-sm text-gray-600 mt-2">
                {achievement.description}
              </p>
              <p className="text-sm font-medium text-gray-500 mt-4">
                Year: {achievement.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Achievements;
