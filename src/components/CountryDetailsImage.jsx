import React from 'react';
import styled from 'styled-components';

const StyledFlag = styled.img`
  box-shadow: 0 5px 5px
    ${({ theme }) => (theme.mode === 'dark' ? '#1c2730' : '#0000002b')};
  @media screen and (min-width: 1024px) {
    grid-area: 2 / 2 / 3 / 2;
  }
`;

const CountryDetailsImage = ({ flag, countryName }) => {
  return (
    <StyledFlag
      src={flag}
      alt={`${countryName} flag`}
    />
  );
};

export default CountryDetailsImage;
