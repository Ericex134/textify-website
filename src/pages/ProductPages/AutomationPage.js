import React from "react";
import styled from "styled-components";

const PageContainer = styled.div`
  padding-top: 120px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

const PageContent = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: ${(props) => props.theme.spacing.lg};
  color: ${(props) => props.theme.colors.text};
`;

const ComingSoonText = styled.p`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const AutomationPage = () => {
  return (
    <PageContainer>
      <PageContent>
        <PageTitle>Automation</PageTitle>
        <ComingSoonText>
          This product page will be implemented soon.
        </ComingSoonText>
      </PageContent>
    </PageContainer>
  );
};

export default AutomationPage;
