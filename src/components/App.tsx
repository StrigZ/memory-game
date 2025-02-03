'use client';

import { useEffect, useState } from 'react';

import { env } from '~/env';

import GameBoard from './GameBoard';
import Header from './Header';

const API_URL =
  `https://emoji-api.com/emojis?access_key=${env.NEXT_PUBLIC_API_KEY}` || '';

export default function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const cachedData = localStorage.getItem('data');
    if (!cachedData) {
      fetch(API_URL)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Something went wrong with API call');
          }
          return res.json();
        })
        .then((data) => {
          localStorage.setItem('data', JSON.stringify(data));
          setIsDataLoaded(true);
        })
        .catch(() => {
          console.error('Something went wrong with API call');
        });
    } else {
      setIsDataLoaded(true);
    }
  }, []);

  return (
    <>
      <Header bestScore={bestScore} score={score} />
      <GameBoard
        onScoreIncrease={() => setScore((prev) => ++prev)}
        onScoreReset={() => setScore(0)}
        onBestScoreSet={(score) => setBestScore(score)}
        bestScore={bestScore}
        score={score}
        isDataLoaded={isDataLoaded}
      />
    </>
  );
}
