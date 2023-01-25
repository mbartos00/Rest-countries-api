import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledBtnsContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 1024px) {
    grid-area: 3 / 3 / 1 / 3;
    transform: translateY(75%);
    display: inline-block;
    margin-left: 5rem;
  }
`;
const StyledBorderBtn = styled(Link)`
  background: ${({ theme }) => (theme.mode === 'dark' ? '#2b3945' : '#fff')};
  display: inline-block;
  border: none;
  border-radius: 2px;
  box-shadow: 0 5px 5px
    ${({ theme }) => (theme.mode === 'dark' ? '#1c2730' : '#0000002b')};
  padding: 0.3rem 1.7rem;
  cursor: pointer;
  margin: 1rem 0.6rem 1rem 0;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#fff' : '#2b3945')};
  transition: all 0.1s ease-in-out;

  &:hover,
  &:focus {
    transform: translateY(-3px);
  }
`;
const CountryDetailsButtons = ({ borderCountries }) => {
  return (
    <StyledBtnsContainer>
      <h3>Border Countries:</h3>
      {borderCountries &&
        borderCountries.map(country => (
          <StyledBorderBtn
            key={country}
            to={`/country/${country}`}
          >
            {country}
          </StyledBorderBtn>
        ))}
    </StyledBtnsContainer>
  );
};

export default CountryDetailsButtons;
