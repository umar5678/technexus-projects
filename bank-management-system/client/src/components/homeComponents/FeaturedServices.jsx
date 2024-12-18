import React from "react";
import { servicesData } from "../../assets/data/services.js";

import FeaturedServicesCard from "../cards/FeaturedServicesCard";
const FeaturedServices = () => {

  const featuredServices = servicesData.slice(4, 7)


  return (
    <div className="md:py-16 py-24">
      <h1 className="text-4xl text-center  font-semibold text-gray-900 dark:text-white pb-12 pt-26">Featured Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          featuredServices.map((service) => (
          //  loop for three services
            <FeaturedServicesCard service={service} key={service.name} />
         ))
        }
      </div>
    </div>
  );
};

export default FeaturedServices;
