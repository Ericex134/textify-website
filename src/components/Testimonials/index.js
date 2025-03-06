import React from "react";
import {
  TestimonialsSection,
  TestimonialsContainer,
  SectionTitle,
  TestimonialGrid,
  TestimonialCard,
  QuoteIcon,
  TestimonialText,
  CustomerInfo,
  CustomerName,
  CustomerRole,
  CustomerAvatar,
} from "./TestimonialsStyles";

const Testimonials = () => {
  return (
    <TestimonialsSection>
      <TestimonialsContainer className="container">
        <SectionTitle>What Our Customers Say</SectionTitle>

        <TestimonialGrid>
          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>
              Textify has completely transformed how we handle missed calls. Our
              response rate has increased by 85% and customer satisfaction is at
              an all-time high!
            </TestimonialText>
            <CustomerInfo>
              <CustomerAvatar
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah Johnson"
              />
              <div>
                <CustomerName>Sarah Johnson</CustomerName>
                <CustomerRole>Small Business Owner</CustomerRole>
              </div>
            </CustomerInfo>
          </TestimonialCard>

          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>
              The analytics dashboard gives us incredible insights into customer
              behavior. We've been able to optimize our communication strategy
              and increase conversions.
            </TestimonialText>
            <CustomerInfo>
              <CustomerAvatar
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Michael Chen"
              />
              <div>
                <CustomerName>Michael Chen</CustomerName>
                <CustomerRole>Marketing Director</CustomerRole>
              </div>
            </CustomerInfo>
          </TestimonialCard>

          <TestimonialCard>
            <QuoteIcon>"</QuoteIcon>
            <TestimonialText>
              Setup was incredibly easy and the customer support team was there
              every step of the way. The ROI we've seen in just 3 months has
              been remarkable.
            </TestimonialText>
            <CustomerInfo>
              <CustomerAvatar
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Jessica Martinez"
              />
              <div>
                <CustomerName>Jessica Martinez</CustomerName>
                <CustomerRole>Retail Store Manager</CustomerRole>
              </div>
            </CustomerInfo>
          </TestimonialCard>
        </TestimonialGrid>
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
