import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  text-align: center;
  padding: clamp(2rem, 8vw, 4.5rem) var(--container-padding);
  background: linear-gradient(45deg, var(--shera-purple), var(--shera-pink));
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  animation: glow 3s infinite;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const TitleContainer = styled.div`
  position: relative;
  display: inline-block;
  padding: 0 clamp(1rem, 3vw, 2rem);
  line-height: var(--line-height-tight);
  max-width: 100%;
`;

const Title = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 700;
  margin: 0;
  background: linear-gradient(
    45deg,
    var(--shera-gold) 0%,
    var(--shera-pink) 25%,
    var(--shera-purple) 50%,
    var(--shera-pink) 75%,
    var(--shera-gold) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3),
    0 0 40px rgba(255, 105, 180, 0.2);
  animation: float 6s ease-in-out infinite, gradientFlow 8s linear infinite;
  letter-spacing: var(--letter-spacing-wider);
  position: relative;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1rem, 3vw, 2rem);
  margin-top: 2.5rem;
  flex-wrap: wrap;
  padding: 0 var(--container-padding);
`;

const SubtitleDecoration = styled.span`
  color: var(--shera-pink);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  animation: sparkle 2s infinite;
  line-height: 1;
  display: flex;
  align-items: center;
`;

const Subtitle = styled.p`
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 4vw, 2.4rem);
  font-weight: 400;
  font-style: italic;
  color: var(--shera-gold);
  text-shadow: 0 0 10px var(--shera-gold), 0 0 20px rgba(255, 215, 0, 0.5);
  letter-spacing: var(--letter-spacing-wide);
  line-height: var(--line-height-tight);
  text-align: center;
  max-width: 600px;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>Cursor IDE</Title>
      </TitleContainer>
      <SubtitleContainer>
        <SubtitleDecoration>✦</SubtitleDecoration>
        <Subtitle>For the Honor of Coding!</Subtitle>
        <SubtitleDecoration>✦</SubtitleDecoration>
      </SubtitleContainer>
    </HeaderContainer>
  );
};

export default Header;
