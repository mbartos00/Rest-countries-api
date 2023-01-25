import React from 'react';
import styled from 'styled-components';
import CountryDetailsImage from './CountryDetailsImage';
import CountryDetailsInfo from './CountryDetailsInfo';
import CountryDetailsInfoRest from './CountryDetailsInfoRest';
import CountryDetailsButtons from './CountryDetailsButtons';

const StyledMain = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  height: 50vh;
  @media screen and (min-width: 1024px) {
    display: grid;
    margin: 0;
    grid-template-columns: 1fr 7fr 9fr 4fr;
    grid-template-rows: 0.2fr 0.7fr;
    grid-column-gap: 0;
    grid-row-gap: 0;
  }
`;
const StyledName = styled.h1`
  margin: 1rem 0;
  @media screen and (min-width: 1024px) {
    grid-area: 2 / 3 / 3 / 3;
    margin-left: 5rem;
  }
`;

const CountryDetailsItem = ({ data }) => {
  return (
    <StyledMain>
      <CountryDetailsImage
        flag={data.flag}
        countryName={data.name}
      />
      <StyledName>{data.name}</StyledName>
      <CountryDetailsInfo
        nativeName={data.nativeName}
        population={data.population}
        region={data.region}
        subregion={data.subregion}
        capital={data.capital}
      />
      <CountryDetailsInfoRest
        topLevelDomain={data.topLevelDomain}
        currencies={data.currencies}
        languages={data.languages}
      />

      <CountryDetailsButtons borderCountries={data.borders} />
    </StyledMain>
  );
};

export default CountryDetailsItem;
