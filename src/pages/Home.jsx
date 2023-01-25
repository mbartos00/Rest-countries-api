import React, { useState } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import Nav from '../components/Nav';
import useDebounce from '../hooks/useDebounce';

const Home = ({ setTheme }) => {
  const [region, setRegion] = useState();
  const [searchedCountry, setSearchedCountry] = useState();
  const debouncedCountry = useDebounce(searchedCountry);
  const handleRegionChange = region => {
    setRegion(region);
  };

  const handleSearchCountry = inputValue => {
    setSearchedCountry(inputValue);
  };

  return (
    <>
      <Header setTheme={setTheme} />
      <Nav
        onRegionChange={handleRegionChange}
        onSearchCountry={handleSearchCountry}
      />
      <Cards
        region={region}
        searchedCountry={debouncedCountry}
      />
    </>
  );
};

export default Home;
