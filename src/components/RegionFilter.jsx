import React from 'react';
import styled from 'styled-components';

const StyledFilter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 2.5rem;
  top: 10%;
  left: -15%;
  width: 50%;
  box-shadow: 0 5px 5px
    ${({ theme }) => (theme.mode === 'dark' ? '#1c2730' : '#0000002b')};
  @media screen and (min-width: 1024px) {
    width: 15%;
    left: 40%;
    top: 20%;
  }

  select {
    background: ${({ theme }) => (theme.mode === 'dark' ? '#2b3945' : '#fff')};
    border: none;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    padding: 0 0.5rem;
    font-weight: 300;
    outline: none;
    color: inherit;
    cursor: pointer;
  }
`;

const RegionFilter = () => {
  return (
    <StyledFilter>
      <select
        name='Region'
        id='regionFilter'
      >
        <option value=''>Filter by Region</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value='Africa'>Africa</option>
        <option value='Oceania'>Oceania</option>
        <option value='Americas'>America</option>
      </select>
    </StyledFilter>
  );
};

export default RegionFilter;
