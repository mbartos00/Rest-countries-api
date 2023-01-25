import React, { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import { BASE_URL } from '../components/Cards';
import CountryDetailsItem from '../components/CountryDetailsItem';
import CountryDetailsNav from '../components/CountryDetailsNav';
import Header from '../components/Header';
import Loader from '../components/Loader';

const CountryDetails = ({ setTheme }) => {
  const data = useLoaderData();
  return (
    <>
      <Header setTheme={setTheme} />
      <CountryDetailsNav />
      <Suspense fallback={<Loader />}>
        <Await resolve={data.events}>
          {data => <CountryDetailsItem data={data} />}
        </Await>
      </Suspense>
    </>
  );
};

export default CountryDetails;

const loadCountryInfo = async id => {
  const response = await fetch(`${BASE_URL}/v2/alpha/${id}`);

  if (!response.ok) {
    return json(
      { message: 'Could not fetch country information' },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data;
  }
};

export const countryInfoLoader = ({ request, params }) => {
  return defer({
    events: loadCountryInfo(params.id),
  });
};
