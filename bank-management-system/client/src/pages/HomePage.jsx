import React from 'react'
import { Container, FeaturedServices, HeroSection, OurPartners, Stats, Testimonials } from '../components'

const HomePage = () => {
  return (
    <div className="w-full mx-auto">
      <Container>
        <HeroSection />
        <Stats/>
        <OurPartners />
        <FeaturedServices />
        <Testimonials/>
      </Container>
    </div>
  );
}

export default HomePage