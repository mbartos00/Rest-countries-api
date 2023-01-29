import React, { Suspense, useEffect, useState } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import Card from './Card';
import Loader from './Loader';

export const BASE_URL = 'https://restcountries.com';

const Cards = ({ region, searchedCountry }) => {
  const [filteredData, setFilteredData] = useState();
  const [searchedData, setSearchedData] = useState();

  const data = useLoaderData();
  const filterData = async () => {
    const countries = await data.events;
    const filtered = countries.filter(item => item.region === region);
    setFilteredData(filtered);
  };

  const searchCountry = async () => {
    if (searchedCountry === '' || searchedCountry) {
      setSearchedData('');
    }
    const countries = await data.events;
    const searched = countries.filter(item =>
      item.name.toLowerCase().includes(searchedCountry)
    );
    setSearchedData(searched);
  };

  useEffect(() => {
    filterData();
    searchCountry();
  }, [region, searchedCountry]);

  return (
    <Suspense fallback={<Loader />}>
      {region ? (
        <Await resolve={filteredData}>{data => <Card data={data} />}</Await>
      ) : searchedData ? (
        <Await resolve={searchedData}>{data => <Card data={data} />}</Await>
      ) : (
        <Await resolve={data.events}>{data => <Card data={data} />}</Await>
      )}
    </Suspense>
  );
};

export default Cards;

const loadCards = async () => {
  const response = await fetch(`${BASE_URL}/v2/all`);

  if (!response.ok) {
    return json({ message: 'Could not fetch countries' }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
};
export const cardsLoader = () => {
  return defer({
    events: loadCards(),
  });
};
