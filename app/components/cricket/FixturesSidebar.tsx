import { upcomingFixtures, iplPointsTable } from "~/data/cricket-data";
import { LiveBadge } from "./LiveBadge";
import { Calendar } from "lucide-react";

export function FixturesSidebar() {
  const upcoming = upcomingFixtures.filter((f) => f.status === "UPCOMING").slice(0, 4);
  const topTeams = iplPointsTable.slice(0, 5);

  return (
    <div className="space-y-4">
      {/* Upcoming Fixtures */}
      <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
        <div className="px-4 py-3 border-b border-[#1F2F44] flex items-center gap-2">
          <Calendar size={14} className="text-blue-400" />
          <h3 className="text-white font-bold font-score text-sm">Upcoming Fixtures</h3>
        </div>
        <div className="divide-y divide-[#1F2F44]">
          {upcoming.map((fixture) => (
            <div key={fixture.id} className="px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-1.5">
                <LiveBadge status={fixture.status} size="sm" />
                <span className="text-[#6B7280] text-xs">{fixture.format}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base">{fixture.teamA.flag}</span>
                <span className="text-white text-xs font-bold">{fixture.teamA.shortName}</span>
                <span className="text-[#6B7280] text-xs">vs</span>
                <span className="text-white text-xs font-bold">{fixture.teamB.shortName}</span>
                <span className="text-base">{fixture.teamB.flag}</span>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[#9CA3AF] text-xs">{fixture.date}</span>
                <span className="text-[#9CA3AF] text-xs">{fixture.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini IPL Table */}
      <div className="rounded-xl border border-[#1F2F44] overflow-hidden" style={{ background: "#111827" }}>
        <div
          className="px-4 py-3 border-b border-[#1F2F44] flex items-center justify-between"
          style={{ background: "rgba(245,158,11,0.06)" }}
        >
          <h3 className="text-white font-bold font-score text-sm">IPL 2026 — Top 5</h3>
          <span
            className="text-xs font-bold"
            style={{ color: "#F59E0B" }}
          >
            Standings
          </span>
        </div>
        <div className="divide-y divide-[#1F2F44]">
          {topTeams.map((team) => (
            <div
              key={team.rank}
              className="px-4 py-2.5 flex items-center gap-3 hover:bg-white/5 transition-colors"
              style={{
                borderLeft: team.isQualified ? "3px solid #10B981" : "3px solid transparent",
              }}
            >
              <span className="text-[#9CA3AF] text-xs font-bold w-4">{team.rank}</span>
              <span className="text-base">{team.flag}</span>
              <div className="flex-1">
                <span className="text-white text-xs font-semibold">{team.shortName}</span>
              </div>
              <div className="flex gap-3 text-center">
                <div>
                  <div className="text-white font-bold text-sm">{team.points}</div>
                  <div className="text-[#6B7280] text-[10px]">Pts</div>
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ color: team.nrr >= 0 ? "#10B981" : "#EF4444" }}
                  >
                    {team.nrr > 0 ? "+" : ""}{team.nrr.toFixed(2)}
                  </div>
                  <div className="text-[#6B7280] text-[10px]">NRR</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 py-2 text-center">
          <button className="text-xs text-[#9CA3AF] hover:text-white transition-colors">View Full Table →</button>
        </div>
      </div>

      {/* Match Toss Info */}
      <div
        className="rounded-xl border border-[#1F2F44] p-4"
        style={{ background: "#111827" }}
      >
        <h3 className="text-white font-bold font-score text-sm mb-2">Match Info</h3>
        <div className="space-y-2 text-xs">
          <div className="flex gap-2">
            <span className="text-[#6B7280] flex-shrink-0 w-16">Toss</span>
            <span className="text-[#9CA3AF]">Australia won, elected to bat first</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#6B7280] flex-shrink-0 w-16">Venue</span>
            <span className="text-[#9CA3AF]">Wankhede Stadium, Mumbai</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#6B7280] flex-shrink-0 w-16">Umpires</span>
            <span className="text-[#9CA3AF]">Nitin Menon, Kumar Dharmasena</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#6B7280] flex-shrink-0 w-16">TV Umpire</span>
            <span className="text-[#9CA3AF]">Paul Reiffel</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#6B7280] flex-shrink-0 w-16">Referee</span>
            <span className="text-[#9CA3AF]">Chris Broad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
