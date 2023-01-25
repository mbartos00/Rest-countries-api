import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCardItem = styled.div`
  height: 20rem;
  max-width: 15rem;
  width: 65%;

  display: inherit;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 5px 5px
    ${({ theme }) => (theme.mode === 'dark' ? '#1c2730' : '#0000002b')};
  margin-bottom: 2rem;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 5px 5px 6px
      ${({ theme }) => (theme.mode === 'dark' ? '#1c2730' : '#0000002b')};
  }
  @media screen and (min-width: 375px) {
    width: 80%;
    max-width: 18rem;
  }
`;
const StyledLink = styled(Link)`
  width: 100%;
  height: 20rem;
`;

const StyledInformations = styled.div`
  height: 50%;
  background: ${({ theme }) => (theme.mode === 'dark' ? '#2b3945' : '#fff')};
  width: 100%;
  color: ${({ theme }) =>
    theme.mode === 'dark' ? '#fff' : 'hsl(200, 15%, 8%)'};

  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 1.5rem;
  align-items: left;
`;
const StyledName = styled.h3`
  font-weight: 800;
  margin: 0 0 0.7rem 0;
`;
const StyledBoldText = styled.span`
  font-weight: 600;
`;
const StyledText = styled.p`
  font-weight: 300;
`;
const StyledFlag = styled.div.attrs(({ image }) => ({
  style: {
    backgroundImage: `url(${image})`,
  },
}))`
  height: 50%;
  width: 100%;
  background-position: center;
  background-size: cover;
`;
const CardItem = ({ name, population, region, capital, flagImage, id }) => {
  return (
    <StyledCardItem>
      <StyledLink to={`/country/${id}`}>
        <StyledFlag image={flagImage} />
        <StyledInformations>
          <StyledName>{name}</StyledName>
          <StyledText>
            <StyledBoldText> Population: </StyledBoldText>
            {population.toLocaleString('en-En')}
          </StyledText>
          <StyledText>
            <StyledBoldText>Region: </StyledBoldText>
            <span>{region}</span>
          </StyledText>
          <StyledText>
            <StyledBoldText> Capital: </StyledBoldText>
            {capital}
          </StyledText>
        </StyledInformations>
      </StyledLink>
    </StyledCardItem>
  );
};

export default CardItem;
