import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  height: 8rem;
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2b3945')};
  @media screen and (min-width: 1024px) {
    height: 8rem;

    justify-content: center;
    flex-wrap: wrap;
  }
`;

const StyledNavBtn = styled(Link)`
  background: ${({ theme }) => (theme.mode === 'dark' ? '#2b3945' : '#fff')};
  border: none;
  border-radius: 2px;
  box-shadow: 0 5px 5px
    ${({ theme }) => (theme.mode === 'dark' ? '#1c2730' : '#0000002b')};
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 10%;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2b3945')};
  transition: all 0.1s ease-in-out;
  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
  @media screen and (min-width: 1024px) {
    left: 5%;
  }
`;

const CountryDetailsNav = () => {
  return (
    <StyledNav>
      <StyledNavBtn to={'/'}>Back</StyledNavBtn>
    </StyledNav>
  );
};

export default CountryDetailsNav;
