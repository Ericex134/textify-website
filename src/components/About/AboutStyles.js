import styled from "styled-components";
import { Link } from "react-router-dom";

export const AboutSection = styled.section`
  padding: ${(props) => props.theme.spacing.xxl} 0;
  background-color: ${(props) => props.theme.colors.background};
`;

export const AboutContainer = styled.div``;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.md};
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const AboutDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto ${(props) => props.theme.spacing.xl};
  text-align: center;
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${(props) => props.theme.spacing.xl};
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const AboutImage = styled.img`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: ${(props) => props.theme.shadows.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const AboutTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.md};
`;

export const FeatureItem = styled.div`
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  align-items: flex-start;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;

export const FeatureIcon = styled.div`
  font-size: 1.75rem;
  margin-right: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.surfaceLight};
  padding: ${(props) => props.theme.spacing.xs};
  border-radius: ${(props) => props.theme.borderRadius.small};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.text};
`;

export const FeatureDescription = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin: 0;
`;

export const AboutCTA = styled(Link)`
  margin-top: ${(props) => props.theme.spacing.lg};
  align-self: flex-start;
  display: inline-block;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.surface};
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;
