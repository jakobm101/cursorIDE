import React from "react";
import styled from "styled-components";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: clamp(1.5rem, 4vw, 3rem);
  border-radius: 15px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
  }
`;

const Icon = styled.span`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  line-height: 1;
  display: inline-block;
  background: linear-gradient(45deg, var(--shera-gold), var(--shera-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.3));
  transition: all 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
    filter: drop-shadow(0 0 12px rgba(255, 215, 0, 0.5));
  }
`;

const Title = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--shera-pink);
  margin: 0 0 1.5rem 0;
  text-shadow: 0 0 10px var(--shera-pink);
  letter-spacing: var(--letter-spacing-wide);
  line-height: var(--line-height-tight);
  width: 100%;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Description = styled.p`
  font-family: var(--font-body);
  font-size: clamp(1rem, 2vw, 1.15rem);
  font-weight: 300;
  color: #e0e0e0;
  line-height: var(--line-height-loose);
  letter-spacing: var(--letter-spacing-normal);
  margin: 0;
  width: 100%;
  max-width: 100%;
  -webkit-hyphens: auto;
  hyphens: auto;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;
