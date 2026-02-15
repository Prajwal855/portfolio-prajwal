import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

  :root {
    --bg-main: #0a0a0a;
    --bg-surface: #121212;
    --line: #2b2b2b;
    --text: #f4f1ec;
    --muted: #bbb3aa;
    --accent: #d9bf8f;
    --accent-soft: #8f7754;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Barlow Condensed', 'Arial Narrow', sans-serif;
    background:
      radial-gradient(65rem 35rem at 85% -10%, rgba(217, 191, 143, 0.1) 0%, rgba(217, 191, 143, 0) 70%),
      radial-gradient(45rem 25rem at 5% 95%, rgba(217, 191, 143, 0.08) 0%, rgba(217, 191, 143, 0) 72%),
      var(--bg-main);
    color: var(--text);
    overflow-x: hidden;
    min-height: 100vh;
    line-height: 1.2;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ::-webkit-scrollbar {
    width: 9px;
    background: #111;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #332b22 0%, #b59a71 100%);
    border-radius: 8px;
  }

  ::selection {
    background: rgba(217, 191, 143, 0.35);
    color: var(--text);
  }
`;

export default GlobalStyles;
