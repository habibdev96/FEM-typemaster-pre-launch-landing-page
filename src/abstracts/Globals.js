import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
  :root {
    /* colors */
    --black: hsl(0, 0%, 13%);
    --white: hsl(0, 0%, 100%);
    --primary-100: hsl(22, 100%, 69%);
    --primary-200: hsl(22, 89%, 52%);
    --secondary-100: hsl(198, 28%, 93%);
    --secondary-200: hsl(221, 23%, 58%); 
    --secondary-300: hsl(220, 50%, 17%);

    /* radius */
    --mainRadius: 1rem;

    /* shadows */
    --mainShadow: 0.1rem 0.3rem 1rem rgba(0, 0, 0, .2);

    /* transitions */
    --mainTransition: all 0.3s ease-in-out;

    /* font sizes */
    --xxl: 4.5rem;
    --xl: 4rem;
    --lg: 3.5rem;
    --md: 3rem;
    --sm: 2.5rem;
    --xs: 2rem;
    --xxs: 1.6rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Barlow', sans-serif;
    overflow-x: hidden;
  }

  img {
    width: 100%;
    object-fit: cover;
    pointer-events: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input {
    font-family: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-delay: -1ms !important;
      animation-duration: 1ms !important;
      animation-iteration-count: 1 !important;
      background-attachment: initial !important;
      scroll-behavior: auto !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
  }
`;

export default Globals;
