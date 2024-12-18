import React from 'react'

const FeaturedServicesCard = ({service}) => {
  return (
    <div className="max-w-sm  bg-gray-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={service.image} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {service.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {service.description}
        </p>
        
      </div>
    </div>
  );
}

export default FeaturedServicesCard