import type { PointsTableEntry } from "~/lib/cricket-data";

interface PointsTableProps {
  entries: PointsTableEntry[];
  tournamentName: string;
}

export function PointsTable({ entries, tournamentName }: PointsTableProps) {
  const qualifiers = entries.slice(0, 4);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
    >
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: "1px solid #1E2A45", background: "rgba(245,166,35,0.08)" }}
      >
        <div className="text-white font-bold text-sm">{tournamentName}</div>
        <div
          className="text-xs px-2 py-1 rounded font-bold"
          style={{ background: "rgba(245,166,35,0.2)", color: "#F5A623" }}
        >
          IPL 2026
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: "1px solid #1E2A45" }}>
              <th className="text-left px-4 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">#</th>
              <th className="text-left px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">Team</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">P</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">W</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">L</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">NR</th>
              <th className="text-right px-3 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">NRR</th>
              <th className="text-right px-4 py-2 text-gray-500 text-xs uppercase tracking-wide font-semibold">PTS</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => {
              const isQualifier = entry.position <= 4;
              return (
                <tr
                  key={entry.team.id}
                  className="transition-all"
                  style={{
                    borderBottom: entry.position === 4 ? "2px dashed rgba(245,166,35,0.4)" : "1px solid rgba(30,42,69,0.5)",
                    background: isQualifier ? "rgba(29,185,84,0.03)" : "transparent",
                    borderLeft: isQualifier ? "3px solid #1DB954" : "3px solid transparent",
                  }}
                >
                  <td className="px-4 py-2.5 text-gray-500 text-xs font-bold">{entry.position}</td>
                  <td className="px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{entry.team.flag}</span>
                      <div>
                        <div className="text-white font-semibold text-sm">{entry.team.shortName}</div>
                        <div className="text-gray-600 text-xs hidden sm:block">{entry.team.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right px-3 py-2.5 text-gray-400">{entry.played}</td>
                  <td className="text-right px-3 py-2.5 text-green-400 font-semibold">{entry.won}</td>
                  <td className="text-right px-3 py-2.5 text-red-400">{entry.lost}</td>
                  <td className="text-right px-3 py-2.5 text-gray-500">{entry.noResult}</td>
                  <td className="text-right px-3 py-2.5">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: entry.netRunRate >= 0 ? "#1DB954" : "#FF3B30" }}
                    >
                      {entry.netRunRate > 0 ? "+" : ""}{entry.netRunRate.toFixed(3)}
                    </span>
                  </td>
                  <td className="text-right px-4 py-2.5">
                    <span className="text-white font-black text-sm">{entry.points}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        className="px-4 py-2 flex items-center gap-2"
        style={{ borderTop: "1px solid #1E2A45" }}
      >
        <div className="w-3 h-3 rounded-sm" style={{ background: "rgba(29,185,84,0.3)", border: "1px solid #1DB954" }} />
        <span className="text-gray-500 text-xs">Qualifier zone (Top 4)</span>
      </div>
    </div>
  );
}
