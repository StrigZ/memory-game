import { X } from 'lucide-react';

type Props = {
  isGameStatusDialogOpen: boolean;
  handleDialogClose: () => void;
  hasWon: boolean;
};
export default function GameOverDialog({
  handleDialogClose,
  isGameStatusDialogOpen,
  hasWon,
}: Props) {
  return (
    <dialog
      onClose={handleDialogClose}
      open={isGameStatusDialogOpen}
      className="absolute h-screen w-screen border-none bg-transparent"
    >
      <div
        className="flex h-full items-center justify-center bg-black/25"
        onClick={() => handleDialogClose()}
      >
        <div
          className="relative rounded bg-white p-10 text-xl shadow"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-2 top-2"
            onClick={() => handleDialogClose()}
          >
            <X size={24} />
          </button>
          {hasWon ? 'NO WAY YOU WON' : 'YOU LOST LeMAO'}
        </div>
      </div>
    </dialog>
  );
}
