import React from 'react';
import styled from 'styled-components';

const StyledInfoContainer = styled.section`
  margin-bottom: 1rem;
  @media screen and (min-width: 1024px) {
    grid-area: 2 / 3 / 3 / 3;
    transform: translateY(20%);
    margin-left: 5rem;
    margin-top: 1rem;
  }
`;
export const StyledText = styled.p`
  margin-bottom: 0.5rem;
  & span {
    font-weight: 600;
  }
`;
const CountryDetailsInfo = ({
  nativeName,
  population,
  region,
  subregion,
  capital,
}) => {
  return (
    <StyledInfoContainer>
      <StyledText>
        <span>Native Name: </span>
        {nativeName}
      </StyledText>
      <StyledText>
        <span>Population: </span>
        {population.toLocaleString('en-US')}
      </StyledText>
      <StyledText>
        <span>Region: </span>
        {region}
      </StyledText>
      <StyledText>
        <span>Sub region: </span>
        {subregion}
      </StyledText>
      <StyledText>
        <span>Capital: </span>
        {capital}
      </StyledText>
    </StyledInfoContainer>
  );
};

export default CountryDetailsInfo;
