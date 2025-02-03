import GameBoard from './GameBoard';
import Header from './Header';

type Props = {};
export default function App({}: Props) {
  return (
    <>
      <Header />
      <GameBoard />
    </>
  );
}
