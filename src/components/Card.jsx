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
  console.log(data);
  return (
    <StyledCard>
      <CardItem
        key={data[0].numericCode}
        id={data[0].alpha3Code}
        name={data[0].name}
        population={data[0].population}
        region={data[0].region}
        capital={data[0].capital}
        flagImage={data[0].flag}
      />
      {/* {data.map(country => (
        <CardItem
          key={country.numericCode}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flagImage={country.flag}
        />
      ))} */}
    </StyledCard>
  );
};

export default Card;
