import React from "react";
import styled, { keyframes } from "styled-components";

export const PoppingCircle = ({ size, color }) => {
  return <Wrapper style={{ width: size, height: size, background: color }} />;
};

const scale = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const opacity = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  display: block;
  border-radius: 50%;
  animation: ${opacity} 500ms ease-in forwards,
    ${scale} 300ms cubic-bezier(0.5, 0.2, 0.9, 0.7);
`;
