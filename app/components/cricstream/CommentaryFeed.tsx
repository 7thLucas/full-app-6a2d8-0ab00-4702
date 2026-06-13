import type { CommentaryBall } from "~/lib/cricket-data";

interface CommentaryFeedProps {
  balls: CommentaryBall[];
}

const BALL_TYPE_CONFIG = {
  SIX: { label: "6", bg: "bg-yellow-400", text: "text-black", glow: "0 0 20px rgba(245,166,35,0.7)", cardBg: "rgba(245, 166, 35, 0.06)" },
  FOUR: { label: "4", bg: "bg-green-500", text: "text-white", glow: "0 0 15px rgba(29,185,84,0.5)", cardBg: "rgba(29, 185, 84, 0.04)" },
  WICKET: { label: "W", bg: "bg-red-500", text: "text-white", glow: "0 0 20px rgba(255,59,48,0.7)", cardBg: "rgba(255, 59, 48, 0.08)" },
  DOT: { label: "•", bg: "bg-gray-700", text: "text-gray-300", glow: "none", cardBg: "transparent" },
  RUNS: { label: "", bg: "bg-blue-600", text: "text-white", glow: "none", cardBg: "rgba(0, 48, 135, 0.08)" },
  WIDE: { label: "Wd", bg: "bg-orange-500", text: "text-white", glow: "none", cardBg: "rgba(249, 115, 22, 0.05)" },
  NO_BALL: { label: "NB", bg: "bg-orange-600", text: "text-white", glow: "none", cardBg: "rgba(249, 115, 22, 0.05)" },
  BYE: { label: "B", bg: "bg-gray-600", text: "text-white", glow: "none", cardBg: "transparent" },
};

export function CommentaryFeed({ balls }: CommentaryFeedProps) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
    >
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ borderBottom: "1px solid #1E2A45" }}
      >
        <span className="text-white font-bold text-sm">Ball-by-Ball Commentary</span>
        <span
          className="text-xs px-2 py-0.5 rounded-full font-bold"
          style={{ background: "rgba(232,0,61,0.2)", color: "#E8003D" }}
        >
          LIVE
        </span>
      </div>

      <div className="divide-y" style={{ "--tw-divide-opacity": 1 } as any}>
        {balls.map((ball, index) => {
          const config = BALL_TYPE_CONFIG[ball.type];
          const isFirst = index === 0;
          return (
            <div
              key={ball.id}
              className="flex gap-3 px-4 py-3 transition-all"
              style={{
                background: config.cardBg,
                animation: isFirst ? "slideIn 0.4s ease-out" : "none",
                borderBottom: "1px solid rgba(30,42,69,0.5)",
              }}
            >
              {/* Over chip */}
              <div className="flex-shrink-0 flex flex-col items-center gap-1">
                <div
                  className="text-xs font-bold px-1.5 py-0.5 rounded"
                  style={{ background: "rgba(30,42,69,0.8)", color: "#6B7280" }}
                >
                  {ball.over}
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${config.bg} ${config.text}`}
                  style={{ boxShadow: config.glow }}
                >
                  {ball.type === "RUNS" ? ball.runs : config.label}
                </div>
              </div>

              {/* Commentary text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-gray-400 text-xs">{ball.bowler} to {ball.batsman}</span>
                  <span className="text-gray-600 text-xs">{ball.timestamp}</span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: ball.type === "WICKET" ? "#FCA5A5" : ball.type === "SIX" ? "#FCD34D" : ball.type === "FOUR" ? "#86EFAC" : "#D1D5DB" }}
                >
                  {ball.commentary}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
