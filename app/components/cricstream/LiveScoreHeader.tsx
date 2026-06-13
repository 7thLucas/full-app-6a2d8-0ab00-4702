import { useEffect, useState } from "react";
import type { Match } from "~/lib/cricket-data";

interface LiveScoreHeaderProps {
  match: Match;
}

const BALL_COLORS: Record<string, string> = {
  "6": "bg-yellow-400 text-black",
  "4": "bg-green-400 text-black",
  "W": "bg-red-500 text-white",
  "•": "bg-gray-600 text-white",
  "1": "bg-blue-500 text-white",
  "2": "bg-blue-500 text-white",
  "3": "bg-blue-500 text-white",
};

export function LiveScoreHeader({ match }: LiveScoreHeaderProps) {
  const [pulse, setPulse] = useState(true);
  const [scoreFlash, setScoreFlash] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setScoreFlash(true);
      setTimeout(() => setScoreFlash(false), 400);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const ballColor = BALL_COLORS[match.lastBall] || "bg-blue-500 text-white";

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A0E1A 0%, #0F1629 40%, #0d1f3c 100%)",
        borderBottom: "1px solid #1E2A45",
      }}
    >
      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 py-4">
        {/* Top row: Series + Format + LIVE badge + Weather */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span
              className="px-2 py-0.5 rounded text-xs font-bold tracking-widest uppercase"
              style={{ background: "#E8003D", color: "white" }}
            >
              {match.format}
            </span>
            <span className="text-gray-400 text-xs truncate max-w-xs hidden sm:block">{match.series}</span>
          </div>

          <div className="flex items-center gap-3">
            {match.status === "LIVE" && (
              <div className="flex items-center gap-1.5">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    background: "#E8003D",
                    boxShadow: "0 0 10px rgba(232, 0, 61, 0.8)",
                    animation: "pulse 1.2s infinite",
                  }}
                />
                <span
                  className="text-xs font-black tracking-widest"
                  style={{ color: "#E8003D" }}
                >
                  LIVE
                </span>
              </div>
            )}
            <span className="text-gray-500 text-xs">{match.venue}, {match.city}</span>
          </div>
        </div>

        {/* Main Score Block */}
        <div className="flex items-center justify-between gap-4">
          {/* Team 1 */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${match.team1.color}33, ${match.team1.color}11)`,
                border: `2px solid ${match.team1.color}66`,
              }}
            >
              {match.team1.flag}
            </div>
            <div className="min-w-0">
              <div className="text-white font-black text-xl sm:text-2xl tracking-tight">{match.team1.shortName}</div>
              <div className="text-gray-400 text-xs hidden sm:block">{match.team1.name}</div>
              <div
                className="text-3xl sm:text-4xl font-black tracking-tighter leading-none transition-colors duration-300"
                style={{ color: scoreFlash && match.currentInnings === 2 ? "#F5A623" : match.currentInnings === 1 ? "#FFFFFF" : "#A0AEC0" }}
              >
                {match.currentInnings === 1 ? match.currentScore : match.innings1Score}
              </div>
              <div className="text-gray-500 text-xs">
                {match.currentInnings === 1 ? `(${match.currentOvers} Ov)` : `(${match.innings1Overs} Ov)`}
              </div>
            </div>
          </div>

          {/* Center Panel */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            {match.target && (
              <div
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "rgba(245, 166, 35, 0.15)", color: "#F5A623", border: "1px solid rgba(245, 166, 35, 0.3)" }}
              >
                Target: {match.target}
              </div>
            )}

            <div className="text-gray-500 text-xs font-bold tracking-widest">VS</div>

            {/* Last ball chip */}
            {match.status === "LIVE" && (
              <div className="flex flex-col items-center gap-1">
                <div className="text-gray-500 text-xs">Last Ball</div>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm ${ballColor}`}
                  style={{ boxShadow: match.lastBall === "6" ? "0 0 15px rgba(245,166,35,0.6)" : match.lastBall === "W" ? "0 0 15px rgba(255,59,48,0.6)" : "none" }}
                >
                  {match.lastBall}
                </div>
              </div>
            )}
          </div>

          {/* Team 2 */}
          <div className="flex items-center gap-3 min-w-0 flex-1 justify-end">
            <div className="min-w-0 text-right">
              <div className="text-white font-black text-xl sm:text-2xl tracking-tight">{match.team2.shortName}</div>
              <div className="text-gray-400 text-xs hidden sm:block">{match.team2.name}</div>
              <div
                className="text-3xl sm:text-4xl font-black tracking-tighter leading-none transition-colors duration-300"
                style={{ color: scoreFlash && match.currentInnings === 1 ? "#F5A623" : match.currentInnings === 2 ? "#FFFFFF" : "#A0AEC0" }}
              >
                {match.currentInnings === 2 ? match.currentScore : (match.innings2Score || "—")}
              </div>
              <div className="text-gray-500 text-xs">
                {match.currentInnings === 2 ? `(${match.currentOvers} Ov)` : (match.innings2Overs ? `(${match.innings2Overs} Ov)` : "")}
              </div>
            </div>
            <div
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl flex-shrink-0"
              style={{
                background: `linear-gradient(135deg, ${match.team2.color}33, ${match.team2.color}11)`,
                border: `2px solid ${match.team2.color}66`,
              }}
            >
              {match.team2.flag}
            </div>
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: "1px solid #1E2A45" }}>
          <div className="flex gap-4 text-xs">
            <div>
              <span className="text-gray-500 uppercase tracking-wide">CRR </span>
              <span className="text-green-400 font-bold">{match.crr.toFixed(2)}</span>
            </div>
            {match.rrr && (
              <div>
                <span className="text-gray-500 uppercase tracking-wide">RRR </span>
                <span className="text-yellow-400 font-bold">{match.rrr.toFixed(2)}</span>
              </div>
            )}
            {match.toWin && (
              <div className="hidden sm:block">
                <span className="text-gray-400">{match.toWin}</span>
              </div>
            )}
          </div>

          {match.toss && (
            <div className="text-gray-500 text-xs hidden md:block">{match.toss}</div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
      `}</style>
    </div>
  );
}
