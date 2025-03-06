import { createGlobalStyle, keyframes } from "styled-components";

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

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  .container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 ${(props) => props.theme.spacing.lg};
    
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      padding: 0 ${(props) => props.theme.spacing.md};
    }
  }

  /* Animation classes */
  .content-fade {
    opacity: 0;
    animation: ${fadeIn} 1s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards;
  }

  /* Add any additional global styles here */
`;

export default GlobalStyles;
