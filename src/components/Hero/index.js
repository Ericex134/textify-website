import React from "react";
import {
  HeroSection,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  HeroImage,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer className="container">
        <HeroContent>
          <HeroTitle>Never Miss Another Business Opportunity</HeroTitle>
          <HeroSubtitle>
            Our AI-powered text response system automatically engages with
            missed calls, ensuring you capture every lead and maximize your
            business potential.
          </HeroSubtitle>
          <HeroButtons>
            <PrimaryButton to="/contact">Get Started</PrimaryButton>
            <SecondaryButton to="/services">See How It Works</SecondaryButton>
          </HeroButtons>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
