import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.scrolled ? props.theme.colors.background : "transparent"};
  box-shadow: ${(props) =>
    props.scrolled ? props.theme.shadows.small : "none"};
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
`;

export const LogoImg = styled.img`
  height: 40px;
  margin-right: ${(props) => props.theme.spacing.sm};
`;

export const MobileIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
    width: 100%;
    height: auto;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: ${(props) => props.theme.colors.background};
    box-shadow: ${(props) => props.theme.shadows.medium};
    padding: ${(props) => props.theme.spacing.md} 0;
    display: ${({ open }) => (open ? "flex" : "none")};
    z-index: 999;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  display: flex;
  align-items: center;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: auto;
    width: 100%;
    padding: ${(props) => props.theme.spacing.sm} 0;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 ${(props) => props.theme.spacing.md};
  height: 100%;
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.active ? "20px" : "0")};
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.lg};

    &::after {
      bottom: auto;
      left: ${(props) => props.theme.spacing.sm};
      transform: none;
      width: ${(props) => (props.active ? "3px" : "0")};
      height: 20px;
    }

    &:hover::after {
      width: 3px;
    }
  }
`;

export const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.lg};
  margin-left: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: ${(props) => props.theme.spacing.md} auto;
    width: 80%;
  }
`;

export const DropdownToggle = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 ${(props) => props.theme.spacing.md};
  color: ${(props) =>
    props.active ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    width: ${(props) => (props.active ? "20px" : "0")};
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 20px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    padding: ${(props) => props.theme.spacing.sm}
      ${(props) => props.theme.spacing.lg};

    &::after {
      bottom: auto;
      left: ${(props) => props.theme.spacing.sm};
      transform: none;
      width: ${(props) => (props.active ? "3px" : "0")};
      height: 20px;
    }

    &:hover::after {
      width: 3px;
    }
  }
`;

export const DropdownIcon = styled.span`
  font-size: 0.7rem;
  margin-left: ${(props) => props.theme.spacing.xs};
  transition: transform 0.3s ease;
  display: inline-block;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0)")};
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${(props) => props.theme.colors.surface};
  min-width: 240px;
  box-shadow: ${(props) => props.theme.shadows.medium};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.spacing.sm} 0;
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 1000;
  opacity: ${({ open }) => (open ? "1" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${(props) => props.theme.colors.surface};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: static;
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    margin-left: ${(props) => props.theme.spacing.lg};
    transform: none;
    opacity: 1;
    visibility: visible;
    width: 100%;

    &::before {
      display: none;
    }
  }
`;

export const DropdownItem = styled.li`
  list-style: none;
  margin: 2px 0;
`;

export const DropdownLink = styled(Link)`
  display: block;
  padding: ${(props) => props.theme.spacing.sm}
    ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius.small};
  margin: 0 4px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}15;
    color: ${(props) => props.theme.colors.primary};
    transform: translateY(-2px);
  }
`;
