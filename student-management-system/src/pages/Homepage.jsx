import React from "react";
import Container from "../components/container/Container";
import {
  FeaturedCourses,
  VisitUs,
  HeroSection,
  MissionSection,
  Newsletter,
} from "../components/forHomepage";

const Homepage = () => {
  return (
    <Container>
      {" "}
      <HeroSection />
      <MissionSection />
      <FeaturedCourses />
      <VisitUs />
      <Newsletter />
    </Container>
  );
};

export default Homepage;
