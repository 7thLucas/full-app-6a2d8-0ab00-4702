import type { MatchStatus } from "~/data/cricket-data";

interface LiveBadgeProps {
  status: MatchStatus;
  size?: "sm" | "md" | "lg";
}

const STATUS_CONFIG = {
  LIVE: { label: "LIVE", bg: "#EF4444", glow: "0 0 12px rgba(239,68,68,0.6)", dot: true },
  UPCOMING: { label: "UPCOMING", bg: "#3B82F6", glow: "none", dot: false },
  COMPLETED: { label: "FINAL", bg: "#374151", glow: "none", dot: false },
  STUMPS: { label: "STUMPS", bg: "#7C3AED", glow: "none", dot: false },
};

const SIZE_CLASSES = {
  sm: "text-[10px] px-1.5 py-0.5 gap-1",
  md: "text-xs px-2 py-1 gap-1.5",
  lg: "text-sm px-3 py-1.5 gap-2",
};

export function LiveBadge({ status, size = "md" }: LiveBadgeProps) {
  const config = STATUS_CONFIG[status];
  return (
    <span
      className={`inline-flex items-center font-black rounded-full tracking-widest ${SIZE_CLASSES[size]}`}
      style={{
        background: config.bg + "22",
        color: config.bg,
        border: `1px solid ${config.bg}44`,
        boxShadow: config.glow,
      }}
    >
      {config.dot && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-live-pulse flex-shrink-0"
          style={{ background: config.bg }}
        />
      )}
      {config.label}
    </span>
  );
}
