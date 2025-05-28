import React from "react";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";

const FeaturesContainer = styled.section`
  padding: clamp(2rem, 5vw, 4rem) var(--container-padding);
  width: 100%;
  box-sizing: border-box;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  max-width: var(--max-width);
  margin: 0 auto;
`;

const features = [
  {
    icon: "✨",
    title: "Smart Code Completion",
    description:
      "Experience the power of AI-driven code suggestions that understand your coding style and project context.",
  },
  {
    icon: "🚀",
    title: "Lightning Fast",
    description:
      "Built for speed and efficiency, ensuring your development workflow stays smooth and responsive.",
  },
  {
    icon: "🎨",
    title: "Beautiful Themes",
    description:
      "Choose from a variety of stunning themes, including this magical She-Ra inspired design.",
  },
  {
    icon: "🤝",
    title: "Collaborative Coding",
    description:
      "Work together seamlessly with real-time collaboration features and shared workspaces.",
  },
];

const Features: React.FC = () => {
  return (
    <FeaturesContainer>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features;
