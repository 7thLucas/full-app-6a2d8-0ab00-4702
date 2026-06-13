import { iplPointsTable, upcomingFixtures } from "~/data/cricket-data";
import { LiveBadge } from "./LiveBadge";

export function PointsTableTab() {
  return (
    <div className="space-y-6">
      {/* IPL Points Table */}
      <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
        <div
          className="px-4 py-3 border-b border-[#1F2F44] flex items-center justify-between"
          style={{ background: "rgba(245,158,11,0.06)" }}
        >
          <h3 className="text-white font-bold font-score">IPL 2026 Points Table</h3>
          <span
            className="text-xs px-2 py-1 rounded font-bold"
            style={{ background: "rgba(245,158,11,0.2)", color: "#F59E0B" }}
          >
            LEAGUE STAGE
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[#9CA3AF] text-xs uppercase tracking-wide border-b border-[#1F2F44]">
                <th className="text-left px-4 py-2">#</th>
                <th className="text-left px-3 py-2">Team</th>
                <th className="text-right px-3 py-2">P</th>
                <th className="text-right px-3 py-2">W</th>
                <th className="text-right px-3 py-2">L</th>
                <th className="text-right px-3 py-2">NR</th>
                <th className="text-right px-3 py-2">NRR</th>
                <th className="text-right px-4 py-2">PTS</th>
              </tr>
            </thead>
            <tbody>
              {iplPointsTable.map((entry) => (
                <tr
                  key={entry.rank}
                  className="border-b border-[#1F2F44] hover:bg-white/5 transition-colors"
                  style={{
                    borderLeft: entry.isQualified ? "3px solid #10B981" : entry.rank === 5 ? "3px solid #F59E0B" : "3px solid transparent",
                    background: entry.isQualified ? "rgba(16,185,129,0.02)" : "transparent",
                    borderBottom: entry.rank === 4 ? "2px dashed rgba(245,158,11,0.3)" : undefined,
                  }}
                >
                  <td className="px-4 py-2.5 text-[#9CA3AF] text-xs font-bold">{entry.rank}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{entry.flag}</span>
                      <div>
                        <span className="text-white font-semibold">{entry.shortName}</span>
                        <div className="text-[#6B7280] text-xs hidden sm:block">{entry.team}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right px-3 py-2.5 text-[#9CA3AF]">{entry.played}</td>
                  <td className="text-right px-3 py-2.5 text-emerald-400 font-semibold">{entry.won}</td>
                  <td className="text-right px-3 py-2.5 text-red-400">{entry.lost}</td>
                  <td className="text-right px-3 py-2.5 text-[#9CA3AF]">{entry.noResult}</td>
                  <td className="text-right px-3 py-2.5">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: entry.nrr >= 0 ? "#10B981" : "#EF4444" }}
                    >
                      {entry.nrr > 0 ? "+" : ""}{entry.nrr.toFixed(3)}
                    </span>
                  </td>
                  <td className="text-right px-4 py-2.5">
                    <span className="text-white font-black text-sm">{entry.points}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="px-4 py-2 flex items-center gap-3 text-xs text-[#9CA3AF]"
          style={{ borderTop: "1px solid #1F2F44" }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-1 rounded" style={{ background: "#10B981" }} />
            <span>Playoffs qualified (Top 4)</span>
          </div>
        </div>
      </div>

      {/* Upcoming & Recent Fixtures */}
      <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
        <div className="px-4 py-3 border-b border-[#1F2F44]">
          <h3 className="text-white font-bold font-score">All Fixtures</h3>
        </div>
        <div className="divide-y divide-[#1F2F44]">
          {upcomingFixtures.map((fixture) => (
            <div key={fixture.id} className="px-4 py-3 hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <LiveBadge status={fixture.status} size="sm" />
                  <span
                    className="text-xs font-bold px-1.5 py-0.5 rounded"
                    style={{ background: "rgba(255,255,255,0.06)", color: "#9CA3AF" }}
                  >
                    {fixture.format}
                  </span>
                  <span className="text-[#9CA3AF] text-xs hidden sm:inline">{fixture.series}</span>
                </div>
                <span className="text-[#9CA3AF] text-xs">{fixture.date}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{fixture.teamA.flag}</span>
                  <span className="text-white font-bold">{fixture.teamA.shortName}</span>
                  {fixture.scoreA && <span className="text-[#9CA3AF] text-xs font-mono">{fixture.scoreA}</span>}
                </div>
                <div className="text-center px-3">
                  <span className="text-[#9CA3AF] text-xs font-bold">vs</span>
                  {fixture.status === "UPCOMING" && (
                    <div className="text-[#9CA3AF] text-xs">{fixture.time}</div>
                  )}
                </div>
                <div className="flex items-center gap-2 justify-end">
                  {fixture.scoreB && <span className="text-[#9CA3AF] text-xs font-mono">{fixture.scoreB}</span>}
                  <span className="text-white font-bold">{fixture.teamB.shortName}</span>
                  <span className="text-xl">{fixture.teamB.flag}</span>
                </div>
              </div>

              {fixture.result && (
                <div className="mt-1 text-emerald-400 text-xs font-semibold">{fixture.result}</div>
              )}

              <div className="mt-1 text-[#6B7280] text-xs">📍 {fixture.venue}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
