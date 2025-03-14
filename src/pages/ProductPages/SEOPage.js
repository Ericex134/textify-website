import React from "react";
import styled from "styled-components";
import seoImg from "../../assets/dashboard.png";

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

const ShowcaseSection = styled.div`
  margin: ${(props) => props.theme.spacing.xxl} 0;
  text-align: center;
`;

const ShowcaseImage = styled.img`
  max-width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: ${(props) => props.theme.shadows.large};
`;

const SEOPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <HeroSection>
          <PageTitle>SEO & Online Presence Management</PageTitle>
          <Tagline>Control the conversation about your business online</Tagline>
          <Description>
            In today's digital world, over 93% of customers look to the internet
            to find local businesses. Ensure your business stands above the rest
            with Textify's SEO and online reputation management services.
          </Description>
        </HeroSection>

        <StatSection>
          <StatHighlight>93%</StatHighlight>
          <StatText>
            of customers use the internet to find local businesses
          </StatText>
        </StatSection>

        <FeatureSection>
          <SectionTitle>Key Features</SectionTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureCardTitle>Unified Dashboard</FeatureCardTitle>
              <FeatureCardDescription>
                Monitor reviews, client retention, and other analytics - all on
                one comprehensive dashboard.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>📈</FeatureIcon>
              <FeatureCardTitle>Data-Driven Insights</FeatureCardTitle>
              <FeatureCardDescription>
                Get a detailed overview of your online reputation and customer
                sentiments with actionable insights.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🤖</FeatureIcon>
              <FeatureCardTitle>Automated Responses</FeatureCardTitle>
              <FeatureCardDescription>
                Set up intelligent automated responses to online reviews to
                maintain engagement with your customers.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureCardTitle>Full Integration</FeatureCardTitle>
              <FeatureCardDescription>
                Seamlessly integrate with Yext and other CRM platforms to
                centralize your online presence management.
              </FeatureCardDescription>
            </FeatureCard>
          </FeatureGrid>
        </FeatureSection>

        <ShowcaseSection>
          <SectionTitle>See It In Action</SectionTitle>
          <ShowcaseImage src={seoImg} alt="SEO Dashboard Interface" />
        </ShowcaseSection>

        <BenefitsSection>
          <SectionTitle>Why Choose Our SEO Services?</SectionTitle>
          <BenefitsList>
            <BenefitItem>
              <BenefitIcon>✓</BenefitIcon>
              <BenefitText>
                <BenefitTitle>Improved Search Rankings</BenefitTitle>
                <BenefitDescription>
                  Boost your visibility in local search results to attract more
                  potential customers.
                </BenefitDescription>
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitIcon>✓</BenefitIcon>
              <BenefitText>
                <BenefitTitle>Enhanced Reputation</BenefitTitle>
                <BenefitDescription>
                  Actively manage and improve how your business is perceived
                  online.
                </BenefitDescription>
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitIcon>✓</BenefitIcon>
              <BenefitText>
                <BenefitTitle>Increased Customer Trust</BenefitTitle>
                <BenefitDescription>
                  Build credibility through positive reviews and responsive
                  customer service.
                </BenefitDescription>
              </BenefitText>
            </BenefitItem>

            <BenefitItem>
              <BenefitIcon>✓</BenefitIcon>
              <BenefitText>
                <BenefitTitle>Competitive Advantage</BenefitTitle>
                <BenefitDescription>
                  Stand out from competitors with a strong, well-managed online
                  presence.
                </BenefitDescription>
              </BenefitText>
            </BenefitItem>
          </BenefitsList>
        </BenefitsSection>

        <CTASection>
          <CTATitle>Ready to Dominate Local Search Results?</CTATitle>
          <CTADescription>
            Join thousands of businesses that have improved their online
            visibility and reputation with Textify's SEO and Online Presence
            Management services.
          </CTADescription>
          <CTAButton href="/contact">Get Started Today</CTAButton>
        </CTASection>
      </PageContent>
    </PageContainer>
  );
};

export default SEOPage;
