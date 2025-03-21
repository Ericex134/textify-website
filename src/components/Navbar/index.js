import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../../assets/textify1.png";
import {
  Nav,
  NavContainer,
  NavLogo,
  LogoText,
  NavMenu,
  NavItem,
  NavLink,
  NavButton,
  MobileIcon,
  LogoImg,
  DropdownMenu,
  DropdownItem,
  DropdownLink,
  DropdownToggle,
  DropdownIcon,
} from "./NavbarStyles";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const navItemRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        navItemRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !navItemRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isProductActive = () => {
    const productPaths = [
      "/services",
      "/products/text-to-return",
      "/products/social-media-planner",
      "/products/website-builder",
      "/products/automation",
      "/products/seo",
      "/products/lead-generation",
    ];
    return productPaths.includes(location.pathname);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer className="container">
        <NavLogo to="/">
          <LogoImg src={logoImage} alt="Textify Logo" />
          <LogoText>Textify</LogoText>
        </NavLogo>
        <MobileIcon onClick={toggleMobileMenu}>
          {mobileMenuOpen ? "✕" : "☰"}
        </MobileIcon>
        <NavMenu open={mobileMenuOpen}>
          <NavItem>
            <NavLink to="/" active={isActive("/") ? "true" : undefined}>
              Home
            </NavLink>
          </NavItem>
          <NavItem
            ref={navItemRef}
            style={{ position: "relative" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <DropdownToggle
              active={isProductActive() ? "true" : undefined}
              onClick={toggleDropdown}
            >
              Products <DropdownIcon open={dropdownOpen}>▼</DropdownIcon>
            </DropdownToggle>
            <DropdownMenu ref={dropdownRef} open={dropdownOpen}>
              <DropdownItem>
                <DropdownLink to="/services">All Services</DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/products/text-to-return">
                  Text-to-Return
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/products/social-media-planner">
                  Social Media Planner
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/products/website-builder">
                  Website Builder
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/products/automation">
                  Automation
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/products/seo">
                  SEO & Online Presence
                </DropdownLink>
              </DropdownItem>
              <DropdownItem>
                <DropdownLink to="/products/lead-generation">
                  Lead Generation
                </DropdownLink>
              </DropdownItem>
            </DropdownMenu>
          </NavItem>
          <NavItem>
            <NavLink
              to="/pricing"
              active={isActive("/pricing") ? "true" : undefined}
            >
              Pricing
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/contact"
              active={isActive("/contact") ? "true" : undefined}
            >
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavButton to="/contact">Get Started</NavButton>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
