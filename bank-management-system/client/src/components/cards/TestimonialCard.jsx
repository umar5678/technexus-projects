import React from "react";
import user from "../../assets/images/user.jpg";

const TestimonialCard = ({ review }) => {
  return (
    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
      <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {review.review}
        </h3>
      </blockquote>
      <figcaption className="flex justify-center items-center space-x-3">
        <img
          className="w-9 h-9 rounded-full"
          src={user}
          alt="profile picture"
        />
        <div className="space-y-0.5 font-medium dark:text-white text-left">
          <div>{review.name}</div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">
            {review.company}
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
