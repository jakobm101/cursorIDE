import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

const GlobalStyle = createGlobalStyle`
  :root {
    --shera-pink: #ff69b4;
    --shera-purple: #8a2be2;
    --shera-gold: #ffd700;
    --max-width: 1200px;
    --container-padding: clamp(1rem, 5vw, 2rem);
    --font-heading: 'Libre Baskerville', serif;
    --font-body: 'Montserrat', sans-serif;
    --letter-spacing-wide: 0.05em;
    --letter-spacing-normal: 0.02em;
    --line-height-tight: 1.2;
    --line-height-loose: 1.6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-body);
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    color: white;
    min-height: 100vh;
    line-height: var(--line-height-loose);
  }

  @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--container-padding);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(138, 43, 226, 0.1), transparent 70%);
    pointer-events: none;
  }
`;

const MainContent = styled.main`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(3rem, 8vw, 6rem);
  position: relative;
  z-index: 1;
`;

const App: React.FC = () => {
  const handleDownload = () => {
    // Add download logic here
    console.log('Download initiated');
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <MainContent>
          <Header />
          <Features />
          <CallToAction onClick={handleDownload} />
        </MainContent>
      </AppContainer>
    </>
  );
};

export default App; 