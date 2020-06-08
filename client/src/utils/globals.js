import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

    button {
      cursor: pointer;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%;
      box-sizing: border-box;
      --color-typo: ${({ theme }) => theme.typo};
      --color-typo-light: ${({ theme }) => theme.typo_light};
      --color-typo-dark: ${({ theme }) => theme.typo_dark};
      --color-bg: ${({ theme }) => theme.bg};
      --color-primary: ${({ theme }) => theme.primary};
      --color-secondary: ${({ theme }) => theme.secondary};
      --shadow-light: ${({ theme }) => `0 0.3rem 0.5rem ${theme.shadow_light}`};
      --shadow-dark: ${({ theme }) => `0 0.3rem 0.5rem ${theme.shadow_dark}`};
      --navbar-bg:${({ theme }) => theme.navbar_bg};

      @media (max-width: 56.25em) {
        font-size: 56.25%;
      }

      @media (max-width: 37.5em) {
        font-size: 50%;
      }
    }

    body {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      background: var(--color-bg);
      overflow-x: hidden;
      transition: background-color 0.4s;
    }

    form,
    input,
    textarea,
    button,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }

    a:hover{
      transition: all 0.4s;
      color: var(--color-primary);
    }
`
