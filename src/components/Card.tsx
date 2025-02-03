type Props = {
  onCardClick: (emoji: string) => void;
  emoji: string;
};

export default function Card({ emoji, onCardClick }: Props) {
  return (
    <li className="group flex items-center justify-center rounded border shadow active:scale-95 group-active:transition-transform">
      <button
        className="flex h-full w-full items-center justify-center text-justify text-7xl leading-none"
        onClick={() => onCardClick(emoji)}
      >
        {emoji}
      </button>
    </li>
  );
}
