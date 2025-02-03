export default function Card({ emoji }: { emoji: string }) {
  return (
    <li className="group flex items-center justify-center rounded border shadow active:scale-95 group-active:transition-transform">
      <button
        className="flex h-full w-full items-center justify-center text-justify text-7xl leading-none"
        {emoji}
      </button>
    </li>
  );
}
