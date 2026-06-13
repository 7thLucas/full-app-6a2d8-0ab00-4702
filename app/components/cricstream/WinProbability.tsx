import type { Match } from "~/lib/cricket-data";

interface WinProbabilityProps {
  match: Match;
}

export function WinProbability({ match }: WinProbabilityProps) {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
    >
      <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">Win Probability</div>

      <div className="flex items-center justify-between mb-2 text-sm font-bold">
        <div className="flex items-center gap-2">
          <span>{match.team1.flag}</span>
          <span style={{ color: "#FFFFFF" }}>{match.team1.shortName}</span>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: "#FFFFFF" }}>{match.team2.shortName}</span>
          <span>{match.team2.flag}</span>
        </div>
      </div>

      {/* Bar */}
      <div className="relative h-6 rounded-full overflow-hidden flex" style={{ background: "#1E2A45" }}>
        <div
          className="h-full rounded-l-full flex items-center justify-end pr-2 transition-all duration-1000"
          style={{
            width: `${match.winProbTeam1}%`,
            background: `linear-gradient(90deg, ${match.team1.color}, ${match.team1.color}cc)`,
          }}
        >
          {match.winProbTeam1 > 20 && (
            <span className="text-white font-black text-xs">{match.winProbTeam1}%</span>
          )}
        </div>
        <div
          className="h-full rounded-r-full flex items-center justify-start pl-2 transition-all duration-1000"
          style={{
            width: `${match.winProbTeam2}%`,
            background: `linear-gradient(90deg, ${match.team2.color}cc, ${match.team2.color})`,
          }}
        >
          {match.winProbTeam2 > 20 && (
            <span className="text-white font-black text-xs">{match.winProbTeam2}%</span>
          )}
        </div>
      </div>

      <div className="flex justify-between mt-1 text-xs text-gray-500">
        <span>{match.winProbTeam1}% chance</span>
        <span>{match.winProbTeam2}% chance</span>
      </div>
    </div>
  );
}
