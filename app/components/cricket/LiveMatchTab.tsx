import {
  battingLineup,
  bowlingFigures,
  liveMatch,
  commentary,
  partnerships,
  fallOfWickets,
  currentPartnership,
} from "~/data/cricket-data";
import { Users, Zap, TrendingDown } from "lucide-react";

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

export function LiveMatchTab() {
  const activeBatters = battingLineup.filter((b) => b.isBatting);
  const recentBalls = [...commentary].slice(0, 6).reverse();

  return (
    <div className="space-y-4">
      {/* Recent balls this over */}
      <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
        <div className="px-4 py-3 border-b border-[#1F2F44] flex items-center justify-between">
          <h3 className="text-white font-bold font-score">This Over</h3>
          <span className="text-[#9CA3AF] text-xs font-score">Over 32</span>
        </div>
        <div className="px-4 py-3 flex items-center gap-3 flex-wrap">
          {recentBalls.map((ball) => {
            const color = ballTypeColors[ball.type] || "#9CA3AF";
            const label = ballTypeLabels[ball.type] || "•";
            return (
              <div key={ball.id} className="flex flex-col items-center gap-1" title={ball.description}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border-2"
                  style={{ background: `${color}22`, borderColor: `${color}66`, color }}
                >
                  {label}
                </div>
                <span className="text-[#9CA3AF] text-[10px]">{ball.overBall.split(".")[1]}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current batters */}
      <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
        <div className="px-4 py-3 border-b border-[#1F2F44] flex items-center gap-2">
          <Users size={14} className="text-emerald-400" />
          <h3 className="text-white font-bold font-score">Batting</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" aria-label="Current batting">
            <thead>
              <tr className="text-[#9CA3AF] text-xs uppercase tracking-wide border-b border-[#1F2F44]">
                <th className="text-left px-4 py-2">Batter</th>
                <th className="text-right px-3 py-2">R</th>
                <th className="text-right px-3 py-2">B</th>
                <th className="text-right px-3 py-2">4s</th>
                <th className="text-right px-3 py-2">6s</th>
                <th className="text-right px-4 py-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {activeBatters.map((batter) => (
                <tr
                  key={batter.name}
                  className="border-b border-[#1F2F44] hover:bg-white/5 transition-colors"
                  style={{ borderLeft: "3px solid #10B981" }}
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                        style={{ background: "rgba(16,185,129,0.2)", color: "#10B981" }}
                      >
                        {batter.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div>
                        <span className="text-white font-semibold">{batter.name}</span>
                        {batter.isCaptain && <span className="text-[#9CA3AF] text-xs ml-1">(c)</span>}
                        {batter.isKeeper && <span className="text-[#9CA3AF] text-xs ml-1">(wk)</span>}
                      </div>
                    </div>
                  </td>
                  <td className="text-right px-3 py-3">
                    <span className={`font-black text-base ${batter.runs >= 50 ? "text-amber-400" : "text-white"}`}>
                      {batter.runs}
                    </span>
                  </td>
                  <td className="text-right px-3 py-3 text-[#9CA3AF]">{batter.balls}</td>
                  <td className="text-right px-3 py-3 text-[#9CA3AF]">{batter.fours}</td>
                  <td className="text-right px-3 py-3 text-[#9CA3AF]">{batter.sixes}</td>
                  <td className="text-right px-4 py-3">
                    <span
                      className="text-xs font-bold"
                      style={{ color: batter.strikeRate >= 100 ? "#10B981" : batter.strikeRate >= 70 ? "#F59E0B" : "#9CA3AF" }}
                    >
                      {batter.strikeRate.toFixed(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Current bowler */}
      {bowlingFigures.filter(b => b.isCurrentBowler).map((bowler) => (
        <div
          key={bowler.name}
          className="rounded-xl border border-[#1F2F44] overflow-hidden"
          style={{ background: "#111827" }}
        >
          <div className="px-4 py-3 border-b border-[#1F2F44] flex items-center gap-2">
            <Zap size={14} className="text-red-400" />
            <h3 className="text-white font-bold font-score">Current Bowler</h3>
          </div>
          <div className="px-4 py-3 flex items-center gap-4 flex-wrap">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
              style={{ background: "rgba(239,68,68,0.2)", color: "#EF4444" }}
            >
              {bowler.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="flex-1">
              <div className="text-white font-bold">{bowler.name}</div>
              {bowler.isCaptain && <div className="text-[#9CA3AF] text-xs">(c)</div>}
            </div>
            <div className="flex gap-6 text-center">
              <div><div className="text-white font-black text-lg">{bowler.overs}</div><div className="text-[#9CA3AF] text-xs">Ov</div></div>
              <div><div className="text-white font-black text-lg">{bowler.maidens}</div><div className="text-[#9CA3AF] text-xs">M</div></div>
              <div><div className="text-white font-black text-lg">{bowler.runs}</div><div className="text-[#9CA3AF] text-xs">R</div></div>
              <div>
                <div className="font-black text-lg" style={{ color: bowler.wickets > 0 ? "#EF4444" : "#9CA3AF" }}>{bowler.wickets}</div>
                <div className="text-[#9CA3AF] text-xs">W</div>
              </div>
              <div>
                <div className="text-xs font-bold" style={{ color: bowler.economy <= 5 ? "#10B981" : bowler.economy <= 7 ? "#F59E0B" : "#EF4444" }}>
                  {bowler.economy.toFixed(2)}
                </div>
                <div className="text-[#9CA3AF] text-xs">ECO</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Partnership and FOW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Current partnership */}
        <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
          <div className="px-4 py-3 border-b border-[#1F2F44]">
            <h3 className="text-white font-bold font-score text-sm">Partnership</h3>
          </div>
          <div className="px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9CA3AF] text-xs">{currentPartnership.batter1}</span>
              <span
                className="font-score font-black text-2xl"
                style={{ color: "#F59E0B" }}
              >
                {currentPartnership.runs}
              </span>
              <span className="text-[#9CA3AF] text-xs">{currentPartnership.batter2}</span>
            </div>
            <div className="text-center text-[#9CA3AF] text-xs">{currentPartnership.balls} balls</div>
          </div>
        </div>

        {/* Fall of wickets */}
        <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
          <div className="px-4 py-3 border-b border-[#1F2F44] flex items-center gap-2">
            <TrendingDown size={14} className="text-red-400" />
            <h3 className="text-white font-bold font-score text-sm">Fall of Wickets</h3>
          </div>
          <div className="px-4 py-3 space-y-2">
            {fallOfWickets.map((fow) => (
              <div key={fow.wicket} className="flex items-center gap-2">
                <span
                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{ background: "#EF444422", color: "#EF4444" }}
                >
                  {fow.wicket}
                </span>
                <span className="text-[#9CA3AF] text-xs flex-1">{fow.batter}</span>
                <span className="text-white font-bold text-xs">{fow.score}</span>
                <span className="text-[#9CA3AF] text-xs">({fow.over})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
