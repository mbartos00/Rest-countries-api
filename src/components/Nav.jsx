import React from 'react';
import styled from 'styled-components';
import RegionFilter from './RegionFilter';
import SearchBar from './SearchBar';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 13rem;
  position: relative;
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <SearchBar />
      <RegionFilter />
    </StyledNav>
  );
};

export default Nav;
