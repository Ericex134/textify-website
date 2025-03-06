import React, { useState } from "react";
import styled from "styled-components";

const PricingContainer = styled.div`
  padding-top: 120px;
  padding-bottom: ${(props) => props.theme.spacing.xxl};
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const PricingContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const PricingTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const PricingSubtitle = styled.h2`
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

const PricingHeroGraphic = styled.div`
  margin: ${(props) => props.theme.spacing.xl} auto;
  max-width: 800px;

  img {
    width: 100%;
    height: auto;
    border-radius: ${(props) => props.theme.borderRadius.large};
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing.lg};
  margin-bottom: ${(props) => props.theme.spacing.xxl};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.xl};
  box-shadow: ${(props) => props.theme.shadows.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.featured &&
    `
    border: 2px solid ${props.theme.colors.primary};
    transform: scale(1.05);
    z-index: 1;
    
    &::before {
      content: 'Best Deal';
      position: absolute;
      top: 12px;
      right: -30px;
      background-color: ${props.theme.colors.primary};
      color: white;
      padding: 4px 30px;
      font-size: 0.8rem;
      font-weight: 600;
      transform: rotate(45deg);
    }
    
    @media (max-width: ${props.theme.breakpoints.lg}) {
      transform: scale(1);
    }
  `}

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${(props) => props.theme.shadows.large};
  }
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
  text-align: center;
`;

const PlanPrice = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing.lg};
`;

const Price = styled.span`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
`;

const PriceUnit = styled.span`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-left: ${(props) => props.theme.spacing.xs};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${(props) => props.theme.spacing.xl};
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;
`;

const FeatureIcon = styled.span`
  color: ${(props) => props.theme.colors.primary};
  margin-right: ${(props) => props.theme.spacing.sm};
  font-weight: bold;
`;

const PlanButton = styled.a`
  display: inline-block;
  width: 100%;
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary}40;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px ${(props) => props.theme.colors.primary}60;
  }
`;

const ComparisonSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const ComparisonTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.text};
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};

  img {
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius.large};
    box-shadow: ${(props) => props.theme.shadows.medium};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const FAQSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
`;

const FAQTitle = styled.h3`
  font-size: 2rem;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.text};
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FAQItem = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.shadows.small};
`;

const FAQQuestion = styled.h4`
  font-size: 1.2rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
`;

const FAQAnswer = styled.p`
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

const PricingPage = () => {
  return (
    <PricingContainer>
      <PricingContent>
        <HeroSection>
          <PricingTitle>Simple, Transparent Pricing</PricingTitle>
          <PricingSubtitle>
            Choose the plan that's right for your business
          </PricingSubtitle>
          <Description>
            All plans include our core features with different limits and
            capabilities. No hidden fees or complicated pricing structures.
          </Description>

          <PricingHeroGraphic>
            <img
              src={process.env.PUBLIC_URL + "/assets/PricingGraphic.png"}
              alt="Textify Pricing Packages"
            />
          </PricingHeroGraphic>
        </HeroSection>

        <PricingGrid>
          <PricingCard>
            <PlanName>Essential Package</PlanName>
            <PlanPrice>
              <Price>$39</Price>
              <PriceUnit>/month</PriceUnit>
            </PlanPrice>
            <FeatureList>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Booking & Appointments</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Marketing & Campaign Tools</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Missed Call Text Back</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Conversations & Contact</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Up to 250 SMS & Emails/day</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>2 Users</span>
              </FeatureItem>
            </FeatureList>
            <PlanButton href="/contact">Start your Brand</PlanButton>
          </PricingCard>

          <PricingCard featured>
            <PlanName>Standard Package</PlanName>
            <PlanPrice>
              <Price>$69</Price>
              <PriceUnit>/month</PriceUnit>
            </PlanPrice>
            <FeatureList>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Essential Package</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Tracking and Analytics</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>CRM lead generator</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Unlimited Sales Funnel</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Up to 500 SMS & Emails/day</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>5 Users</span>
              </FeatureItem>
            </FeatureList>
            <PlanButton href="/contact">Grow & Scale</PlanButton>
          </PricingCard>

          <PricingCard>
            <PlanName>Premium Package</PlanName>
            <PlanPrice>
              <Price>$99</Price>
              <PriceUnit>/month</PriceUnit>
            </PlanPrice>
            <FeatureList>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Essential+Standard Packages</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Pipeline Management</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Workflow Automations</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Reputation Management</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>Unlimited SMS & Emails/day</span>
              </FeatureItem>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <span>20 Users</span>
              </FeatureItem>
            </FeatureList>
            <PlanButton href="/contact">Master Efficiency</PlanButton>
          </PricingCard>
        </PricingGrid>

        <FAQSection>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          <FAQGrid>
            <FAQItem>
              <FAQQuestion>Can I change plans later?</FAQQuestion>
              <FAQAnswer>
                Yes, you can upgrade or downgrade your plan at any time. When
                upgrading, you'll be prorated for the remainder of your billing
                cycle. When downgrading, changes will take effect at the start
                of your next billing cycle.
              </FAQAnswer>
            </FAQItem>

            <FAQItem>
              <FAQQuestion>Is there a free trial available?</FAQQuestion>
              <FAQAnswer>
                Yes, we offer a 14-day free trial on all plans. No credit card
                required to start your trial. You can explore all features
                before making a decision.
              </FAQAnswer>
            </FAQItem>

            <FAQItem>
              <FAQQuestion>What payment methods do you accept?</FAQQuestion>
              <FAQAnswer>
                We accept all major credit cards, PayPal, and bank transfers for
                annual plans. Enterprise customers can also arrange for
                invoicing.
              </FAQAnswer>
            </FAQItem>

            <FAQItem>
              <FAQQuestion>
                Do you offer discounts for nonprofits or educational
                institutions?
              </FAQQuestion>
              <FAQAnswer>
                Yes, we offer special pricing for nonprofits, educational
                institutions, and startups. Please contact our sales team for
                more information.
              </FAQAnswer>
            </FAQItem>
          </FAQGrid>
        </FAQSection>

        <CTASection>
          <CTATitle>Ready to Get Started?</CTATitle>
          <CTADescription>
            Join thousands of businesses that use Textify to grow their digital
            presence and increase customer engagement.
          </CTADescription>
          <CTAButton href="/contact">Contact Sales</CTAButton>
        </CTASection>
      </PricingContent>
    </PricingContainer>
  );
};

export default PricingPage;
