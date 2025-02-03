import CardList from './CardList';

type Props = {};
export default function GameBoard({}: Props) {
  return (
    <main className="px-4 flex justify-center items-center flex-1">
      <CardList />
    </main>
  );
}
