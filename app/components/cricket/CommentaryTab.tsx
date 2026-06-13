import { commentary } from "~/data/cricket-data";

const ballTypeColors: Record<string, string> = {
  dot: "#374151",
  single: "#9CA3AF",
  double: "#60A5FA",
  triple: "#3B82F6",
  four: "#F59E0B",
  six: "#10B981",
  wicket: "#EF4444",
  wide: "#A78BFA",
  noball: "#EAB308",
};

const ballTypeLabels: Record<string, string> = {
  dot: "•",
  single: "1",
  double: "2",
  triple: "3",
  four: "4",
  six: "6",
  wicket: "W",
  wide: "WD",
  noball: "NB",
};

const ballTypeGlow: Record<string, string> = {
  six: "0 0 20px rgba(16,185,129,0.5)",
  wicket: "0 0 20px rgba(239,68,68,0.5)",
  four: "0 0 12px rgba(245,158,11,0.4)",
};

export function CommentaryTab() {
  return (
    <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
      <div className="px-4 py-3 border-b border-[#1F2F44] flex items-center gap-2">
        <span className="text-white font-bold font-score">Ball-by-Ball Commentary</span>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-bold"
          style={{ background: "rgba(239,68,68,0.2)", color: "#EF4444" }}
        >
          LIVE
        </span>
      </div>

      <div className="divide-y divide-[#1F2F44]">
        {commentary.map((ball, index) => {
          const color = ballTypeColors[ball.type] || "#9CA3AF";
          const label = ballTypeLabels[ball.type] || "•";
          const glow = ballTypeGlow[ball.type] || "none";

          return (
            <div
              key={ball.id}
              className="flex gap-3 px-4 py-3 hover:bg-white/5 transition-colors"
              style={{
                borderLeft: index === 0 ? "3px solid #EF4444" : "3px solid transparent",
                background: ball.type === "six" ? "rgba(16,185,129,0.03)" : ball.type === "wicket" ? "rgba(239,68,68,0.04)" : "transparent",
              }}
            >
              {/* Over + ball indicator */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1 pt-0.5">
                <span
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                  style={{ background: "#1F2F44", color: "#9CA3AF" }}
                >
                  {ball.overBall}
                </span>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black border-2"
                  style={{
                    background: `${color}22`,
                    borderColor: `${color}66`,
                    color,
                    boxShadow: glow,
                  }}
                >
                  {label}
                </div>
              </div>

              {/* Commentary text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#9CA3AF] text-xs">{ball.bowler} to {ball.batter}</span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: ball.type === "wicket" ? "#FCA5A5" : ball.type === "six" ? "#6EE7B7" : ball.type === "four" ? "#FCD34D" : "#D1D5DB",
                  }}
                >
                  {ball.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
