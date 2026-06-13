import {
  battingLineup,
  bowlingFigures,
  australiaBatters,
  indiaFieldingBowling,
  extras,
  australiaInnings,
  liveMatch,
} from "~/data/cricket-data";
import type { BatterStats, BowlerStats } from "~/data/cricket-data";

function BattingTable({ batters, title, total, overs }: { batters: BatterStats[]; title: string; total: string; overs: string }) {
  return (
    <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
      <div
        className="px-4 py-3 border-b border-[#1F2F44] flex items-center justify-between"
        style={{ background: "rgba(239,68,68,0.06)" }}
      >
        <h3 className="text-white font-bold font-score">{title}</h3>
        <div className="text-right">
          <span className="text-white font-black text-lg font-score">{total}</span>
          <span className="text-[#9CA3AF] text-xs ml-2">({overs} ov)</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[#9CA3AF] text-xs uppercase tracking-wide border-b border-[#1F2F44]">
              <th className="text-left px-4 py-2">Batter</th>
              <th className="text-center px-2 py-2">Dismissal</th>
              <th className="text-right px-3 py-2">R</th>
              <th className="text-right px-3 py-2">B</th>
              <th className="text-right px-3 py-2">4s</th>
              <th className="text-right px-3 py-2">6s</th>
              <th className="text-right px-4 py-2">SR</th>
            </tr>
          </thead>
          <tbody>
            {batters.map((batter) => (
              <tr
                key={batter.name}
                className="border-b border-[#1F2F44] hover:bg-white/5 transition-colors"
                style={{ borderLeft: batter.isBatting ? "3px solid #10B981" : "3px solid transparent" }}
              >
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`font-semibold ${batter.isBatting ? "text-white" : batter.isNotOut ? "text-emerald-400" : "text-[#9CA3AF]"}`}>
                      {batter.name}
                    </span>
                    {batter.isCaptain && <span className="text-[#9CA3AF] text-xs">(c)</span>}
                    {batter.isKeeper && <span className="text-[#9CA3AF] text-xs">(wk)</span>}
                    {batter.isBatting && (
                      <span
                        className="text-[10px] px-1 rounded font-bold"
                        style={{ background: "#10B98122", color: "#10B981" }}
                      >
                        batting
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-2 py-2.5 text-[#6B7280] text-xs max-w-[140px] truncate">
                  {batter.isBatting ? "not out" : batter.isNotOut ? "not out" : batter.dismissal}
                </td>
                <td className="text-right px-3 py-2.5">
                  <span className={`font-black ${batter.runs >= 50 ? "text-amber-400" : "text-white"}`}>{batter.runs}</span>
                </td>
                <td className="text-right px-3 py-2.5 text-[#9CA3AF]">{batter.balls}</td>
                <td className="text-right px-3 py-2.5 text-[#9CA3AF]">{batter.fours}</td>
                <td className="text-right px-3 py-2.5 text-[#9CA3AF]">{batter.sixes}</td>
                <td className="text-right px-4 py-2.5">
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
  );
}

function BowlingTable({ bowlers, title }: { bowlers: BowlerStats[]; title: string }) {
  return (
    <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
      <div
        className="px-4 py-3 border-b border-[#1F2F44]"
        style={{ background: "rgba(0,48,135,0.1)" }}
      >
        <h3 className="text-white font-bold font-score text-sm">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[#9CA3AF] text-xs uppercase tracking-wide border-b border-[#1F2F44]">
              <th className="text-left px-4 py-2">Bowler</th>
              <th className="text-right px-3 py-2">O</th>
              <th className="text-right px-3 py-2">M</th>
              <th className="text-right px-3 py-2">R</th>
              <th className="text-right px-3 py-2">W</th>
              <th className="text-right px-4 py-2">ECO</th>
            </tr>
          </thead>
          <tbody>
            {bowlers.map((bowler) => (
              <tr
                key={bowler.name}
                className="border-b border-[#1F2F44] hover:bg-white/5 transition-colors"
                style={{ borderLeft: bowler.isCurrentBowler ? "3px solid #EF4444" : "3px solid transparent" }}
              >
                <td className="px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white font-semibold">{bowler.name}</span>
                    {bowler.isCaptain && <span className="text-[#9CA3AF] text-xs">(c)</span>}
                    {bowler.isCurrentBowler && (
                      <span
                        className="text-[10px] px-1 rounded font-bold"
                        style={{ background: "#EF444422", color: "#EF4444" }}
                      >
                        bowling
                      </span>
                    )}
                  </div>
                </td>
                <td className="text-right px-3 py-2.5 text-[#9CA3AF]">{bowler.overs}</td>
                <td className="text-right px-3 py-2.5 text-[#9CA3AF]">{bowler.maidens}</td>
                <td className="text-right px-3 py-2.5 text-[#9CA3AF]">{bowler.runs}</td>
                <td className="text-right px-3 py-2.5">
                  <span className="font-black" style={{ color: bowler.wickets >= 3 ? "#EF4444" : bowler.wickets >= 1 ? "#F59E0B" : "#9CA3AF" }}>
                    {bowler.wickets}
                  </span>
                </td>
                <td className="text-right px-4 py-2.5">
                  <span
                    className="text-xs font-bold"
                    style={{ color: bowler.economy <= 5 ? "#10B981" : bowler.economy <= 7 ? "#F59E0B" : "#EF4444" }}
                  >
                    {bowler.economy.toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ScorecardTab() {
  const { innings } = liveMatch;
  const indiaScore = `${innings.currentScore}/${innings.currentWickets}`;

  return (
    <div className="space-y-4">
      {/* India 2nd innings batting */}
      <BattingTable
        batters={battingLineup}
        title="India — 2nd Innings (Chasing 289)"
        total={indiaScore}
        overs={innings.currentOvers.toString()}
      />
      <div className="px-4 py-2 text-[#9CA3AF] text-xs">
        Extras: {extras.total} (b {extras.byes}, lb {extras.legByes}, w {extras.wides}, nb {extras.noBalls})
      </div>

      {/* Australia bowling */}
      <BowlingTable bowlers={bowlingFigures} title="Australia Bowling" />

      {/* Australia 1st innings batting */}
      <BattingTable
        batters={australiaBatters}
        title="Australia — 1st Innings"
        total={`${australiaInnings.score}/${australiaInnings.wickets}`}
        overs={australiaInnings.overs.toString()}
      />
      <div className="px-4 py-2 text-[#9CA3AF] text-xs">
        Extras: {australiaInnings.extras.total} (b {australiaInnings.extras.byes}, lb {australiaInnings.extras.legByes}, w {australiaInnings.extras.wides}, nb {australiaInnings.extras.noBalls})
      </div>

      {/* India bowling */}
      <BowlingTable bowlers={indiaFieldingBowling} title="India Bowling" />
    </div>
  );
}
