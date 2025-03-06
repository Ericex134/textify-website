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

  ${(props) =>
    props.reverse &&
    `
    order: 2;
    
    @media (max-width: ${props.theme.breakpoints.lg}) {
      order: 0;
    }
  `}
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

  ${(props) =>
    props.reverse &&
    `
    order: 1;
    
    @media (max-width: ${props.theme.breakpoints.lg}) {
      order: -1;
    }
  `}
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

const TemplateSection = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.xxl};
  text-align: center;
`;

const TemplateTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.text};
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${(props) => props.theme.spacing.lg};
  margin-top: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TemplateCard = styled.div`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadows.medium};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);

    img {
      transform: scale(1.05);
    }

    .overlay {
      opacity: 1;
    }
  }
`;

const TemplateImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const TemplateOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: ${(props) => props.theme.spacing.md};
  opacity: 0.8;
  transition: opacity 0.3s ease;
  color: white;
  text-align: left;
`;

const TemplateName = styled.h4`
  margin: 0;
  font-size: 1.2rem;
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

const TemplateCategory = styled.p`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
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

const WebsiteBuilderPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <HeroSection>
          <PageTitle>Website Builder</PageTitle>
          <Tagline>
            Your online presence can make or break your business
          </Tagline>
          <Description>
            Create stunning, professional websites without any coding knowledge.
            Our intuitive website builder gives you the tools to establish a
            powerful online presence that converts visitors into customers.
          </Description>
        </HeroSection>

        <ContentSection>
          <ContentText>
            <ContentTitle>All-in-One Website Solution</ContentTitle>
            <ContentDescription>
              Monitor your website's views, sales, conversion rate and other
              performance analytics from a single dashboard. Make data-driven
              decisions to optimize your online presence and maximize results.
            </ContentDescription>
            <ContentDescription>
              Whether you're a small business owner, entrepreneur, or
              established company, our website builder provides everything you
              need to succeed online.
            </ContentDescription>
          </ContentText>
          <ContentImage
            src="https://placehold.co/600x400/e6f0ff/2684ff?text=Website+Dashboard"
            alt="Website Dashboard"
          />
        </ContentSection>

        <ContentSection>
          <ContentImage
            src="https://placehold.co/600x400/e6f0ff/2684ff?text=Website+Templates"
            alt="Website Templates"
            reverse
          />
          <ContentText reverse>
            <ContentTitle>Professional Templates for Any Industry</ContentTitle>
            <ContentDescription>
              Choose from hundreds of professional website and funnel templates
              designed for conversion. Our templates are mobile-responsive,
              SEO-friendly, and customizable to match your brand.
            </ContentDescription>
            <ContentDescription>
              From business websites to online stores, portfolios to landing
              pages, we have templates for every need and industry.
            </ContentDescription>
          </ContentText>
        </ContentSection>

        <FeatureSection>
          <FeatureTitle>Key Features</FeatureTitle>
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>🛒</FeatureIcon>
              <FeatureCardTitle>E-commerce Integration</FeatureCardTitle>
              <FeatureCardDescription>
                Integration for online stores and major ecommerce brands
                including Shopify and Squarespace.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>📱</FeatureIcon>
              <FeatureCardTitle>Mobile Responsive</FeatureCardTitle>
              <FeatureCardDescription>
                All websites automatically adjust to look perfect on any device
                - desktop, tablet, or mobile.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🔍</FeatureIcon>
              <FeatureCardTitle>SEO Optimization</FeatureCardTitle>
              <FeatureCardDescription>
                Built-in SEO tools to help your website rank higher in search
                engines and attract more visitors.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>📊</FeatureIcon>
              <FeatureCardTitle>Analytics Dashboard</FeatureCardTitle>
              <FeatureCardDescription>
                Comprehensive analytics to track visitors, page views,
                conversion rates, and more.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🔒</FeatureIcon>
              <FeatureCardTitle>Security & Hosting</FeatureCardTitle>
              <FeatureCardDescription>
                Secure hosting with SSL certificates included, keeping your
                website and customer data safe.
              </FeatureCardDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureCardTitle>Marketing Integrations</FeatureCardTitle>
              <FeatureCardDescription>
                Connect with email marketing, social media, and other tools to
                grow your business.
              </FeatureCardDescription>
            </FeatureCard>
          </FeatureGrid>
        </FeatureSection>

        <TemplateSection>
          <TemplateTitle>Explore Our Templates</TemplateTitle>
          <Description>
            Browse through our collection of professionally designed templates
            to find the perfect starting point for your website.
          </Description>
          <TemplateGrid>
            <TemplateCard>
              <TemplateImage
                src="https://placehold.co/600x400/e6f0ff/2684ff?text=Business"
                alt="Business Template"
              />
              <TemplateOverlay className="overlay">
                <TemplateName>Professional Business</TemplateName>
                <TemplateCategory>Corporate, Services</TemplateCategory>
              </TemplateOverlay>
            </TemplateCard>

            <TemplateCard>
              <TemplateImage
                src="https://placehold.co/600x400/e6f0ff/2684ff?text=E-commerce"
                alt="E-commerce Template"
              />
              <TemplateOverlay className="overlay">
                <TemplateName>Online Store</TemplateName>
                <TemplateCategory>E-commerce, Retail</TemplateCategory>
              </TemplateOverlay>
            </TemplateCard>

            <TemplateCard>
              <TemplateImage
                src="https://placehold.co/600x400/e6f0ff/2684ff?text=Portfolio"
                alt="Portfolio Template"
              />
              <TemplateOverlay className="overlay">
                <TemplateName>Creative Portfolio</TemplateName>
                <TemplateCategory>Artists, Designers</TemplateCategory>
              </TemplateOverlay>
            </TemplateCard>
          </TemplateGrid>
        </TemplateSection>

        <CTASection>
          <CTATitle>Ready to Build Your Dream Website?</CTATitle>
          <CTADescription>
            Join thousands of businesses that have established a powerful online
            presence with Textify's Website Builder.
          </CTADescription>
          <CTAButton href="/contact">Get Started Today</CTAButton>
        </CTASection>
      </PageContent>
    </PageContainer>
  );
};

export default WebsiteBuilderPage;
