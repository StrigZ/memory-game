'use client';

import { Loader } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Emoji } from '~/types';

import Card from './Card';

type Props = { isDataLoaded: boolean };
export default function GameBoard({ isDataLoaded }: Props) {
  const [activeEmojis, setActiveEmojis] = useState<string[]>([]);

  useEffect(() => {
    if (!isDataLoaded) {
      return;
    }
    const cachedData = localStorage.getItem('data');
    if (cachedData) {
      resetEmojis();
    }
  }, [isDataLoaded]);

  const resetEmojis = () => {
    const cachedData = localStorage.getItem('data');
    if (cachedData) {
      const data: Emoji[] = JSON.parse(cachedData);

      const newActiveEmojis: string[] = [];
      while (newActiveEmojis.length < 12) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomEmoji = data[randomIndex];
        if (randomEmoji && !newActiveEmojis.includes(randomEmoji.character)) {
          newActiveEmojis.push(randomEmoji.character);
        }
      }

      setActiveEmojis(newActiveEmojis);
    }
  };

  return (
    <main className="flex flex-1 items-center justify-center p-4">
      <ul className="grid w-full auto-rows-[250px] grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        {activeEmojis.length === 0 ? (
          <Loader
            className="col-span-full w-full animate-spin text-white"
            size={72}
          />
        ) : (
          activeEmojis.map((emoji) => <Card key={emoji} emoji={emoji} />)
        )}
      </ul>
    </main>
  );
}
