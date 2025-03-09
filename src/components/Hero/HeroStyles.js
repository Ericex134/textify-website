import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled.section`
  padding: ${(props) => props.theme.spacing.xxxl} 0
    ${(props) => props.theme.spacing.xxl};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.background}F0,
    ${(props) => props.theme.colors.primary}10
  );
  position: relative;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing.xxl} 0;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.text},
    ${(props) => props.theme.colors.primary}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PrimaryButton = styled(Link)`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary}40;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px ${(props) => props.theme.colors.primary}60;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.xl};
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}10;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px ${(props) => props.theme.colors.primary}20;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const HeroImage = styled.img`
  max-width: 500px;
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: ${(props) => props.theme.shadows.medium};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    max-width: 400px;
  }
`;

export const TitleLine = styled.span`
  display: block;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.text},
    #2d3748
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
  font-weight: 800;
  margin-bottom: calc(${(props) => props.theme.spacing.xs});
  opacity: 0;
  transform: translateY(20px);

  &:first-child {
    animation: ${slideUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  &:last-child {
    animation: ${slideUp} 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s forwards;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const HighlightText = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
`;

export const CTAGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;
