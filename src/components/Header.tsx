import Score from './Score';

type Props = {};
export default function Header({}: Props) {
  return (
    <header className="flex justify-between p-4 text-white">
      <h1 className="text-4xl font-bold drop-shadow-xl">Remember.me</h1>
      <Score />
    </header>
  );
}
