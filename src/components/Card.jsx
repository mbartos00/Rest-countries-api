import React from 'react';
import styled from 'styled-components';
import CardItem from './CardItem';

const StyledCard = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const Card = ({ data }) => {
  return (
    <StyledCard>
      {data.map(country => (
        <CardItem
          key={country.numericCode}
          id={country.alpha3Code}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flagImage={country.flag}
        />
      ))}
    </StyledCard>
  );
};

export default Card;
