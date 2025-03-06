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

const StatSection = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.large};
  margin-bottom: ${(props) => props.theme.spacing.xxl};
  text-align: center;
  box-shadow: ${(props) => props.theme.shadows.medium};
`;

const StatHighlight = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const StatText = styled.p`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.text};
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

const TextToReturnPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <HeroSection>
          <PageTitle>Missed Call Text-Return Software</PageTitle>
          <Tagline>
            Never miss a lead again with our AI-powered call-return software!
          </Tagline>
          <Description>
            In today's fast-paced business world, every missed call is a lost
            opportunity. With Textify's AI-powered Missed Call Text-Return
            software, you can ensure that no lead slips through the cracks.
          </Description>
        </HeroSection>

        <StatSection>
          <StatHighlight>62%</StatHighlight>
          <StatText>of inbound business calls go unanswered...</StatText>
          <StatHighlight>85%</StatHighlight>
          <StatText>of these clients won't call back.</StatText>
        </StatSection>

        <ContentSection>
          <ContentText>
            <ContentTitle>Turn Missed Calls Into Opportunities</ContentTitle>
            <ContentDescription>
              When a call to your business goes unanswered, our automated system
              immediately sends a customizable, personalized message to the
              caller. By engaging the customer instantly, our software increases
              the likelihood of conversion, turning missed calls from wasted
              potential into valuable connections.
            </ContentDescription>
            <ContentDescription>
              Our intelligent system works 24/7, ensuring that even after
              business hours, your potential customers feel valued and
              acknowledged.
            </ContentDescription>
          </ContentText>
          <ContentImage
            src="https://placehold.co/600x400/e6f0ff/2684ff?text=Missed+Call+Response"
            alt="Missed Call Response System"
          />
        </ContentSection>

        <FeatureSection>
          <FeatureTitle>Key Features</FeatureTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>⚡</FeatureIcon>
              <FeatureCardTitle>Instant Response</FeatureCardTitle>
              <FeatureCardDescription>
                Automated text messages sent within seconds of a missed call,
                ensuring immediate engagement.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>✏️</FeatureIcon>
              <FeatureCardTitle>Customizable Templates</FeatureCardTitle>
              <FeatureCardDescription>
                Create personalized message templates that reflect your brand
                voice and specific offerings.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureCardTitle>Seamless Integration</FeatureCardTitle>
              <FeatureCardDescription>
                Works with your existing phone systems and CRM software without
                requiring hardware changes.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureCardTitle>Performance Analytics</FeatureCardTitle>
              <FeatureCardDescription>
                Track response rates, conversion metrics, and ROI through our
                intuitive dashboard.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🤖</FeatureIcon>
              <FeatureCardTitle>AI-Powered Personalization</FeatureCardTitle>
              <FeatureCardDescription>
                Our system learns from interactions to improve message
                effectiveness over time.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🔔</FeatureIcon>
              <FeatureCardTitle>Real-time Notifications</FeatureCardTitle>
              <FeatureCardDescription>
                Get instant alerts about missed calls and customer responses to
                stay in the loop.
              </FeatureCardDescription>
            </FeatureCard>
          </FeatureGrid>
        </FeatureSection>

        <CTASection>
          <CTATitle>Ready to Stop Missing Opportunities?</CTATitle>
          <CTADescription>
            Join thousands of businesses that have increased their lead
            conversion rates by up to 85% with Textify's Missed Call Text-Return
            Software.
          </CTADescription>
          <CTAButton href="/contact">Get Started Today</CTAButton>
        </CTASection>
      </PageContent>
    </PageContainer>
  );
};

export default TextToReturnPage;
