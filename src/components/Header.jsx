import React, { useEffect } from 'react';
import { useState } from 'react';
import styled, { useTheme } from 'styled-components';
import ToggleSwitch from './ToggleSwitch';

const StyledHeader = styled.header`
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#2b3945' : '#fff'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 5rem;
  padding-inline: 2rem;
  box-shadow: 0 5px 5px
    ${({ theme }) => (theme.mode === 'dark' ? '#1c2730' : '#0000002b')};
  h3 {
    font-weight: 800;
  }
`;

const Header = ({ setTheme }) => {
  return (
    <StyledHeader>
      <h3>Where in the world?</h3>
      <ToggleSwitch
        name='darkmode'
        setTheme={setTheme}
      />
    </StyledHeader>
  );
};

export default Header;
