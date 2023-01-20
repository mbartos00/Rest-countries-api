import React from 'react';
import styled from 'styled-components';
const StyledSearchBar = styled.div`
  background: ${({ theme }) => (theme.mode === 'dark' ? '#2b3945' : '#fff')};
  position: absolute;
  top: 10%;
  display: inherit;
  justify-content: center;
  width: 80%;
  height: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 5px
    ${({ theme }) => (theme.mode === 'dark' ? '#1c2730' : '#0000002b')};
  @media screen and (min-width: 1024px) {
    width: 50%;
    left: 5%;
    top: 20%;
  }

  input {
    border: none;
    border-radius: 10px;
    background: ${({ theme }) => (theme.mode === 'dark' ? '#2b3945' : '#fff')};
    width: 100%;
    outline: none;
    color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2b3945')};
    padding-inline: 1rem;
    &::placeholder {
      font-weight: 600;
      color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2b3945')};
      opacity: 1;
    }
  }
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input
        type='search'
        placeholder='Search for a country...'
        aria-label='Searchbar'
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
