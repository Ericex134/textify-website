import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getPublicImagePath } from "../utils/imageUtils";

const PageContainer = styled.div`
  padding-top: 120px;
  padding-bottom: ${(props) => props.theme.spacing.xxl};
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const PageContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 800px;
  margin: 0 auto ${(props) => props.theme.spacing.xl};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.xl};
  margin-bottom: ${(props) => props.theme.spacing.xxl};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.medium};
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.large};
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background-color: ${(props) => props.theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const ServiceContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const ServiceFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.textSecondary};

  &:before {
    content: "✓";
    color: ${(props) => props.theme.colors.primary};
    margin-right: ${(props) => props.theme.spacing.sm};
    font-weight: bold;
  }
`;

const LearnMoreButton = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  margin-top: ${(props) => props.theme.spacing.md};
  transition: all 0.2s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const CTASection = styled.div`
  text-align: center;
  padding: ${(props) => props.theme.spacing.xl};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary}0A,
    ${(props) => props.theme.colors.primaryLight}1A
  );
  border-radius: ${(props) => props.theme.borderRadius.large};
`;

const CTATitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto ${(props) => props.theme.spacing.lg};
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary}40;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px ${(props) => props.theme.colors.primary}60;
  }
`;

const ServicesPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <HeroSection>
          <PageTitle>Our Services</PageTitle>
          <Tagline>Your business, driven by AI-Powered solutions</Tagline>
          <Description>
            Textify's AI-powered CRM software is designed to revolutionize how
            local businesses manage their customer relationships. From missed
            call text-return to advanced data analytics, our platform empowers
            you to engage more effectively, retain customers better, and grow
            your business with precision.
          </Description>
        </HeroSection>

        <ServicesGrid>
          <ServiceCard to="/products/text-to-return">
            <ServiceImage>📱</ServiceImage>
            <ServiceContent>
              <ServiceTitle>Missed Call Text-Return Software</ServiceTitle>
              <ServiceDescription>
                Never miss a lead again with our AI-powered call-return
                software! Did you know that 62% of inbound business calls go
                unanswered, and 85% of these clients won't call back?
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Instant automated responses</ServiceFeature>
                <ServiceFeature>Customizable message templates</ServiceFeature>
                <ServiceFeature>Real-time notifications</ServiceFeature>
                <ServiceFeature>Performance analytics</ServiceFeature>
              </ServiceFeatures>
              <LearnMoreButton>Learn more →</LearnMoreButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard to="/products/social-media-planner">
            <ServiceImage>📊</ServiceImage>
            <ServiceContent>
              <ServiceTitle>Multi-Channel Marketing Platform</ServiceTitle>
              <ServiceDescription>
                Run SMS, email, and social media campaigns all in one place. Our
                comprehensive marketing platform helps you create cohesive
                campaigns across all channels.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>SMS marketing campaigns</ServiceFeature>
                <ServiceFeature>Email marketing automation</ServiceFeature>
                <ServiceFeature>Social media scheduling</ServiceFeature>
                <ServiceFeature>Campaign analytics</ServiceFeature>
              </ServiceFeatures>
              <LearnMoreButton>Learn more →</LearnMoreButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard to="/products/website-builder">
            <ServiceImage>🌐</ServiceImage>
            <ServiceContent>
              <ServiceTitle>AI-Powered Website Builder</ServiceTitle>
              <ServiceDescription>
                Create a stunning, conversion-focused website in minutes with
                our AI-powered website builder. No coding skills required!
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>AI-generated designs</ServiceFeature>
                <ServiceFeature>Mobile-responsive templates</ServiceFeature>
                <ServiceFeature>SEO optimization tools</ServiceFeature>
                <ServiceFeature>Integrated lead capture</ServiceFeature>
              </ServiceFeatures>
              <LearnMoreButton>Learn more →</LearnMoreButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard to="/products/automation">
            <ServiceImage>⚙️</ServiceImage>
            <ServiceContent>
              <ServiceTitle>Workflow Automation</ServiceTitle>
              <ServiceDescription>
                Unleash the power of automation. Save time, boost conversions,
                and scale effortlessly with our AI-powered workflow tools.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Automated follow-ups</ServiceFeature>
                <ServiceFeature>Task scheduling</ServiceFeature>
                <ServiceFeature>Custom workflow creation</ServiceFeature>
                <ServiceFeature>
                  Integration with major platforms
                </ServiceFeature>
              </ServiceFeatures>
              <LearnMoreButton>Learn more →</LearnMoreButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard to="/products/seo">
            <ServiceImage>🔍</ServiceImage>
            <ServiceContent>
              <ServiceTitle>SEO & Online Presence Management</ServiceTitle>
              <ServiceDescription>
                In today's digital world, over 93% of customers look to the
                internet to find local businesses. Control the conversation with
                our SEO and reputation management services.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>Unified monitoring dashboard</ServiceFeature>
                <ServiceFeature>Data-driven reputation insights</ServiceFeature>
                <ServiceFeature>Automated review responses</ServiceFeature>
                <ServiceFeature>Yext and CRM integration</ServiceFeature>
              </ServiceFeatures>
              <LearnMoreButton>Learn more →</LearnMoreButton>
            </ServiceContent>
          </ServiceCard>

          <ServiceCard to="/products/lead-generation">
            <ServiceImage>🎯</ServiceImage>
            <ServiceContent>
              <ServiceTitle>Lead Generation & Prospecting</ServiceTitle>
              <ServiceDescription>
                Success starts with finding the right client. Say goodbye to
                spreadsheets - our state-of-the-art data analytics software is a
                game changer for lead generation and prospecting.
              </ServiceDescription>
              <ServiceFeatures>
                <ServiceFeature>
                  Regionally-based lead generation
                </ServiceFeature>
                <ServiceFeature>Customizable email campaigns</ServiceFeature>
                <ServiceFeature>
                  Comprehensive contact information
                </ServiceFeature>
                <ServiceFeature>Data analytics for every lead</ServiceFeature>
              </ServiceFeatures>
              <LearnMoreButton>Learn more →</LearnMoreButton>
            </ServiceContent>
          </ServiceCard>
        </ServicesGrid>

        <CTASection>
          <CTATitle>Ready to Transform Your Business?</CTATitle>
          <CTADescription>
            Join thousands of businesses that use Textify to grow their digital
            presence, improve customer engagement, and increase revenue.
          </CTADescription>
          <CTAButton href="/contact">Get Started Today</CTAButton>
        </CTASection>
      </PageContent>
    </PageContainer>
  );
};

export default ServicesPage;
