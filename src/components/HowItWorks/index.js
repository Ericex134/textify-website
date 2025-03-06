import React from "react";
import {
  HowItWorksSection,
  HowItWorksContainer,
  SectionTitle,
  SectionDescription,
  StepsContainer,
  Step,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription,
  StepIcon,
  CTAContainer,
  CTAButton,
  CTAText,
} from "./HowItWorksStyles";

const HowItWorks = () => {
  return (
    <HowItWorksSection>
      <HowItWorksContainer className="container">
        <SectionTitle>How Textify Works</SectionTitle>
        <SectionDescription>
          Our AI-powered CRM software is designed to be intuitive and
          user-friendly, making it easy for you to manage leads, communicate
          with customers, and analyze performance – all in one place.
        </SectionDescription>

        <StepsContainer>
          <Step>
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepIcon>📞</StepIcon>
              <StepTitle>Missed Call Detection</StepTitle>
              <StepDescription>
                When a customer calls and you're unable to answer, our system
                automatically detects the missed call in real-time.
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepIcon>✍️</StepIcon>
              <StepTitle>AI-Powered Response</StepTitle>
              <StepDescription>
                Our AI immediately crafts a personalized text message that
                acknowledges the call and offers assistance or information.
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepIcon>📲</StepIcon>
              <StepTitle>Instant Text Delivery</StepTitle>
              <StepDescription>
                The system sends the text message to the caller within seconds,
                ensuring they feel acknowledged and valued.
              </StepDescription>
            </StepContent>
          </Step>

          <Step>
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepIcon>📊</StepIcon>
              <StepTitle>Analytics & Insights</StepTitle>
              <StepDescription>
                Track customer interactions, response rates, and engagement
                metrics through our intuitive dashboard.
              </StepDescription>
            </StepContent>
          </Step>
        </StepsContainer>

        <CTAContainer>
          <CTAText>Ready to transform your customer communication?</CTAText>
          <CTAButton to="/pricing">Get Started Today</CTAButton>
        </CTAContainer>
      </HowItWorksContainer>
    </HowItWorksSection>
  );
};

export default HowItWorks;
