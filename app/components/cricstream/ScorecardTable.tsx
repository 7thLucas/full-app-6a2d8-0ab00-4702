import type { Batsman, Bowler } from "~/lib/cricket-data";

interface ScorecardTableProps {
  batsmen: Batsman[];
  bowlers: Bowler[];
  teamName: string;
  score: string;
  overs: string;
  inningsLabel: string;
}

export function ScorecardTable({ batsmen, bowlers, teamName, score, overs, inningsLabel }: ScorecardTableProps) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ background: "rgba(232, 0, 61, 0.1)", borderBottom: "1px solid #1E2A45" }}
      >
        <div>
          <span className="text-white font-bold text-sm">{teamName} Innings</span>
          <span className="text-gray-400 text-xs ml-2">{inningsLabel}</span>
        </div>
        <div className="text-right">
          <span className="text-white font-black text-xl">{score}</span>
          <span className="text-gray-400 text-xs ml-2">({overs} Ov)</span>
        </div>
      </div>

      {/* Batting Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid #1E2A45" }}>
              <th className="text-left px-4 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">Batter</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">R</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">B</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">4s</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">6s</th>
              <th className="text-right px-4 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">SR</th>
            </tr>
          </thead>
          <tbody>
            {batsmen.map((b) => {
              const isCurrentBatsman = !b.isOut;
              const isOnStrike = b.isOnStrike;
              return (
                <tr
                  key={b.id}
                  className="transition-colors"
                  style={{
                    borderBottom: "1px solid rgba(30,42,69,0.5)",
                    borderLeft: isCurrentBatsman ? "3px solid #1DB954" : "3px solid transparent",
                    background: isOnStrike ? "rgba(29, 185, 84, 0.05)" : "transparent",
                  }}
                >
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`font-semibold ${b.isOut ? "text-gray-400" : "text-white"}`}>
                        {b.name}
                      </span>
                      {isOnStrike && (
                        <span
                          className="text-xs px-1 rounded font-bold"
                          style={{ background: "#1DB954", color: "black" }}
                        >
                          *
                        </span>
                      )}
                    </div>
                    {b.isOut && b.dismissal && (
                      <div className="text-gray-600 text-xs mt-0.5 truncate max-w-[200px]">{b.dismissal}</div>
                    )}
                    {!b.isOut && !isOnStrike && <div className="text-gray-600 text-xs mt-0.5">not out</div>}
                  </td>
                  <td className="text-right px-3 py-2.5">
                    <span className={`font-bold ${b.isOut ? "text-gray-400" : "text-white"} ${b.runs >= 50 ? "text-yellow-400" : ""}`}>
                      {b.runs}
                    </span>
                  </td>
                  <td className="text-right px-3 py-2.5 text-gray-400">{b.balls}</td>
                  <td className="text-right px-3 py-2.5 text-gray-300">{b.fours}</td>
                  <td className="text-right px-3 py-2.5 text-gray-300">{b.sixes}</td>
                  <td className="text-right px-4 py-2.5">
                    <span
                      className="text-xs font-bold"
                      style={{ color: b.strikeRate >= 100 ? "#1DB954" : b.strikeRate >= 70 ? "#F5A623" : "#9CA3AF" }}
                    >
                      {b.strikeRate.toFixed(2)}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bowling Table */}
      <div style={{ borderTop: "2px solid #1E2A45" }}>
        <div className="px-4 py-2" style={{ background: "rgba(0,48,135,0.15)" }}>
          <span className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Bowling</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid #1E2A45" }}>
                <th className="text-left px-4 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">Bowler</th>
                <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">O</th>
                <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">M</th>
                <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">R</th>
                <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">W</th>
                <th className="text-right px-4 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">ECO</th>
              </tr>
            </thead>
            <tbody>
              {bowlers.map((b) => (
                <tr
                  key={b.id}
                  style={{
                    borderBottom: "1px solid rgba(30,42,69,0.5)",
                    borderLeft: b.isBowling ? "3px solid #E8003D" : "3px solid transparent",
                    background: b.isBowling ? "rgba(232, 0, 61, 0.05)" : "transparent",
                  }}
                >
                  <td className="px-4 py-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className={`font-semibold ${b.isBowling ? "text-white" : "text-gray-300"}`}>{b.name}</span>
                      {b.isBowling && (
                        <span
                          className="text-xs px-1 rounded font-bold"
                          style={{ background: "#E8003D", color: "white" }}
                        >
                          NOW
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-right px-3 py-2.5 text-gray-400">{b.overs}</td>
                  <td className="text-right px-3 py-2.5 text-gray-400">{b.maidens}</td>
                  <td className="text-right px-3 py-2.5 text-gray-300">{b.runs}</td>
                  <td className="text-right px-3 py-2.5">
                    <span
                      className="font-bold"
                      style={{ color: b.wickets >= 3 ? "#E8003D" : b.wickets >= 1 ? "#F5A623" : "#6B7280" }}
                    >
                      {b.wickets}
                    </span>
                  </td>
                  <td className="text-right px-4 py-2.5">
                    <span
                      className="text-xs font-bold"
                      style={{ color: b.economy <= 5 ? "#1DB954" : b.economy <= 7 ? "#F5A623" : "#FF3B30" }}
                    >
                      {b.economy.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
