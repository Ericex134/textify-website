import styled from "styled-components";
import { Link } from "react-router-dom";

export const HowItWorksSection = styled.section`
  padding: ${(props) => props.theme.spacing.xxl} 0;
  background-color: ${(props) => props.theme.colors.surface};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.primary},
      ${(props) => props.theme.colors.primaryLight}
    );
  }
`;

export const HowItWorksContainer = styled.div``;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.md};
  text-align: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

export const SectionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto ${(props) => props.theme.spacing.xl};
  text-align: center;
`;

export const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.spacing.lg};
  margin: ${(props) => props.theme.spacing.xl} 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 60px;
    right: 60px;
    height: 2px;
    background: ${(props) => props.theme.colors.primaryLight}40;
    z-index: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);

    &::after {
      display: none;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary}40;
`;

export const StepContent = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: ${(props) => props.theme.spacing.lg};
  box-shadow: ${(props) => props.theme.shadows.medium};
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.large};
  }
`;

export const StepIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
  background: ${(props) => props.theme.colors.surfaceLight};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${(props) => props.theme.spacing.md};
`;

export const StepTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
`;

export const StepDescription = styled.p`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

export const CTAContainer = styled.div`
  text-align: center;
  margin-top: ${(props) => props.theme.spacing.xl};
  padding: ${(props) => props.theme.spacing.xl};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary}0A,
    ${(props) => props.theme.colors.primaryLight}1A
  );
  border-radius: ${(props) => props.theme.borderRadius.large};
`;

export const CTAText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

export const CTAButton = styled(Link)`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
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
