import styled from "styled-components";

export const TestimonialsSection = styled.section`
  padding: ${(props) => props.theme.spacing.xxl} 0;
  background-color: ${(props) => props.theme.colors.background};
`;

export const TestimonialsContainer = styled.div``;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const TestimonialGrid = styled.div`
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

export const TestimonialCard = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.xl};
  box-shadow: ${(props) => props.theme.shadows.medium};
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.large};
  }
`;

export const QuoteIcon = styled.div`
  font-size: 4rem;
  color: ${(props) => props.theme.colors.primary}30;
  position: absolute;
  top: ${(props) => props.theme.spacing.md};
  left: ${(props) => props.theme.spacing.md};
  font-family: Georgia, serif;
  line-height: 1;
`;

export const TestimonialText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  position: relative;
  z-index: 1;
`;

export const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const CustomerAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: ${(props) => props.theme.spacing.md};
  border: 2px solid ${(props) => props.theme.colors.primary}30;
`;

export const CustomerName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin: 0;
`;

export const CustomerRole = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
`;
