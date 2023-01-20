import React, { Suspense } from 'react';
import { Await, defer, json, useLoaderData } from 'react-router-dom';
import Card from './Card';

export const BASE_URL = 'https://restcountries.com/v2/all';

const Cards = () => {
  const data = useLoaderData();
  return (
    <Suspense fallback={<p>loading...</p>}>
      <Await resolve={data.events}>{data => <Card data={data} />}</Await>
    </Suspense>
  );
};

export default Cards;

const loadCards = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw json({ message: 'Could not fetch countries' }, { status: 500 });
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
