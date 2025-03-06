import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.surface};
  border-top: 1px solid rgba(0, 82, 204, 0.1);
  padding: ${(props) => props.theme.spacing.xxl} 0
    ${(props) => props.theme.spacing.lg};
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${(props) => props.theme.spacing.xl};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  position: relative;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const FooterBrand = styled.div`
  max-width: 400px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.md};

  img {
    width: 150px;
    height: auto;
  }
`;

export const FooterDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.spacing.xl};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const LinkGroup = styled.div``;

export const LinkGroupTitle = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.1rem;
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const FooterLink = styled(Link)`
  display: block;
  color: ${(props) => props.theme.colors.textSecondary};
  text-decoration: none;
  margin-bottom: ${(props) => props.theme.spacing.sm};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const FooterBottom = styled.div`
  padding-top: ${(props) => props.theme.spacing.lg};
  border-top: 1px solid rgba(0, 82, 204, 0.1);
  text-align: center;
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;
