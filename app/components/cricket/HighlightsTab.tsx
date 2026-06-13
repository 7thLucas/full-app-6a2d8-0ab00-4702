import { Play, Star, Zap } from "lucide-react";

const highlights = [
  {
    id: "h1",
    type: "six",
    title: "Iyer's Massive Six Over Deep Mid-Wicket",
    description: "Shreyas Iyer rocks back to pull Zampa over deep mid-wicket for a colossal six in the 32nd over.",
    over: "32.1",
    batter: "Shreyas Iyer",
    runs: 6,
    thumbnail: null,
  },
  {
    id: "h2",
    type: "wicket",
    title: "Gill Falls LBW to Cummins",
    description: "Pat Cummins strikes back with a perfect length delivery that traps Shubman Gill plumb in front for 45.",
    over: "31.3",
    batter: "Shubman Gill",
    runs: 0,
    thumbnail: null,
  },
  {
    id: "h3",
    type: "four",
    title: "Kohli's Textbook Cover Drive",
    description: "Virat Kohli threads the needle through the covers off Hazlewood — classic, pristine technique.",
    over: "31.5",
    batter: "Virat Kohli",
    runs: 4,
    thumbnail: null,
  },
  {
    id: "h4",
    type: "milestone",
    title: "Rohit Sharma Fifty — 62 balls",
    description: "Captain Rohit Sharma brings up a classy fifty off 62 balls. The Wankhede crowd erupts!",
    over: "14.2",
    batter: "Rohit Sharma",
    runs: 50,
    thumbnail: null,
  },
  {
    id: "h5",
    type: "wicket",
    title: "Starc Removes Rohit for 78",
    description: "Mitchell Starc angles one across Rohit Sharma. The captain edges it to Maxwell at gully. Key wicket falls!",
    over: "20.3",
    batter: "Rohit Sharma",
    runs: 0,
    thumbnail: null,
  },
  {
    id: "h6",
    type: "six",
    title: "Iyer's Pull Shot Six — Zampa Taken On",
    description: "Shreyas Iyer pulls Zampa to the roof of the Wankhede. The crowd is on its feet! Tremendous hitting.",
    over: "32.1",
    batter: "Shreyas Iyer",
    runs: 6,
    thumbnail: null,
  },
];

const typeConfig: Record<string, { icon: typeof Zap; color: string; label: string }> = {
  six: { icon: Zap, color: "#10B981", label: "SIX" },
  four: { icon: Star, color: "#F59E0B", label: "FOUR" },
  wicket: { icon: Play, color: "#EF4444", label: "WICKET" },
  milestone: { icon: Star, color: "#A78BFA", label: "MILESTONE" },
};

const bgGradients: Record<string, string> = {
  six: "linear-gradient(135deg, #064e3b, #1e3a2a)",
  four: "linear-gradient(135deg, #78350f, #3a2010)",
  wicket: "linear-gradient(135deg, #7f1d1d, #3a1010)",
  milestone: "linear-gradient(135deg, #3b0764, #1e0b3a)",
};

export function HighlightsTab() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold font-score text-lg">Highlights & Key Moments</h2>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full animate-live-pulse" style={{ background: "#EF4444" }} />
          <span className="text-[#9CA3AF] text-xs">Live Match</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {highlights.map((highlight) => {
          const config = typeConfig[highlight.type] || typeConfig.four;
          const Icon = config.icon;
          const bg = bgGradients[highlight.type] || bgGradients.four;

          return (
            <div
              key={highlight.id}
              className="rounded-xl border border-[#1F2F44] overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform group"
              style={{ background: "#111827" }}
            >
              {/* Thumbnail area */}
              <div
                className="relative aspect-video flex items-center justify-center"
                style={{ background: bg }}
              >
                {/* Type badge */}
                <div
                  className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-black flex items-center gap-1"
                  style={{ background: config.color + "33", color: config.color, border: `1px solid ${config.color}44` }}
                >
                  <Icon size={10} />
                  {config.label}
                </div>

                {/* Over badge */}
                <div
                  className="absolute top-2 right-2 px-2 py-0.5 rounded text-xs font-bold"
                  style={{ background: "rgba(0,0,0,0.6)", color: "#9CA3AF" }}
                >
                  Over {highlight.over}
                </div>

                {/* Play button */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  style={{
                    background: config.color + "33",
                    border: `2px solid ${config.color}66`,
                  }}
                >
                  <Play size={24} style={{ color: config.color }} fill={config.color} />
                </div>

                {/* Runs badge for scoring shots */}
                {highlight.runs > 0 && (
                  <div
                    className="absolute bottom-2 right-2 w-9 h-9 rounded-full flex items-center justify-center font-black text-lg"
                    style={{ background: config.color, color: "white" }}
                  >
                    {highlight.runs}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="text-white font-bold text-sm leading-snug mb-1">{highlight.title}</h3>
                <p className="text-[#9CA3AF] text-xs leading-relaxed line-clamp-2">{highlight.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#6B7280] text-xs">{highlight.batter}</span>
                  <button
                    className="text-xs font-semibold flex items-center gap-1 px-2 py-1 rounded-full transition-all hover:opacity-80"
                    style={{ background: config.color + "22", color: config.color }}
                  >
                    <Play size={10} />
                    Watch
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
