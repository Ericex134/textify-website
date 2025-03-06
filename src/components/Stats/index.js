import React from "react";
import {
  StatsSection,
  StatsContainer,
  StatsGrid,
  StatItem,
  StatNumber,
  StatLabel,
  StatIcon,
} from "./StatsStyles";

const Stats = () => {
  return (
    <StatsSection>
      <StatsContainer className="container">
        <StatsGrid>
          <StatItem>
            <StatIcon>⚡</StatIcon>
            <StatNumber>97%</StatNumber>
            <StatLabel>Response Rate</StatLabel>
          </StatItem>

          <StatItem>
            <StatIcon>👥</StatIcon>
            <StatNumber>10k+</StatNumber>
            <StatLabel>Happy Customers</StatLabel>
          </StatItem>

          <StatItem>
            <StatIcon>💬</StatIcon>
            <StatNumber>1M+</StatNumber>
            <StatLabel>Messages Sent</StatLabel>
          </StatItem>

          <StatItem>
            <StatIcon>⭐</StatIcon>
            <StatNumber>4.9</StatNumber>
            <StatLabel>Customer Rating</StatLabel>
          </StatItem>
        </StatsGrid>
      </StatsContainer>
    </StatsSection>
  );
};

export default Stats;
