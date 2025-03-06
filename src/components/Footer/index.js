import React from "react";
import { Link } from "react-router-dom";
import {
  FooterContainer,
  FooterContent,
  FooterBrand,
  FooterLogo,
  FooterDescription,
  FooterLinks,
  LinkGroup,
  LinkGroupTitle,
  FooterLink,
  FooterBottom,
  Copyright,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterBrand>
            <FooterLogo>
              <Link to="/">
                <img src="/images/textify1.png" alt="Textify Logo" />
              </Link>
            </FooterLogo>
            <FooterDescription>
              Our automated solution instantly responds to missed calls, keeping
              your customers engaged and your business growing.
            </FooterDescription>
          </FooterBrand>

          <FooterLinks>
            <LinkGroup>
              <LinkGroupTitle>Product</LinkGroupTitle>
              <FooterLink to="/features">Features</FooterLink>
              <FooterLink to="/pricing">Pricing</FooterLink>
              <FooterLink to="/how-it-works">How It Works</FooterLink>
            </LinkGroup>

            <LinkGroup>
              <LinkGroupTitle>Company</LinkGroupTitle>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
            </LinkGroup>
          </FooterLinks>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Textify. All rights reserved.
          </Copyright>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};

export default Footer;
