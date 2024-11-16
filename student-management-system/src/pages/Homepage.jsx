import React from "react";
import Container from "../components/container/Container";
import {
  FeaturedCourses,
  VisitUs,
  HeroSection,
  MissionSection,
  Newsletter,
  TopStudents
} from "../components/forHomepage";

const Homepage = () => {
  return (
    <Container>
      {" "}
      <HeroSection />
      <MissionSection />
      <FeaturedCourses />
      <TopStudents/>
      <VisitUs />
      <Newsletter />
    </Container>
  );
};

export default Homepage;
