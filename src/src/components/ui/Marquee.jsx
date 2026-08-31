// Infinite horizontal marquee. Duplicates children so the loop is seamless.
export default function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="group relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4 group-hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-border bg-surface/70 px-5 py-2.5 text-sm font-medium text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
