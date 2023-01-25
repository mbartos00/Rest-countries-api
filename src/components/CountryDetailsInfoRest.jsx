import React from 'react';
import styled from 'styled-components';
import { StyledText } from './CountryDetailsInfo';

const StyledInfoContainer = styled.section`
  margin-bottom: 1rem;
  @media screen and (min-width: 1024px) {
    grid-area: 2 / 4 / 3 / 4;
    transform: translateX(-40%) translateY(20%);
  }
`;

const CountryDetailsInfoRest = ({ topLevelDomain, currencies, languages }) => {
  return (
    <StyledInfoContainer>
      <StyledText>
        <span>Top Level Domain: </span>
        {topLevelDomain[0]}
      </StyledText>
      <StyledText>
        <span>Currencies: </span>
        {currencies.map(currency => currency.name)}
      </StyledText>
      <StyledText>
        <span>Languages: </span>
        {languages.map(language => language.name + ', ')}
      </StyledText>
    </StyledInfoContainer>
  );
};

export default CountryDetailsInfoRest;
