import React from "react";
import styled from "styled-components";

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

const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing.xl};
  margin-bottom: ${(props) => props.theme.spacing.xxl};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

const ContentDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const ContentImage = styled.img`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: ${(props) => props.theme.shadows.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    order: -1;
  }
`;

const FeatureSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const FeatureTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.text};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.shadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.primary};
`;

const FeatureCardTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
`;

const FeatureCardDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const IntegrationSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
  text-align: center;
`;

const IntegrationTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.text};
`;

const IntegrationLogos = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.lg};
  margin-top: ${(props) => props.theme.spacing.lg};
`;

const IntegrationLogo = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: ${(props) => props.theme.spacing.md};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  box-shadow: ${(props) => props.theme.shadows.small};

  img {
    max-width: 80%;
    max-height: 80%;
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

const SocialMediaPlannerPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <HeroSection>
          <PageTitle>Multi-Channel Marketing Platform</PageTitle>
          <Tagline>Connect, Engage, Convert</Tagline>
          <Description>
            Run SMS, email, and social media campaigns all in one place. Our
            comprehensive marketing platform helps you create cohesive campaigns
            across all channels to maximize your reach and conversion.
          </Description>
        </HeroSection>

        <ContentSection>
          <ContentImage
            src="https://placehold.co/600x400/e6f0ff/2684ff?text=Marketing+Dashboard"
            alt="Marketing Dashboard"
          />
          <ContentText>
            <ContentTitle>
              One Dashboard for All Your Marketing Needs
            </ContentTitle>
            <ContentDescription>
              Monitor all of your email, SMS and social media campaigns at a
              glance with our intuitive dashboard. Track engagement and
              conversion rates in real-time, allowing you to make data-driven
              decisions that boost your marketing ROI.
            </ContentDescription>
            <ContentDescription>
              Publish posts across multiple social media networks at once,
              saving you valuable time and ensuring consistent messaging across
              all platforms.
            </ContentDescription>
          </ContentText>
        </ContentSection>

        <FeatureSection>
          <FeatureTitle>Key Features</FeatureTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureCardTitle>Unified Analytics</FeatureCardTitle>
              <FeatureCardDescription>
                Track engagement and conversion rates across all channels from a
                single dashboard.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureCardTitle>Cross-Platform Publishing</FeatureCardTitle>
              <FeatureCardDescription>
                Create and schedule content for multiple social networks
                simultaneously.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>📱</FeatureIcon>
              <FeatureCardTitle>SMS Campaigns</FeatureCardTitle>
              <FeatureCardDescription>
                Create, send, and track SMS marketing campaigns with high open
                rates.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>📧</FeatureIcon>
              <FeatureCardTitle>Email Marketing</FeatureCardTitle>
              <FeatureCardDescription>
                Design beautiful email campaigns with our drag-and-drop editor
                and automation tools.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🤖</FeatureIcon>
              <FeatureCardTitle>AI-Driven Personalization</FeatureCardTitle>
              <FeatureCardDescription>
                Generate targeted messages with AI-powered segmentation and
                personalization.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>⏰</FeatureIcon>
              <FeatureCardTitle>Smart Scheduling</FeatureCardTitle>
              <FeatureCardDescription>
                Reminders, deadlines and notifications to ensure timely,
                relevant and impactful messaging.
              </FeatureCardDescription>
            </FeatureCard>
          </FeatureGrid>
        </FeatureSection>

        <IntegrationSection>
          <IntegrationTitle>
            Full Integration with Major Platforms
          </IntegrationTitle>
          <Description>
            Our platform seamlessly integrates with all major social media
            networks and marketing tools, allowing you to manage your entire
            digital presence from one place.
          </Description>
          <IntegrationLogos>
            <IntegrationLogo>
              <img
                src="https://placehold.co/100x100/e6f0ff/2684ff?text=Instagram"
                alt="Instagram"
              />
            </IntegrationLogo>
            <IntegrationLogo>
              <img
                src="https://placehold.co/100x100/e6f0ff/2684ff?text=Facebook"
                alt="Facebook"
              />
            </IntegrationLogo>
            <IntegrationLogo>
              <img
                src="https://placehold.co/100x100/e6f0ff/2684ff?text=TikTok"
                alt="TikTok"
              />
            </IntegrationLogo>
            <IntegrationLogo>
              <img
                src="https://placehold.co/100x100/e6f0ff/2684ff?text=YouTube"
                alt="YouTube"
              />
            </IntegrationLogo>
            <IntegrationLogo>
              <img
                src="https://placehold.co/100x100/e6f0ff/2684ff?text=Google"
                alt="Google"
              />
            </IntegrationLogo>
          </IntegrationLogos>
        </IntegrationSection>

        <CTASection>
          <CTATitle>Ready to Streamline Your Marketing?</CTATitle>
          <CTADescription>
            Join thousands of businesses that have simplified their marketing
            efforts and increased engagement with Textify's Multi-Channel
            Marketing Platform.
          </CTADescription>
          <CTAButton href="/contact">Get Started Today</CTAButton>
        </CTASection>
      </PageContent>
    </PageContainer>
  );
};

export default SocialMediaPlannerPage;
