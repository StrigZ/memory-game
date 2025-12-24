"use client";

import { Loader } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import type { Emoji } from "~/types";

import Card from "./Card";
import GameOverDialog from "./GameOverDialog";

type Props = {
	isDataLoaded: boolean;
	bestScore: number;
	score: number;
	onScoreReset: () => void;
	onScoreIncrease: () => void;
	onBestScoreSet: (score: number) => void;
};
export default function GameBoard({
	isDataLoaded,
	onScoreIncrease,
	onBestScoreSet,
	bestScore,
	score,
	onScoreReset,
}: Props) {
	const [activeEmojis, setActiveEmojis] = useState<string[]>([]);
	const [clickedEmojis, setClickedEmojis] = useState<string[]>([]);
	const [isGameStatusDialogOpen, setIsGameStatusDialogOpen] = useState(false);

	const resetEmojis = useCallback(() => {
		const cachedData = localStorage.getItem("data");
		if (cachedData) {
			const data = JSON.parse(cachedData) as Emoji[];

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
	}, []);

	useEffect(() => {
		if (!isDataLoaded) {
			return;
		}
		const cachedData = localStorage.getItem("data");
		if (cachedData) {
			resetEmojis();
		}
	}, [isDataLoaded, resetEmojis]);

	const shuffleActiveEmojis = () => {
		setActiveEmojis((prev) => {
			const shuffledArray = [...prev];

			// Fisher-Yates (Knuth) shuffle
			for (let i = shuffledArray.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffledArray[i], shuffledArray[j]] = [
					// biome-ignore lint/style/noNonNullAssertion: <false positive>
					shuffledArray[j]!,
					// biome-ignore lint/style/noNonNullAssertion: <false positive>
					shuffledArray[i]!,
				];
			}

			return shuffledArray;
		});
	};

	const handleCardClick = (emoji: string) => {
		if (clickedEmojis.includes(emoji)) {
			setIsGameStatusDialogOpen(true);
			resetScore();
		} else {
			onScoreIncrease();
			setClickedEmojis((prev) => {
				const newClickedEmojis = [...prev, emoji];
				if (newClickedEmojis.length === 12) {
					setIsGameStatusDialogOpen(true);
				}

				shuffleActiveEmojis();
				return newClickedEmojis;
			});
		}
	};

	const handleDialogClose = () => {
		resetGame();
		setIsGameStatusDialogOpen(false);
	};

	const resetGame = () => {
		resetEmojis();
		setClickedEmojis([]);
	};

	const resetScore = () => {
		if (score > bestScore) {
			onBestScoreSet(score);
		}
		onScoreReset();
	};

	return (
		<>
			<GameOverDialog
				handleDialogClose={handleDialogClose}
				hasWon={clickedEmojis.length === 12}
				isGameStatusDialogOpen={isGameStatusDialogOpen}
			/>
			<main className="flex flex-1 items-center justify-center p-4">
				<ul className="grid w-full auto-rows-[250px] grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
					{activeEmojis.length === 0 ? (
						<Loader
							className="col-span-full mx-auto animate-spin text-white"
							size={72}
						/>
					) : (
						activeEmojis.map((emoji) => (
							<Card key={emoji} emoji={emoji} onCardClick={handleCardClick} />
						))
					)}
				</ul>
			</main>
		</>
	);
}
