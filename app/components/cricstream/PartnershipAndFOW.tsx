import type { Partnership, FallOfWicket } from "~/lib/cricket-data";

interface PartnershipAndFOWProps {
  partnership: Partnership;
  fallOfWickets: FallOfWicket[];
}

export function PartnershipAndFOW({ partnership, fallOfWickets }: PartnershipAndFOWProps) {
  return (
    <div className="space-y-4">
      {/* Current Partnership */}
      <div
        className="rounded-xl p-4"
        style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
      >
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">
          Current Partnership
        </div>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-white font-bold text-sm">{partnership.batsman1}</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-black"
              style={{ color: "#F5A623" }}
            >
              {partnership.runs}
            </div>
            <div className="text-gray-500 text-xs">{partnership.balls} balls</div>
            <div className="text-gray-400 text-xs">
              RR: {(partnership.runs / (partnership.balls / 6)).toFixed(2)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-white font-bold text-sm">{partnership.batsman2}</div>
          </div>
        </div>
      </div>

      {/* Fall of Wickets */}
      <div
        className="rounded-xl p-4"
        style={{ background: "#0F1629", border: "1px solid #1E2A45" }}
      >
        <div className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">
          Fall of Wickets
        </div>
        <div className="space-y-2">
          {fallOfWickets.map((fow) => (
            <div
              key={fow.wicket}
              className="flex items-center gap-3"
              style={{ borderBottom: "1px solid rgba(30,42,69,0.5)", paddingBottom: "8px" }}
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0"
                style={{ background: "#E8003D", color: "white" }}
              >
                {fow.wicket}
              </div>
              <div className="flex-1">
                <span className="text-white text-sm font-semibold">{fow.batsman}</span>
              </div>
              <div className="text-right">
                <div className="text-white font-bold text-sm">{fow.score}</div>
                <div className="text-gray-500 text-xs">Ov {fow.over}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
