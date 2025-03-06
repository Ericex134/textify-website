import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
// Import other components as you build them
// import HowItWorks from '../components/HowItWorks';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <HowItWorks />
      <Testimonials />
      {/* Add other components as you build them */}
      {/* <HowItWorks /> */}
    </>
  );
};

export default HomePage;
