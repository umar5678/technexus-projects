import React from "react";

const courses = [
  { title: "Mathematics", description: "Develop critical thinking skills." },
  { title: "Science", description: "Explore the wonders of the universe." },
  { title: "Arts", description: "Unleash your creativity and imagination." },
  { title: "Sports", description: "Build teamwork and physical fitness." },
];

const FeaturedCourses = () => {
  return (
    <div className="bg-white py-8 px-4 lg:px-16">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {course.title}
            </h3>
            <p className="text-gray-700 mt-2">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;
