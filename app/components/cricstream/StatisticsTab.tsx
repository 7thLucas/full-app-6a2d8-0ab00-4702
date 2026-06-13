interface PlayerStat {
  rank: number;
  name: string;
  team: string;
  flag: string;
  stat: string;
  avg: string;
}

interface StatCategory {
  category: string;
  players: PlayerStat[];
}

interface StatisticsTabProps {
  stats: StatCategory[];
}

export function StatisticsTab({ stats }: StatisticsTabProps) {
  return (
    <div className="space-y-6">
      {stats.map((category) => (
        <div
          key={category.category}
          className="rounded-xl overflow-hidden"
          style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
        >
          <div
            className="px-4 py-3"
            style={{ borderBottom: "1px solid #1E2A45", background: "rgba(232,0,61,0.06)" }}
          >
            <h3 className="text-white font-bold text-sm uppercase tracking-wide">{category.category}</h3>
            <p className="text-gray-500 text-xs mt-0.5">Series rankings — 2026</p>
          </div>

          <div className="divide-y" style={{ "--tw-divide-color": "#1E2A45" } as any}>
            {category.players.map((player, idx) => (
              <div
                key={player.rank}
                className="flex items-center gap-4 px-4 py-3 hover:bg-white/5 transition-colors"
                style={{ borderBottom: "1px solid rgba(30,42,69,0.5)" }}
              >
                {/* Rank */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                  style={{
                    background: idx === 0 ? "#F5A623" : idx === 1 ? "#9CA3AF" : idx === 2 ? "#CD7F32" : "rgba(30,42,69,0.8)",
                    color: idx < 3 ? "black" : "#6B7280",
                  }}
                >
                  {player.rank}
                </div>

                {/* Flag + Name */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <span className="text-xl flex-shrink-0">{player.flag}</span>
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-sm truncate">{player.name}</div>
                    <div className="text-gray-500 text-xs">{player.team}</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="text-right flex-shrink-0">
                  <div
                    className="font-black text-base"
                    style={{ color: idx === 0 ? "#F5A623" : "#FFFFFF" }}
                  >
                    {player.stat}
                  </div>
                  <div className="text-gray-500 text-xs">Avg: {player.avg}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Match Stats Summary */}
      <div
        className="rounded-xl p-4"
        style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
      >
        <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">IND vs AUS — Match Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Total Boundaries (AUS)", value: "28 (4s: 22, 6s: 6)", icon: "🏏" },
            { label: "Total Boundaries (IND)", value: "21 (4s: 17, 6s: 4)", icon: "🏏" },
            { label: "Dot Ball %", value: "42%", icon: "⚫" },
            { label: "Extras (AUS 1st Inn)", value: "12 (w: 3, nb: 2, b: 5, lb: 2)", icon: "📊" },
            { label: "Partnership Record", value: "Iyer & Pandya — 67 runs", icon: "🤝" },
            { label: "Highest Scorer (AUS)", value: "Travis Head — 88 (82)", icon: "⭐" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg p-3"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(30,42,69,0.5)" }}
            >
              <div className="text-xl mb-1">{stat.icon}</div>
              <div className="text-gray-400 text-xs mb-0.5">{stat.label}</div>
              <div className="text-white font-semibold text-sm">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
