type Props = { score: number; bestScore: number };
export default function Score({ bestScore = 0, score = 0 }: Props) {
  return (
    <div className="font-mono text-xl">
      <p className="font-medium">Score: {score}</p>
      <p className="font-medium">Best score: {bestScore}</p>
    </div>
  );
}
