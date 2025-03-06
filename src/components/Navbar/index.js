import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Nav,
  NavContainer,
  NavLogo,
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
        !dropdownRef.current.contains(event.target) &&
        navItemRef.current &&
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

  // Close dropdown when route changes
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isProductActive = () => {
    const productPaths = [
      "/products/text-to-return",
      "/products/social-media-planner",
      "/products/website-builder",
      "/products/automation",
    ];
    return productPaths.includes(location.pathname);
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer className="container">
        <NavLogo to="/">
          <LogoImg
            src={process.env.PUBLIC_URL + "/assets/textify1.png"}
            alt="Textify Logo"
          />
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
            <NavButton to="/get-started">Get Started</NavButton>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
