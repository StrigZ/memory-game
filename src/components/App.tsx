'use client';

import { useEffect } from 'react';
import { env } from '~/env';

import GameBoard from './GameBoard';
import Header from './Header';

const API_URL = `https://emoji-api.com/emojis?access_key=${env.NEXT_PUBLIC_API_KEY}`;

type Props = {};
export default function App({}: Props) {
  useEffect(() => {
    const cachedData = localStorage.getItem('data');
    if (cachedData) {
      // get random 12 emojis
      return;
    } else {
      fetch(API_URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Something went wrong with API call');
          }
          return res.json();
        })
        .then((data) => {
          localStorage.setItem('data', JSON.stringify(data));
        });
    }
  }, []);

  return (
    <>
      <Header />
      <GameBoard />
    </>
  );
}
