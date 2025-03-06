import React from "react";
import {
  AboutSection,
  AboutContainer,
  AboutTitle,
  AboutDescription,
  AboutContent,
  AboutImage,
  AboutTextContent,
  AboutFeatures,
  FeatureItem,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  AboutCTA,
} from "./AboutStyles";

const About = () => {
  return (
    <AboutSection>
      <AboutContainer className="container">
        <AboutTitle>Your business, driven by AI-Powered solutions</AboutTitle>
        <AboutDescription>
          From missed call text-return to advanced analytics, our platform helps
          you engage customers and grow your business.
        </AboutDescription>

        <AboutContent>
          <AboutImage
            src="https://placehold.co/600x400/e6f0ff/2684ff?text=Textify+Dashboard"
            alt="Textify CRM Dashboard"
          />
          <AboutTextContent>
            <AboutFeatures>
              <FeatureItem>
                <FeatureIcon>📱</FeatureIcon>
                <FeatureTitle>Automated Text Responses</FeatureTitle>
                <FeatureDescription>
                  Never miss another opportunity with instant text responses to
                  missed calls.
                </FeatureDescription>
              </FeatureItem>

              <FeatureItem>
                <FeatureIcon>📊</FeatureIcon>
                <FeatureTitle>Advanced Analytics</FeatureTitle>
                <FeatureDescription>
                  Gain insights into customer behavior and business performance.
                </FeatureDescription>
              </FeatureItem>

              <FeatureItem>
                <FeatureIcon>🔄</FeatureIcon>
                <FeatureTitle>Seamless Integration</FeatureTitle>
                <FeatureDescription>
                  Works with your existing tools and phone systems.
                </FeatureDescription>
              </FeatureItem>
            </AboutFeatures>
            <AboutCTA to="/how-it-works">Learn how it works →</AboutCTA>
          </AboutTextContent>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;
