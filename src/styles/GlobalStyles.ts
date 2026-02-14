import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background 0.3s, color 0.3s, border 0.3s;
  }

  body {
    font-family: 'Montserrat', 'Poppins', 'Segoe UI', Arial, sans-serif;
    background: linear-gradient(135deg, #18181b 0%, #232526 100%);
    color: #f5f5f7;
    min-height: 100vh;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Glassy overlay */
    position: relative;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: -1;
    background: rgba(24, 24, 27, 0.7);
    backdrop-filter: blur(8px);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: 'Montserrat', 'Poppins', 'Segoe UI', Arial, sans-serif;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  a {
    text-decoration: none;
    color: #ffd700;
    transition: color 0.2s;
    font-weight: 500;
  }
  a:hover {
    color: #fffbe6;
    text-shadow: 0 0 8px #ffd70088;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  /* Premium scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    background: #232526;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #ffd700 0%, #232526 100%);
    border-radius: 8px;
  }

  /* Selection color */
  ::selection {
    background: #ffd70044;
    color: #18181b;
  }
`;

export default GlobalStyles;
