import Score from './Score';

type Props = {};
export default function Header({}: Props) {
  return (
    <header className="flex flex-col justify-between gap-4 p-4 text-white sm:flex-row">
      <h1 className="text-4xl font-bold drop-shadow-xl">Remember.me</h1>
      <Score />
    </header>
  );
}
