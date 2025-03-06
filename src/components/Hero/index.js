import React from "react";
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  TitleLine,
  Subtitle,
  HighlightText,
  CTAGroup,
  PrimaryButton,
  SecondaryButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          <TitleLine>Never Miss Another</TitleLine>
          <TitleLine>Business Call</TitleLine>
        </HeroTitle>
        <Subtitle>
          Our <HighlightText>automated solution</HighlightText> instantly
          responds to missed calls, keeping your customers engaged and your
          business growing.
        </Subtitle>
        <CTAGroup>
          <PrimaryButton to="/contact">Start Free Trial</PrimaryButton>
          <SecondaryButton to="/how-it-works">See How It Works</SecondaryButton>
        </CTAGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
