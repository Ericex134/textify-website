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

export const HeroContainer = styled.header`
  min-height: 90vh;
  padding: ${(props) => props.theme.spacing.xxxl} 0;
  padding-top: calc(${(props) => props.theme.spacing.xxxl} * 2.5);
  display: flex;
  align-items: center;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.background},
    ${(props) => props.theme.colors.surfaceLight}
  );

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding-top: ${(props) => props.theme.spacing.xxl};
    min-height: auto;
    padding-bottom: ${(props) => props.theme.spacing.xl};
  }
`;

export const HeroContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  line-height: 1;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  letter-spacing: -0.02em;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: clamp(2rem, 8vw, 3.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 7vw, 2.5rem);
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
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  max-width: 650px;
  animation: ${fadeIn} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
  opacity: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`;

export const HighlightText = styled.span`
  color: ${(props) => props.theme.colors.primaryLight};
  font-weight: 500;
`;

export const CTAGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  animation: ${fadeIn} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
  opacity: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;
    gap: ${(props) => props.theme.spacing.md};
  }
`;

export const PrimaryButton = styled(Link)`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.large};
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: ${(props) => props.theme.shadows.small};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.shadows.medium};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.md};
    font-size: 0.95rem;
    white-space: nowrap;
    text-align: center;
  }
`;

export const SecondaryButton = styled(Link)`
  background: rgba(0, 82, 204, 0.05);
  border: 1px solid rgba(0, 82, 204, 0.2);
  color: ${(props) => props.theme.colors.primaryDark};
  padding: ${(props) => props.theme.spacing.md}
    ${(props) => props.theme.spacing.lg};
  border-radius: ${(props) => props.theme.borderRadius.large};
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;

  &:hover {
    background: rgba(0, 82, 204, 0.1);
    border-color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.md};
    font-size: 0.95rem;
    white-space: nowrap;
    text-align: center;
  }
`;
