import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

const Home = ({ setTheme }) => {
  return (
    <>
      <Header setTheme={setTheme} />
      <Nav />
    </>
  );
};

export default Home;
