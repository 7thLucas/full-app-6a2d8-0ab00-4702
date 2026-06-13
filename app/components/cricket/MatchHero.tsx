import { LiveBadge } from "./LiveBadge";
import { liveMatch } from "~/data/cricket-data";
import { Cloud, Wind, Droplets, Thermometer } from "lucide-react";

interface MatchHeroProps {
  showWeather?: boolean;
  showWinProbability?: boolean;
}

export function MatchHero({ showWeather = true, showWinProbability = true }: MatchHeroProps) {
  const { teamA, teamB, innings, winProbability, weather, matchNumber, series, venue, date } = liveMatch;

  return (
    <div
      className="relative rounded-xl overflow-hidden border border-[#1F2F44]"
      style={{
        background: "linear-gradient(135deg, rgba(10,14,26,0.98) 0%, rgba(26,34,53,0.98) 50%, rgba(10,14,26,0.98) 100%)",
      }}
      aria-label="Live match hero panel"
    >
      {/* Gradient accent bar at top */}
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${teamA.primaryColor}, ${teamB.primaryColor})` }}
      />

      {/* Match header */}
      <div className="px-4 py-3 border-b border-[#1F2F44] flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <LiveBadge status="LIVE" size="md" />
          <span className="text-[#9CA3AF] text-xs font-semibold tracking-wide uppercase">{matchNumber}</span>
          <span className="text-[#9CA3AF] text-xs hidden sm:inline">{series}</span>
        </div>
        <div className="text-[#9CA3AF] text-xs">{date} &bull; {venue}</div>
      </div>

      {/* Scores */}
      <div className="px-4 py-5 flex flex-col md:flex-row items-center gap-4 md:gap-0">
        {/* Team A — India */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-3">
            <span className="text-4xl" role="img" aria-label="India flag">{teamA.flag}</span>
            <div>
              <p className="text-[#9CA3AF] text-xs uppercase tracking-widest font-semibold">Batting</p>
              <p className="text-white text-lg font-bold font-score tracking-wide">{teamA.name}</p>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="font-score font-black text-white leading-none"
              style={{ fontSize: "56px" }}
              aria-label={`India score: ${innings.currentScore} for ${innings.currentWickets}`}
            >
              {innings.currentScore}/{innings.currentWickets}
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[#9CA3AF] text-sm font-score">({innings.currentOvers} ov)</span>
            <span className="px-2 py-0.5 rounded text-xs font-bold font-score" style={{ background: "rgba(59,130,246,0.15)", color: "#60A5FA" }}>
              CRR {innings.crr}
            </span>
            <span className="px-2 py-0.5 rounded text-xs font-bold font-score" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>
              RRR {innings.rrr}
            </span>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center gap-2 px-6">
          <div className="text-[#9CA3AF] text-xl font-bold font-score">VS</div>
          <div className="h-16 w-px bg-[#1F2F44] hidden md:block" />
          <div className="text-center">
            <p className="text-[#9CA3AF] text-xs">Target</p>
            <p className="text-amber-400 text-2xl font-bold font-score">{innings.target}</p>
          </div>
          <p className="text-[#9CA3AF] text-xs text-center">
            Need <span className="text-white font-bold">{innings.runsRequired}</span> in{" "}
            <span className="text-white font-bold">{innings.ballsRemaining}</span> balls
          </p>
        </div>

        {/* Team B — Australia */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-3 flex-row-reverse md:flex-row">
            <span className="text-4xl" role="img" aria-label="Australia flag">{teamB.flag}</span>
            <div className="text-right md:text-left">
              <p className="text-[#9CA3AF] text-xs uppercase tracking-widest font-semibold">Batted</p>
              <p className="text-white text-lg font-bold font-score tracking-wide">{teamB.name}</p>
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className="font-score font-black leading-none"
              style={{ fontSize: "56px", color: teamB.primaryColor }}
              aria-label="Australia first innings: 288 for 7"
            >
              288/7
            </span>
          </div>
          <span className="text-[#9CA3AF] text-sm font-score">(50 ov)</span>
        </div>
      </div>

      {/* Win probability */}
      {showWinProbability && (
        <div className="px-4 pb-4">
          <div className="flex justify-between text-xs font-bold mb-1.5">
            <span style={{ color: teamA.primaryColor }}>{teamA.shortName} {winProbability.teamA}%</span>
            <span className="text-[#9CA3AF] text-xs">Win Probability</span>
            <span style={{ color: teamB.primaryColor }}>{winProbability.teamB}% {teamB.shortName}</span>
          </div>
          <div
            className="relative h-3 rounded-full overflow-hidden border border-[#1F2F44]"
            role="meter"
            aria-label={`Win probability: India ${winProbability.teamA}%, Australia ${winProbability.teamB}%`}
            aria-valuenow={winProbability.teamA}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="absolute left-0 top-0 h-full win-prob-bar"
              style={{ width: `${winProbability.teamA}%`, background: `linear-gradient(90deg, ${teamA.primaryColor}dd, ${teamA.primaryColor}88)` }}
            />
            <div
              className="absolute right-0 top-0 h-full win-prob-bar"
              style={{ width: `${winProbability.teamB}%`, background: `linear-gradient(270deg, ${teamB.primaryColor}dd, ${teamB.primaryColor}88)` }}
            />
          </div>
        </div>
      )}

      {/* Weather */}
      {showWeather && (
        <div className="px-4 pb-4 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
            <Cloud size={13} />
            <span>{weather.condition}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
            <Thermometer size={13} />
            <span>{weather.temperature}&deg;C</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
            <Droplets size={13} />
            <span>Humidity {weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#9CA3AF] text-xs">
            <Wind size={13} />
            <span>Wind {weather.windSpeed} km/h</span>
          </div>
          {weather.dlsRisk && (
            <span className="bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded font-semibold">DLS Risk</span>
          )}
        </div>
      )}
    </div>
  );
}
