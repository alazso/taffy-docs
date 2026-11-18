import { appName } from '@/lib/shared';

/** The Taffy mark: a wrapped sweet in the brand gradient. */
export function TaffyMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="taffy-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff5fa2" />
          <stop offset="1" stopColor="#2ec4b6" />
        </linearGradient>
      </defs>
      <path d="M2 9l7 4v6l-7 4z M30 9l-7 4v6l7 4z" fill="url(#taffy-mark)" opacity="0.75" />
      <rect x="8" y="9" width="16" height="14" rx="7" fill="url(#taffy-mark)" />
      <path
        d="M12 12l3 8 M17 12l3 8"
        stroke="white"
        strokeOpacity="0.55"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** The nav title: the mark and the name. */
export function SiteTitle() {
  return (
    <span className="inline-flex items-center gap-2">
      <TaffyMark />
      <span className="text-gradient text-lg font-bold tracking-tight">{appName}</span>
    </span>
  );
}
