import type { Fixture } from "~/lib/cricket-data";

interface FixtureCardProps {
  fixture: Fixture;
  isActive?: boolean;
}

const STATUS_CONFIG = {
  LIVE: { label: "LIVE", bg: "#E8003D", glow: "0 0 15px rgba(232,0,61,0.5)", dot: true },
  UPCOMING: { label: "UPCOMING", bg: "#2563EB", glow: "none", dot: false },
  COMPLETED: { label: "FT", bg: "#374151", glow: "none", dot: false },
  STUMPS: { label: "STUMPS", bg: "#7C3AED", glow: "none", dot: false },
};

const FORMAT_COLORS: Record<string, string> = {
  ODI: "#F59E0B",
  T20I: "#10B981",
  TEST: "#6366F1",
  IPL: "#EC4899",
  T20: "#10B981",
};

export function FixtureCard({ fixture, isActive }: FixtureCardProps) {
  const statusConfig = STATUS_CONFIG[fixture.status];

  return (
    <div
      className="rounded-xl p-4 transition-all cursor-pointer hover:scale-[1.01]"
      style={{
        background: isActive ? "rgba(232,0,61,0.08)" : "#0F1629",
        border: isActive ? "1px solid rgba(232,0,61,0.4)" : "1px solid #1E2A45",
        boxShadow: isActive ? statusConfig.glow : "none",
      }}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className="text-xs px-1.5 py-0.5 rounded font-bold"
            style={{ background: FORMAT_COLORS[fixture.format] + "22", color: FORMAT_COLORS[fixture.format] }}
          >
            {fixture.format}
          </span>
          <span className="text-gray-600 text-xs truncate max-w-[140px]">{fixture.series}</span>
        </div>

        <div
          className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-black"
          style={{
            background: statusConfig.bg + "22",
            color: statusConfig.bg,
            boxShadow: statusConfig.glow,
          }}
        >
          {statusConfig.dot && (
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: statusConfig.bg, animation: "pulse 1.2s infinite" }}
            />
          )}
          {statusConfig.label}
        </div>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-2xl">{fixture.team1.flag}</span>
          <div>
            <div className="text-white font-bold">{fixture.team1.shortName}</div>
            {fixture.score1 && <div className="text-gray-400 text-xs font-semibold">{fixture.score1}</div>}
          </div>
        </div>

        <div className="flex flex-col items-center px-2">
          <div className="text-gray-600 text-xs font-bold">VS</div>
          {fixture.status === "UPCOMING" && (
            <div className="text-gray-500 text-xs mt-1">{fixture.time}</div>
          )}
        </div>

        <div className="flex items-center gap-2 flex-1 justify-end">
          <div className="text-right">
            <div className="text-white font-bold">{fixture.team2.shortName}</div>
            {fixture.score2 && <div className="text-gray-400 text-xs font-semibold">{fixture.score2}</div>}
          </div>
          <span className="text-2xl">{fixture.team2.flag}</span>
        </div>
      </div>

      {/* Result / Info */}
      {fixture.result && (
        <div
          className="mt-2 pt-2 text-xs font-semibold"
          style={{ borderTop: "1px solid #1E2A45", color: "#1DB954" }}
        >
          {fixture.result}
        </div>
      )}

      {fixture.status === "STUMPS" && fixture.score2 && (
        <div
          className="mt-2 pt-2 text-xs font-semibold"
          style={{ borderTop: "1px solid #1E2A45", color: "#7C3AED" }}
        >
          {fixture.score2}
        </div>
      )}

      <div
        className="mt-2 pt-2 text-gray-600 text-xs flex items-center gap-1"
        style={{ borderTop: "1px solid #1E2A45" }}
      >
        <span>📍</span>
        <span className="truncate">{fixture.venue}</span>
      </div>

      {fixture.status === "UPCOMING" && (
        <div className="text-gray-500 text-xs mt-1">
          {fixture.date}
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
