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
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary}0A,
    ${(props) => props.theme.colors.primaryLight}1A
  );
  padding: ${(props) => props.theme.spacing.xl};
  border-radius: ${(props) => props.theme.borderRadius.large};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const StatHighlight = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

const StatText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const FeatureSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  text-align: center;
  color: ${(props) => props.theme.colors.text};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.lg};
  box-shadow: ${(props) => props.theme.shadows.small};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.primary};
`;

const FeatureCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
`;

const FeatureCardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const BenefitsSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const BenefitsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

const BenefitIcon = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-right: ${(props) => props.theme.spacing.md};
`;

const BenefitText = styled.div``;

const BenefitTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.text};
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textSecondary};
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

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 800px;
  margin: 0 auto ${(props) => props.theme.spacing.xl};
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

const LeadGenPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <HeroSection>
          <PageTitle>Lead Generation & Prospecting</PageTitle>
          <Tagline>Success starts with finding the right client</Tagline>
          <Description>
            Say goodbye to spreadsheets - Powered by our state-of-the-art data
            analytics software, Textify is a game changer for lead generation
            and prospecting. Our system is tailor-built to make your lead
            generation experience as effortless and efficient as possible.
          </Description>
        </HeroSection>

        <StatSection>
          <StatHighlight>300%</StatHighlight>
          <StatText>
            average increase in qualified leads for our customers
          </StatText>
        </StatSection>

        <FeatureSection>
          <SectionTitle>Key Features</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>📍</FeatureIcon>
              <FeatureCardTitle>Regional Targeting</FeatureCardTitle>
              <FeatureCardDescription>
                Regionally-based lead generation software that helps you find
                the right prospects in your target market.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>📧</FeatureIcon>
              <FeatureCardTitle>Email & SMS Marketing</FeatureCardTitle>
              <FeatureCardDescription>
                Highly customizable email campaigns, bulk email functions, and
                SMS services to reach your prospects effectively.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>👤</FeatureIcon>
              <FeatureCardTitle>Comprehensive Contact Data</FeatureCardTitle>
              <FeatureCardDescription>
                Complete contact information for each lead, making it easy to
                connect through multiple channels.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureCardTitle>Advanced Analytics</FeatureCardTitle>
              <FeatureCardDescription>
                Detailed data analytics reports for every lead and statistics
                tracking for all your outreach efforts.
              </FeatureCardDescription>
            </FeatureCard>
          </FeatureGrid>
        </FeatureSection>

        <BenefitsSection>
          <SectionTitle>Why Choose Our Lead Generation System?</SectionTitle>
          <BenefitsList>
            <BenefitItem>
              <BenefitIcon>✓</BenefitIcon>
              <BenefitText>
                <BenefitTitle>Higher Conversion Rates</BenefitTitle>
                <BenefitDescription>
                  Convert more visitors into paying customers with optimized
                  lead capture and nurturing.
                </BenefitDescription>
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitIcon>✓</BenefitIcon>
              <BenefitText>
                <BenefitTitle>Time Savings</BenefitTitle>
                <BenefitDescription>
                  Automate repetitive tasks and focus your team on closing deals
                  instead of chasing leads.
                </BenefitDescription>
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitIcon>✓</BenefitIcon>
              <BenefitText>
                <BenefitTitle>Data-Driven Insights</BenefitTitle>
                <BenefitDescription>
                  Gain valuable insights into your sales funnel and continuously
                  optimize your approach.
                </BenefitDescription>
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitIcon>✓</BenefitIcon>
              <BenefitText>
                <BenefitTitle>Scalable Growth</BenefitTitle>
                <BenefitDescription>
                  Easily scale your lead generation efforts as your business
                  grows without adding overhead.
                </BenefitDescription>
              </BenefitText>
            </BenefitItem>
          </BenefitsList>
        </BenefitsSection>

        <CTASection>
          <CTATitle>Ready to Supercharge Your Lead Generation?</CTATitle>
          <CTADescription>
            Join hundreds of businesses that have transformed their sales
            process with Textify's Lead Generation & Conversion system.
          </CTADescription>
          <CTAButton href="/contact">Get Started Today</CTAButton>
        </CTASection>
      </PageContent>
    </PageContainer>
  );
};

export default LeadGenPage;
