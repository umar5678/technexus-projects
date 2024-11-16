import React from "react";
import courses from "../../json-data/courses.json";
import Card from "../cards/Card";



// course card : image, title, description, read-more button, rating etc
const FeaturedCourses = () => {
  return (
    <div className="bg-white pb-10 px-4 lg:px-16 pt-20">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {courses.map((course, index) => (
          <Card
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            extraInfo={course.rating.toFixed(1)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
