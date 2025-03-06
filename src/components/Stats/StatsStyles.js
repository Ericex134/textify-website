import styled from "styled-components";

export const StatsSection = styled.section`
  padding: ${(props) => props.theme.spacing.xl} 0;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primary}0A,
    ${(props) => props.theme.colors.primaryLight}1A
  );
`;

export const StatsContainer = styled.div``;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  padding: ${(props) => props.theme.spacing.lg};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: ${(props) => props.theme.shadows.small};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${(props) => props.theme.shadows.medium};
  }
`;

export const StatIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

export const StatNumber = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

export const StatLabel = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;
