import React from "react";
import styled from "styled-components";

const CTAButton = styled.button`
  background: linear-gradient(45deg, var(--shera-pink), var(--shera-purple));
  color: white;
  border: none;
  padding: clamp(1rem, 2vw, 1.5rem) clamp(2rem, 4vw, 3rem);
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-family: var(--font-heading);
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 0 20px rgba(138, 43, 226, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(138, 43, 226, 0.5);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const Icon = styled.span`
  font-size: 1.2em;
  line-height: 1;
`;

interface CallToActionProps {
  onClick?: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onClick }) => {
  return (
    <CTAButton onClick={onClick}>
      <Icon>⚔️</Icon>
      Download Now
    </CTAButton>
  );
};

export default CallToAction;
