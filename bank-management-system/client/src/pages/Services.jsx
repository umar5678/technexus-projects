import React from "react";
import { Container } from "../components";
import { servicesData } from "../assets/data/services.js";
import ServicesCard from "../components/cards/ServicesCard";
const Services = () => {
  console.log(servicesData);
  return (
    <div className="w-full py-8">
      <Container>
        <h1 className="text-4xl md:text-5xl font-semibold  pt-4 pb-12"> Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">



        {servicesData.map((service) => (
          <div>
            <ServicesCard service={service} />
          </div>
        ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
