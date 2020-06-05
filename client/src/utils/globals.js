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
      --color-typo: ${props => props.theme.colors.typo};
      --color-typo-light: ${props => props.theme.colors.typo_light};
      --color-typo-dark: ${props => props.theme.colors.typo_dark};
      --color-bg: ${props => props.theme.colors.bg};
      --color-bg-light: ${props => props.theme.colors.bg_light};
      --color-bg-dark: ${props => props.theme.colors.bg_dark};
      --color-primary: ${props => props.theme.colors.primary};
      --color-secondary: ${props => props.theme.colors.secondary};
      --shadow-light: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
      --shadow-dark: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);

      @media ${props => props.theme.bp.largest} {
          font-size: 68%;
      }

      @media ${props => props.theme.bp.larger} {
          font-size: 55%;
      }

      @media ${props => props.theme.bp.medium} {
        font-size: 53%;
      }

      @media ${props => props.theme.bp.small} {
        font-size: 50%;
      }
    }

    body {
      font-family: 'Nunito', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      background: rgba(0,0,0,0.04);
      overflow-x: hidden;
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
      transition: all 0.6s;
      color: var(--color-primary);
    }
`
