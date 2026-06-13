import { useState } from "react";
import { useConfigurables } from "~/modules/configurables";
import { LiveScoreHeader } from "~/components/cricstream/LiveScoreHeader";
import { TabNav } from "~/components/cricstream/TabNav";
import { WinProbability } from "~/components/cricstream/WinProbability";
import { WeatherWidget } from "~/components/cricstream/WeatherWidget";
import { ScorecardTable } from "~/components/cricstream/ScorecardTable";
import { CommentaryFeed } from "~/components/cricstream/CommentaryFeed";
import { WagonWheel } from "~/components/cricstream/WagonWheel";
import { RunRateGraph } from "~/components/cricstream/RunRateGraph";
import { PartnershipAndFOW } from "~/components/cricstream/PartnershipAndFOW";
import { PointsTable } from "~/components/cricstream/PointsTable";
import { FixtureCard } from "~/components/cricstream/FixtureCard";
import { HighlightsTab } from "~/components/cricstream/HighlightsTab";
import { StatisticsTab } from "~/components/cricstream/StatisticsTab";
import {
  liveMatch,
  currentBatsmen,
  allBatsmen,
  bowlers,
  innings1Batsmen,
  innings1Bowlers,
  currentPartnership,
  fallOfWickets,
  commentary,
  wagonWheelData,
  overByOverData,
  iplPointsTable,
  fixtures,
  highlights,
  weatherData,
  playerStats,
} from "~/lib/cricket-data";

type Tab = "live" | "scorecard" | "commentary" | "statistics" | "points" | "highlights";

const ALL_TABS: { id: Tab; label: string; icon?: string }[] = [
  { id: "live", label: "Live Match", icon: "🔴" },
  { id: "scorecard", label: "Scorecard", icon: "📋" },
  { id: "commentary", label: "Commentary", icon: "🎙️" },
  { id: "statistics", label: "Statistics", icon: "📊" },
  { id: "points", label: "Points Table", icon: "🏆" },
  { id: "highlights", label: "Highlights", icon: "🎬" },
];

export default function IndexPage() {
  const { config } = useConfigurables();
  const [activeTab, setActiveTab] = useState<Tab>("live");

  // Configurable values with safe fallbacks
  const appName = config?.appName ?? "CricLive";
  const tagline =
    (config as any)?.tagline ?? "Premium Cricket. Live. Broadcast-Grade.";
  const primaryColor = (config as any)?.brandColor?.primary ?? "#E8003D";
  const showWeather = (config as any)?.showWeather !== false;
  const showWagonWheel = (config as any)?.showWagonWheel !== false;
  const showWinProbability = (config as any)?.showWinProbability !== false;
  const showPointsTable = (config as any)?.showPointsTable !== false;
  const footerText =
    (config as any)?.footerText ??
    "© 2026 CricLive. Premium Cricket Broadcasting Platform.";

  const visibleTabs = ALL_TABS.filter((t) => {
    if (t.id === "points" && !showPointsTable) return false;
    return true;
  });

  return (
    <div className="min-h-screen" style={{ background: "#0A0E1A" }}>
      {/* Top broadcast bar */}
      <header
        className="sticky top-0 z-50 border-b"
        style={{ background: "#0A0E1A", borderColor: "#1E2A45" }}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xl font-black text-white"
              style={{
                background: primaryColor,
                boxShadow: `0 0 24px ${primaryColor}55`,
              }}
            >
              🏏
            </span>
            <div className="leading-tight">
              <div className="text-white font-black text-lg tracking-tight">
                {appName}
              </div>
              <div className="text-[11px] text-[#6B7280] font-medium">
                {tagline}
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full animate-live-pulse"
              style={{ background: "#1DB954" }}
              aria-hidden="true"
            />
            <span className="text-xs font-semibold text-[#9CA3AF]">
              Live Data
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 py-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content column */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Broadcast scorebug */}
            <LiveScoreHeader match={liveMatch} />

            {/* Sticky tabs */}
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "#1E2A45" }}>
              <TabNav
                tabs={visibleTabs}
                activeTab={activeTab}
                onTabChange={(id) => setActiveTab(id as Tab)}
              />
            </div>

            {/* Tab panels */}
            <div className="space-y-4">
              {activeTab === "live" && (
                <div className="space-y-4">
                  {showWinProbability && <WinProbability match={liveMatch} />}
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <RunRateGraph
                      data={overByOverData}
                      target={liveMatch.target}
                      teamName={liveMatch.team1.shortName}
                    />
                    <PartnershipAndFOW
                      partnership={currentPartnership}
                      fallOfWickets={fallOfWickets}
                    />
                  </div>
                  <ScorecardTable
                    batsmen={currentBatsmen}
                    bowlers={bowlers}
                    teamName={liveMatch.team1.shortName}
                    score={liveMatch.currentScore}
                    overs={liveMatch.currentOvers}
                    inningsLabel={`${liveMatch.team1.name} — 2nd Innings (Live)`}
                  />
                  {showWeather && <WeatherWidget weather={weatherData} />}
                </div>
              )}

              {activeTab === "scorecard" && (
                <div className="space-y-4">
                  <ScorecardTable
                    batsmen={allBatsmen}
                    bowlers={bowlers}
                    teamName={liveMatch.team1.shortName}
                    score={liveMatch.innings2Score ?? liveMatch.currentScore}
                    overs={liveMatch.innings2Overs ?? liveMatch.currentOvers}
                    inningsLabel={`${liveMatch.team1.name} — 2nd Innings`}
                  />
                  <ScorecardTable
                    batsmen={innings1Batsmen}
                    bowlers={innings1Bowlers}
                    teamName={liveMatch.team2.shortName}
                    score={liveMatch.innings1Score}
                    overs={liveMatch.innings1Overs}
                    inningsLabel={`${liveMatch.team2.name} — 1st Innings`}
                  />
                </div>
              )}

              {activeTab === "commentary" && <CommentaryFeed balls={commentary} />}

              {activeTab === "statistics" && (
                <div className="space-y-4">
                  {showWagonWheel && (
                    <WagonWheel shots={wagonWheelData} batterName="Shreyas Iyer" />
                  )}
                  <StatisticsTab stats={playerStats} />
                </div>
              )}

              {activeTab === "points" && showPointsTable && (
                <PointsTable entries={iplPointsTable} tournamentName="IPL 2026" />
              )}

              {activeTab === "highlights" && (
                <HighlightsTab highlights={highlights} />
              )}
            </div>
          </div>

          {/* Right sidebar — fixtures */}
          <aside
            className="w-full lg:w-80 xl:w-[340px] flex-shrink-0"
            aria-label="Fixtures and schedule"
          >
            <div className="lg:sticky lg:top-20 space-y-3">
              <div className="flex items-center justify-between px-1">
                <h2 className="text-white font-bold text-base">Fixtures</h2>
                <span className="text-[11px] text-[#6B7280] font-medium">
                  ODI · T20 · Test · IPL
                </span>
              </div>
              {fixtures.map((fixture) => (
                <FixtureCard
                  key={fixture.id}
                  fixture={fixture}
                  isActive={fixture.id === "ind-aus-live"}
                />
              ))}
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t mt-8 py-6 px-4"
        style={{ background: "#0A0E1A", borderColor: "#1E2A45" }}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#6B7280] text-xs text-center sm:text-left">
            {footerText}
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full animate-live-pulse"
              style={{ background: primaryColor }}
              aria-hidden="true"
            />
            <span className="text-[#6B7280] text-xs">Real-time match data</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
