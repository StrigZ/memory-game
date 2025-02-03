import Score from './Score';

type Props = { score: number; bestScore: number };
export default function Header(props: Props) {
  return (
    <header className="flex flex-col justify-between gap-4 p-4 text-white sm:flex-row">
      <h1 className="text-4xl font-bold drop-shadow-xl">Remember.me</h1>
      <Score {...props} />
    </header>
  );
}
