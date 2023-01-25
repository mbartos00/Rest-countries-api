import React from 'react';
import styled from 'styled-components';
import RegionFilter from './RegionFilter';
import SearchBar from './SearchBar';

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 13rem;
  position: relative;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    justify-content: space-between;
  }
`;

const Nav = ({ onRegionChange, onSearchCountry }) => {
  return (
    <StyledNav>
      <SearchBar onSearchCountry={inputValue => onSearchCountry(inputValue)} />
      <RegionFilter onRegionChange={region => onRegionChange(region)} />
    </StyledNav>
  );
};

export default Nav;
