interface Highlight {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  match: string;
  type: string;
}

interface HighlightsTabProps {
  highlights: Highlight[];
}

const TYPE_COLORS: Record<string, string> = {
  BATTING: "#F5A623",
  BOWLING: "#E8003D",
  MATCH: "#1DB954",
};

export function HighlightsTab({ highlights }: HighlightsTabProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-bold text-lg">Highlights & Clips</h2>
        <div className="flex gap-2">
          {["ALL", "BATTING", "BOWLING"].map((filter) => (
            <button
              key={filter}
              className="text-xs px-3 py-1.5 rounded-full font-semibold transition-all"
              style={{
                background: filter === "ALL" ? "#E8003D" : "rgba(255,255,255,0.06)",
                color: filter === "ALL" ? "white" : "#9CA3AF",
              }}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {highlights.map((h) => (
          <div
            key={h.id}
            className="rounded-xl overflow-hidden cursor-pointer transition-all hover:scale-[1.02] group"
            style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
          >
            {/* Thumbnail */}
            <div
              className="relative aspect-video flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }}
            >
              <span className="text-6xl group-hover:scale-110 transition-transform">{h.thumbnail}</span>

              {/* Play button overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(0,0,0,0.5)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(232,0,61,0.9)", boxShadow: "0 0 30px rgba(232,0,61,0.6)" }}
                >
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Duration */}
              <div
                className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded text-xs font-bold"
                style={{ background: "rgba(0,0,0,0.8)", color: "white" }}
              >
                {h.duration}
              </div>

              {/* Type badge */}
              <div
                className="absolute top-2 left-2 px-1.5 py-0.5 rounded text-xs font-bold"
                style={{
                  background: (TYPE_COLORS[h.type] || "#6B7280") + "33",
                  color: TYPE_COLORS[h.type] || "#6B7280",
                  border: `1px solid ${(TYPE_COLORS[h.type] || "#6B7280")}44`,
                }}
              >
                {h.type}
              </div>
            </div>

            {/* Info */}
            <div className="p-3">
              <h3 className="text-white text-sm font-semibold leading-snug mb-1 line-clamp-2">{h.title}</h3>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{h.match}</span>
                <span>{h.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
