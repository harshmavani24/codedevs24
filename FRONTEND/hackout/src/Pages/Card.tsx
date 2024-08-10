// src/components/Card.tsx
import React from 'react';

// Define the fade-in-up animation styles
const animationStyles = {
  animation: 'fadeInUp 0.6s ease-out',
};

// Create the keyframes and animation styles as a string
const animationKeyframes = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

// Inject the keyframes into the document head
const injectAnimationStyles = () => {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = animationKeyframes;
  document.head.appendChild(styleSheet);
};

// Call the function to inject styles when the module is loaded
injectAnimationStyles();

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={`bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg ${className}`} style={animationStyles}>
    {children}
  </div>
);

const CardHeader: React.FC<CardProps> = ({ children }) => (
  <div className="p-4 border-b border-gray-300" style={animationStyles}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ children }) => (
  <div className="p-2" style={animationStyles}>
    {children}
  </div>
);

const CardTitle: React.FC<CardProps> = ({ children }) => (
  <h3 className="text-lg font-semibold" style={animationStyles}>
    {children}
  </h3>
);

export { Card, CardHeader, CardContent, CardTitle };
