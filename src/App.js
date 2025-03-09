import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

// Pages
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import TextToReturnPage from "./pages/ProductPages/TextToReturnPage";
import SocialMediaPlannerPage from "./pages/ProductPages/SocialMediaPlannerPage";
import WebsiteBuilderPage from "./pages/ProductPages/WebsiteBuilderPage";
import AutomationPage from "./pages/ProductPages/AutomationPage";
import SEOPage from "./pages/ProductPages/SEOPage";
import LeadGenPage from "./pages/ProductPages/LeadGenPage";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/products/text-to-return"
            element={<TextToReturnPage />}
          />
          <Route
            path="/products/social-media-planner"
            element={<SocialMediaPlannerPage />}
          />
          <Route
            path="/products/website-builder"
            element={<WebsiteBuilderPage />}
          />
          <Route path="/products/automation" element={<AutomationPage />} />
          <Route path="/products/seo" element={<SEOPage />} />
          <Route path="/products/lead-generation" element={<LeadGenPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
