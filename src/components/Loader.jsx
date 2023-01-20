import React from 'react';
import styled, { keyframes } from 'styled-components';
const spin = keyframes`
   100% {
    transform: rotate(360deg);
  }
`;
const spinBackwards = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;
const StyledLoader = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  z-index: 2;
  position: absolute;
  left: 0;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? 'hsl(207, 26%, 17%)' : '#fff'};
  display: flex;
  justify-content: center;
`;
const StyledCircle1 = styled.div`
  position: absolute;
  width: 80px;
  aspect-ratio: 1;

  top: 5rem;
  border-radius: 100vh;
  border: 6px solid rgba(0, 0, 0, 0.05);
  border-top-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#fff' : 'hsl(200, 15%, 8%)'};
  animation: ${spin} 1.5s linear infinite;
`;
const StyledCircle2 = styled.div`
  position: absolute;
  width: 60px;
  aspect-ratio: 1;
  top: 5.6rem;
  border-radius: 100vh;
  border: 6px solid transparent;
  border-bottom-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#fff' : 'hsl(200, 15%, 8%)'};
  animation: ${spinBackwards} 1.2s linear infinite;
`;
const StyledCircle3 = styled.div`
  position: absolute;
  width: 40px;
  aspect-ratio: 1;

  top: 6.2rem;
  border-radius: 100vh;
  border: 6px solid transparent;
  border-left-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#fff' : 'hsl(200, 15%, 8%)'};
  animation: ${spin} 1s linear infinite;
`;
const StyledCircle4 = styled.div`
  position: absolute;
  width: 20px;
  aspect-ratio: 1;

  top: 6.8rem;
  border-radius: 100vh;
  border: 6px solid transparent;
  border-right-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#fff' : 'hsl(200, 15%, 8%)'};
  animation: ${spinBackwards} 1s linear infinite;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <StyledCircle1></StyledCircle1>
      <StyledCircle2></StyledCircle2>
      <StyledCircle3></StyledCircle3>
      <StyledCircle4></StyledCircle4>
    </StyledLoader>
  );
};

export default Loader;
