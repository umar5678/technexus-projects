import React from "react";

const Card = ({
  image,
  title,
  description,
  extraInfo,
  buttonText = "Read More",
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {description}
          </p>
        )}
        {extraInfo && (
          <div className="flex items-center mt-4">
            <span className="text-yellow-400 text-lg mr-2">★</span>
            <p className="text-gray-700 font-medium">{extraInfo}</p>
          </div>
        )}
        <div className="mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
